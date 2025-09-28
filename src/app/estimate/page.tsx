import { PageSection } from "@/components/PageSection"
import { FormEstimate } from "./_components/formEstimate"
import PageFooter from "@/components/PageFooter"
import PageHeader from "@/components/PageHeader"
import ModalMenu from "@/components/MenuMobileTop";
import { getServices } from "@/lib/sanityData"

export default async function EstimatePage() {

	const allServices = await getServices();

	return (
		<>
			<main>
				{/*****************************************************************/}
				{/* ESTIMATE SECTION */}
				{/*****************************************************************/}
				{/* <PageSection title="Estimate Request" className="bg-linear-to-b from-white via-30% via-orange to-orange -mt-20" > */}
				<ModalMenu/>
				<PageHeader/>
				<FormEstimate/>
			</main>

			<PageFooter showTop={false}/>
		</>
	)
}
