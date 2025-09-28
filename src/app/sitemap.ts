import { getServices } from "@/lib/sanityData";


export default async function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const allServices = await getServices();

    // 1. Generate URLs for each active service slug page
    const serviceUrls = allServices.map(service => {
            return {
                url: `${baseUrl}/services/${service.slug.current}`, // Construct the URL with the slug
                lastModified: new Date(),
            };
        });

    // 2. Define your static page routes
    const staticRoutes = ['/', '/services', '/estimate'];
    const staticUrls = staticRoutes.map(route => {
        return {
            url: route === '/' ? baseUrl : `${baseUrl}${route}`,
            lastModified: new Date(),
        };
    });

    // 3. Combine the static and dynamic URLs into a single array
    return [
        ...staticUrls,
        ...serviceUrls
    ];
}