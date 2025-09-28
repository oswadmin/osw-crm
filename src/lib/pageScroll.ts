"use client"

interface handleScrollProps {
	sectionId?: string
	scrollDuration?: number
	scrollEnd?: number
	scrollStart?: number
	startTime?: number
}

export function ScrollPage({
	sectionId = "",
	scrollDuration = 500,
	scrollEnd = 0,
	scrollStart = window.scrollY,
	startTime = Date.now(),
}: handleScrollProps) {
	//console.log("ScrollPage")

	if (sectionId !== "") {
		const sectionPosition = getSectionScrollPosition(sectionId)
		if (sectionPosition !== null) {
			//console.log("Section position from top of document:", sectionPosition)
			scrollEnd = sectionPosition
		}
	}

	const animateScroll = () => {
		const elapsedTime = Date.now() - startTime
		const progress = Math.min(elapsedTime / scrollDuration, 1)
		const scrollPosition = scrollStart + (scrollEnd - scrollStart) * progress
		window.scrollTo(0, scrollPosition)

		if (progress < 1) {
			requestAnimationFrame(animateScroll)
		}
	}

	animateScroll()
}

function getSectionScrollPosition(sectionId: string) {
	const section = document.getElementById(sectionId)
	if (!section) {
		return null // Handle the case where the section doesn't exist
	}

	const rect = section.getBoundingClientRect()
	return rect.top + window.pageYOffset // or window.scrollY
}
