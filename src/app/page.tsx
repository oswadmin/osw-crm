
import { CardServicesv4 } from "@/components/CardServices"
import { CardWhyUsLarge } from "@/components/CardWhyUsLarge"
import ModalOverlay from "@/components/MenuMobileBottom"
import PageFooter from "@/components/PageFooter"
import { PageSection } from "@/components/PageSection"
import { PageTitleSection } from "@/components/PageSection-Title"
import { siteConfig } from "@/config"
import Image from "next/image"
import { map } from "zod"
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider"
import { ButtonMedia } from "@/components/ButtonMedia"
import { InstagramIcon } from "lucide-react"
import { Metadata } from "next"
import Accordion from "@/components/Accordian"

import { getServices, urlFor } from "@/lib/sanityData"
import { BlockEstimate } from "@/components/BlockEstimate"
import { ImageTextContent, ImageTextLayout } from "@/components/ImageTextLayout"
import { PortableText } from "next-sanity"
import { BlockAccordian } from "@/components/BlockAccordian"


const imgH = "600"
let mapCount = 0
let printDiv = true

function test(somdata: any) {
	const willSee = "ok"
}

export const metadata: Metadata = {
	title: "Professional Exterior Cleaning Experts",
	description: "Premier soft washing, pressure washing and power washing experts. We offer driveway, house, roof, deck, fence, patio, and waste bin washing. Currently serving thes Ohio cities: Westerville, Sunbury, New Albany, Lewis Center, Worthington and surrounding areas. Visit our website to see how our delightful orange-scented soft washing sets us apart and request a free estimate.",
	openGraph: {
		images: ['/OSW_Logo_3_Transparent.webp'],
	},
};




