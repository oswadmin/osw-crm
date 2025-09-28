import { cache } from 'react';
import { dealsConfig, Deal } from '@/config/dealsConfig';

import { createClient, SanityClient, SanityDocument } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';
import { Prosto_One } from 'next/font/google';
import { Service } from './types';

const createSanityClient = (): SanityClient => {

    const SanityProjectID = process.env.SANITY_ProjectID;
    const SanityDataset = process.env.SANITY_Dataset;
    const SanityApiVersion = process.env.SANITY_apiVersion;

    //console.log("ProjectID:",SanityProjectID )
    //console.log("dataset:",SanityDataset )
    //console.log("apiVersion:",SanityApiVersion )

    if (!SanityProjectID || !SanityDataset || !SanityApiVersion) {
       // throw new Error("Sanity environment variables are missing. Failed to initialize client.");
       //console.log("ProjectID:",SanityProjectID )
    }

    return createClient({
        projectId: SanityProjectID,
        dataset: SanityDataset,
        apiVersion: SanityApiVersion,
        useCdn: false,
    });

}

export const sanityClient = createSanityClient();



// PRIVATE IMPLEMENTATION - We will keep its signature simple, expecting a mutable array.
async function fetchSanityData<T>(endpoint: string ): Promise<any> {
    // --- START ENHANCED DEBUGGING ---
    //console.log("--- [fetchSanityData] DEBUG START ---");
   
    const useSanity = process.env.USE_Sanity === 'true';
    //console.log(`Is USE_Sanity set to 'true'? ${useSanity}`);

    if (!useSanity) {
        //console.log("USE_Sanity is not 'true'. Returning fallback data immediately.");
        //console.log("--- [fetchSanityData] DEBUG END ---");
        return ;
    }

    const options = { next: { revalidate: 30 } };

    const response = await sanityClient.fetch<SanityDocument[]>(endpoint, {}, options).catch(err => {
        //console.error(`Network error for endpoint "${endpoint}":`, err.message);
        return null;
    });

    if (!response) {
        //console.error(`Sanity error for endpoint "${endpoint}" (Status: ${response}). Falling back.`);
        return;
    }

   
    //console.log("Successfully fetched data from Sanity.");
    return response;
}


// --- PUBLIC API FOR SERVICES ---

export const getServices = cache(async (): Promise<Service[]> => {
    
    const endpoint = `*[_type == "service"  && activeService == true] | order(orderRank){name, slug, cardImage } `
    //console.log("endpoint:", endpoint);
    
    // THE FIX: Create a new, mutable array from the readonly config.
    
    const result = await fetchSanityData<Service>(endpoint);

    return result;
});

export const getServiceBySlug = cache(async (slug: string): Promise<Service | null> => {
    const endpoint = `*[_type == "service" && slug.current == "${slug}"]`;
    //console.log("endpoint:", endpoint);

   
    const result = await fetchSanityData<Service>(endpoint);
    //console.log(`Response:`, result[0]);
    //console.log(`Response2:`, result[0].titleMsg);


    return result[0];

});


// --- PUBLIC API FOR DEALS (Example) ---
export const getDeals = cache(async (): Promise<Deal[]> => {
    const endpoint = '/deals';
        
    const result = await fetchSanityData<Deal>(endpoint);
    return result.data.map((item: any) => ({ id: item.id, ...item.attributes }));
});



const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source: any) => {
    return builder.image(source)
}


