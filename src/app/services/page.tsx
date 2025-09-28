
import { CardServicesv4 } from "@/components/CardServices"
import ModalOverlay from "@/components/MenuMobileBottom"
import PageFooter from "@/components/PageFooter"
import { PageSection } from "@/components/PageSection"
import { PageTitleSection } from "@/components/PageSection-Title"
import Image from "next/image"
import { Suspense } from "react"
import { Metadata } from "next"
import { getServiceBySlug, getServices, urlFor } from "@/lib/sanityData"
import { BlockEstimate } from "@/components/BlockEstimate"


export const metadata: Metadata = {
	title: "Services Page",
	description: "Premier soft washing, pressure washing and power washing experts. We offer driveway, house, roof, deck, fence, patio, and waste bin washing. Currently serving thes Ohio cities: Westerville, Sunbury, New Albany, Lewis Center, Worthington and surrounding areas. Visit our website to see how our delightful orange-scented soft washing sets us apart and request a free estimate.",
	openGraph: {
		images: ['/OSW_Logo_3_Transparent.webp'],
	},
};



const ServicePage = async () => {
	const allServices = await getServices()

	//return <div>Service not found</div>
	if (!allServices) {
		return <div>ServiceData Not Found</div>
	}


	// Use Promise.all() to fetch all service data concurrently
	const servicesWithData = await Promise.all(
		allServices.map(async (service) => {
		// Await the asynchronous call inside the map
		const serviceData = await getServiceBySlug(service.slug.current)

		//console.log("serviceData:", serviceData)
		return serviceData
		})
	)

	return (
		<>
			{/*****************************************************************/}
			{/* TITLE SECTION*/}
			{/*****************************************************************/}
			<PageTitleSection title="Our Services" imgURL="/OSW_Surface8.webp" />

			{/* Loop through all services */}
			{servicesWithData.map((service: any, index: any) => {
				
					return (
						<>
							{/* *********************************************/}
							{/* PRESSURE WASHING SERVICES SECTION*/}
							{/***********************************************/}
							<PageSection
								sectionID={service.name}
								title={service.titleMsg}
								subtitle={service.subTitleMsg}
								className={service.className}
								//"bg-linear-to-b from-white from-0% via-sky-100 via-50%  to-white to-100% "

							>
								<div className="flex flex-wrap justify-center desktop:space-x-4">
									{service.details.map((detail: any, index: any) => (
										<>
											<CardServicesv4
												cardTitle={detail.detailSummary}
												cardDesc={detail.detailDescription}
											>
												<Image
													src={urlFor(detail.detailImageURL).url()}
													alt=""
													width={250}
													height={400}
													className={detail.detailImageClass}
													layout="responsive"
													objectFit="cover"
												/>
											</CardServicesv4>
										</>
									))}
								</div>
							</PageSection>

							{/************************************************/}
							{/* ESTIMATE SECTION */}
							{/************************************************/}
							<PageSection key="Estimate"
								sectionID=""
								title=""
								subtitle=""
								//backgroundImage={section.backgroundImage}
								//parallax={section.parallax}
								className="bg-white"
							><></>
									<BlockEstimate estimateMsg={service.estimateMsg}/>
							</PageSection>
							
						</>
					)
				
			})}
		</>
	)
}

function BuildSection() { }

export default function ServicesPage() {
	return (
		<>
			<main>
				<Suspense fallback={<div>Loading Content...</div>}>
					<ServicePage />
				</Suspense>
			</main>

			<PageFooter />
			<ModalOverlay />
		</>
	)
}