export default async function HomePage() {

	const allServices = await getServices();
	//console.log("Response:", allServices);

	const ownersMsg: ImageTextContent = {
		title:"A message from our team",
		body:"Hello from all of us at Orange Soft Wash! We wanted to start by thanking you for considering our team for your home washing needs. We're all committed to providing top-notch service – and nothing short of  excellence is the standard we set for ourselves. But what truly drives us is serving our community and creating great experiences for every homeowner we work with. We take immense pride in our work and are confident you won't find a better exterior washing service anywhere else.",
		box:true,
		imageSrc:"",
		imageAlt:"",
		imagePosition:"right",
		imageSize:"medium",
	}

	const valueMsg: ImageTextContent = {
		title:"Our value is unmatched",
		body:"Orange Soft Wash goes above and beyond to provide results at prices that make sense for your budget. We don't just clean—we aim to protect your investment. Our expert team tailors each service to your property's specific needs. We bring the perfect balance of power and precision to every job, proving why homeowners and businesses throughout the area trust us as their go-to exterior cleaning specialists.",
		box:true,
		imageSrc:"",
		imageAlt:"",
		imagePosition:"left",
		imageSize:"medium",
	}


	const locationMsg: ImageTextContent = {
		title:"",
		body:"<div className='flex flex-1 flex-col justify-center items-center text-blue'><p className='text-2xl pb-2'>North Columbus</p><p className='text-2xl pb-2'>Dublin</p><p className='text-2xl pb-2'>Worthington</p><p className='text-2xl pb-2'>Westerville</p><p className='text-2xl pb-2'>New Albany</p><p className='text-2xl pb-2'>Upper Arlington</p><p className='text-2xl pb-2'>Johnstown</p><p className='text-2xl pb-2'>Sunbury</p><p className='text-2xl pb-2'>Delaware</p><p className='text-2xl pt-2 pb-2'>+ Surrounding Areas</p></div>",
		box:false,
		imageSrc:"/OSW_Locations.webp",
		imageAlt:"",
		imagePosition:"right",
		imageSize:"large",
	}

	return (
		<>
			<main>
				{/*****************************************************************/}
				{/* TITLE SECTION*/}
				{/*****************************************************************/}
				<PageTitleSection
					title="Power Washing Central Ohio"
					imgURL="/OSW_Surface1.webp"
					imgAlt="Pressure Washing Walkway"
				/>

				{/*****************************************************************/}
				{/* SERVICES SECTION*/}
				{/*****************************************************************/}
				<PageSection
					sectionID="Services"
					title="What we wash"
					subtitle="Click a service to dive deeper..."
					className="bg-linear-to-b from-white via-sky-100 to-white"
				>
					<div className="flex flex-col desktop:flex-row desktop:flex-wrap justify-center gap-4 px-4 desktop:px-0">
						{allServices.map((service) => {
								
								//console.log("This is service object:", service)
								return (
									

									<CardServicesv4
										cardTitle={service.name}
										cardURL={`/services/${service.slug.current}`}
										key={`ServiceLink_${service.slug.current}`}
									>
										<Image
											src={urlFor(service.cardImage).url()}
											alt=""
											width={250}
											height={400}
										//className={obj.className}
										/>
									</CardServicesv4>
						)})}
					</div>
				</PageSection>

				{/*****************************************************************/}
				{/* GALLERY SECTION */}
				{/*****************************************************************/}
				<PageSection sectionID="Gallery" title="Before and After" subtitle="" className="bg-white ">
					<div className="flex flex-1 justify-center">
						<ReactCompareSlider
							className="rounded-2xl shadow-lg h-[349px] w-[545px]"
							position={95}
							itemOne={<ReactCompareSliderImage src="./OSW_Driveway_Before.webp" alt="Image one" />}
							itemTwo={<ReactCompareSliderImage src="./OSW_Driveway_After.webp" alt="Image two" />}
						/>
					</div>

					<div className="flex flex-1 justify-center text-lg align-middle items-center pt-2">
						<p className="mr-2">Watch our transformations on </p>
						<a
							href='/MediaIcon_Instagram.webp'
							aria-label="Instagram"
							target="_blank"
							rel="noopener noreferrer"
							className="text-wrap"
						>
							<Image
								src="/MediaIcon_Instagram.webp"
								alt="Instagram"
								width={40}
								height={40}
								className="border-2 border-white w-[40px]"
							/>
						</a>
					</div>
				</PageSection>

				{/*********************************************************/}
				{/* LOCATIONS SECTION */}
				{/*********************************************************/}
				<PageSection
					sectionID="Locations"
					title="Our Locations"
					subtitle="We're expanding, now serving all North Columbus areas..."
					className="bg-linear-to-b from-white via-sky-100 to-white"
				>
					<ImageTextLayout content={locationMsg} imageUrl="/OSW_Locations.webp"/>	
				</PageSection>

				{/**********************************************************/}
				{/* REVIEWS SECTION */}
				{/**********************************************************/}
				<PageSection
					sectionID="Reviews"
					title="Our Reviews"
					subtitle="What people are saying..."
					className="bg-linear-to-b from-white via-sky-100 to-white"
				>
					<div>Hi</div>
				</PageSection>

				{/***********************************************************/}
				{/* ABOUT SECTION */}
				{/***********************************************************/}  
				<PageSection
					sectionID="About"
					title="About us"
					subtitle=" "
					backgroundImage="/OSW_Surface1.webp"
					parallax={true}
					className="bg-[#fed7aa]/70 bg-blend-overlay bg-min-h-[400px]"
				>
					{/******************************************************/}
					{/* OWNERS MESSAGE */}
					{/******************************************************/}
 					<ImageTextLayout content={ownersMsg} imageUrl=""/>
					
					{/*******************************************************/}
					{/* VALUE MESSAGE */}
					{/*******************************************************/}
					<ImageTextLayout content={valueMsg} imageUrl=""/>


				</PageSection>

				{/***********************************************************/}
				{/* FAQs 
				{/***********************************************************/}
				<PageSection
					sectionID="FAQs"
					title="Frequently Asked Questions"
					subtitle="See our most popular questions and answers below..."
					className="bg-white"
				>

						<Accordion title="What is Soft Washing?" body="
							Soft washing is a low-pressure approach which combines special cleaning solution, soaps, and
								a power washing system that uses about the same pressure as a garden hose. However, unlike a
								standard garden hose, our equipment provides increased flow rate allowing us to easily reach
								any part of your home from the ground. We promise to never use high-pressure on delicate
								surfaces!" />

						<Accordion title="How do we price our services?	" body="At Orange Soft Wash, we believe in making things simple. Our pricing is straightforward and based on square footage.

							All we need are measurements to give you an accurate quote for any of our services. This can often be done without a site visit, and typically takes a few minutes.  Give us a call today for your free quote!" />

				</PageSection>

				{/*****************************************************************/}
				{/* WHY SECTION */}
				{/*****************************************************************/}
				<PageSection 
					sectionID="Why" 
					title="Why Choose Us?" 
					subtitle=" " 
					className="bg-linear-to-b from-white from-0% via-sky-100 via-50%  to-white to-99% ">

					<div className="container flex flex-wrap justify-center gap-4 ">
						<CardWhyUsLarge
							title="Quick & Easy"
							cardText="Customer experience is our #1 goal.  We make it a breaze to work with us"
						>
							<Image
								src={siteConfig.OSW_IMG.IconLightning}
								alt=""
								width={50}
								height={50}
								className="object-contain"
							/>
						</CardWhyUsLarge>

						<CardWhyUsLarge
							title="Eco-Friendly Options"
							cardText="We prioritize both the health of your property and the planet"
						>
							<Image 
								src='/OSW_Icon_Eco1.webp'
							 	alt="" 
								width={50} 
								height={50} 
								className="" />
						</CardWhyUsLarge>

						<CardWhyUsLarge title="Licensed & Insured" cardText="Trust and confidence in the team you call">
							<Image src='/OSW_Icon_Shield.webp' alt="" width={50} height={50} className="" />
						</CardWhyUsLarge>

						<CardWhyUsLarge title="Satisfaction Guaranteed" cardText="We stand behind our services 100%">
							<Image
								src={siteConfig.OSW_IMG.OSW_Icon_Satisfaction}
								alt=""
								width={50}
								height={50}
								className=""
							/>
						</CardWhyUsLarge>
					</div>
				</PageSection>

				{/*****************************************************************/}
				{/* ESTIMATE SECTION */}
				{/*****************************************************************/}
				<PageSection 
					sectionID="Estimate2" 
					title="" 
					subtitle="" 
					className="bg-white">

					<BlockEstimate estimateMsg="Orange ya ready for a new look?" />

				</PageSection>
			</main>

			<PageFooter />
			<ModalOverlay />
		</>
	)
}
