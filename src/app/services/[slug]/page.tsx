import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PageSection } from "@/components/PageSection";
import { CardServicesv4 } from "@/components/CardServices";
import Image from "next/image";
import ModalMenu from "@/components/MenuMobileTop";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import ModalOverlay from "@/components/MenuMobileBottom";
import Accordion from "@/components/Accordian";
import { ImageTextLayout } from "@/components/ImageTextLayout";
import { getServiceBySlug, getServices, urlFor } from "@/lib/sanityData"
import { BlockEstimate } from "@/components/BlockEstimate";



// This tells Next.js which pages to pre-build at build time.
// It improves performance and is great for SEO.
export async function generateStaticParams() {
    
    const allServices = await getServices();

    return allServices.map((service) => ({
            slug: service.slug.current,
        }));
}

// This function generates the unique metadata for each service page.
export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const params = await props.params;
    //const service = servicesConfig.OSW_Services.find(s => s.slug === params.slug);
    const serviceData = await getServiceBySlug(params.slug);
    //console.log("Slug:", params.slug)


    if (!serviceData) {
        return {
            title: "Service Not Found",
            description: "The requested service could not be found.",
        };
    }

    return {
        title: serviceData.metaTitle,
        description: serviceData.metaDescription,
        openGraph: {
            title: serviceData.metaTitle,
            description: serviceData.metaDescription,
            images: [urlFor(serviceData.cardImage).url()], 
        },
    };
}

export default async function IndividualServicePage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    // Find the specific service data based on the slug from the URL   
    const serviceData = await getServiceBySlug(params.slug);


    // If no service matches the slug, show a 404 page
    if (!serviceData) {
        notFound();
    }

    // Now we render the content for just this one service
    return (
        <>
            <main>
                <ModalMenu/>
                <PageHeader/>

                {/*****************************************************************/}
                {/* Service Content */}
                {/*****************************************************************/}
                {serviceData.details && serviceData.details.length > 0 && (
                    <PageSection
                        sectionID={serviceData.name}
                        title={serviceData.titleMsg} // Or maybe a more detailed title
                        subtitle={serviceData.subTitleMsg}
                        className="bg-linear-to-b from-white from-0% via-sky-100 via-50% to-white to-100%"
                    >
                        <div className="flex flex-wrap justify-center desktop:space-x-4">
                            {serviceData.details.map((detail: any, index: any) => {
                                
                                //console.log("This is service object:", detail)
                            
                            
                                return (
                                    
                                    <CardServicesv4
                                        key={index} // Add a key for React lists
                                        cardTitle={detail.detailSummary}
                                        cardDesc={detail.detailDescription}
                                    >
                                        <Image
                                            src={urlFor(detail.detailImageURL).url()}
                                            alt={detail.detailSummary} // IMPORTANT: Add descriptive alt text for SEO
                                            width={350}
                                            height={400}
                                            //className={detail.detailImageClass}
                                        // Consider removing layout="responsive" and objectFit="cover" for Next 13+ Image,
                                        // as it's handled differently. Styling with Tailwind is preferred.
                                        />
                                    </CardServicesv4>
                                )
                            })}
                        </div>
                    </PageSection>
                )}

                {/*****************************************************************/}
                {/* Service Content */}
                {/*****************************************************************/}
                {serviceData.sections && serviceData.sections.length > 0 && (

                    serviceData.sections.map((section: any, index: any) => (
                        
                        
                        <PageSection key={index}
                            sectionID=""
                            title={section.titleMsg}
                            subtitle={section.subTitleMsg}
                            backgroundImage={section.backgroundImage ? urlFor(section.backgroundImage).url() : ""}
                            parallax={section.parallax}
                            className={section.className ? section.className : 'bg-white'}
                        >

                            {section.contents && section.contents.length > 0 && (

                                section.contents.map((content: any, contentIndex: any) => {
                                    

                                    //console.log(content)

                                    switch (content._type) {
                                        case 'imagetext':
                                            return <ImageTextLayout content={content} imageUrl={content.imageSrc ? urlFor(content.imageSrc).url() : ""}/>;
                                        case 'accordian':
                                            //console.log("This is accordian content:", content)                                            
                                            return <Accordion title={content.title} body={content.body} />;
                                        case 'estimate':
                                            //console.log("This is estimate content:", content)                                            
                                            return <BlockEstimate estimateMsg={content.estimateMsg}/>;
                                        // Add more cases for other types as your app grows
                                        // case 'video':
                                        // return <VideoComponent content={content} />;
                                        default:
                                        // Return a default component or null if no match is found
                                        return null;
                                    }


                                })
                            )}
                        </PageSection>
                    ))
                )}
            </main >

            <PageFooter/>
            <ModalOverlay />
        </>
    );
} 