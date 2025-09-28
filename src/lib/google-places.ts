"use server" // Mark this file as server-side

export interface PlaceDetails {
	name: string
	rating: number
	userRatingCount: number
	reviews: PlaceReview[]
}

export interface PlaceReview {
	name: string
	relativePublishTimeDescription: string
	rating: number
	text: PlaceReviewText
	authorAttribution: PlaceReviewAuthor
}

export interface PlaceReviewText {
	text: string
	languageCode: string
}

export interface PlaceReviewAuthor {
	displayName: string
	uri: string
	photoUri: string
}

export async function getPlaceDetails(placeId: string): Promise<PlaceDetails> {
	const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_PLATFORM_APIKEY_SERVER_ONLY

	if (!GOOGLE_MAPS_API_KEY) {
		throw new Error("Google Maps API key is not configured")
	}

	const fields = ["name", "rating", "userRatingCount", "reviews"].join(",")

	const url = `https://places.googleapis.com/v1/places/${placeId}?fields=${fields}&key=${GOOGLE_MAPS_API_KEY}`

	//console.log(url)

	try {
		const response = await fetch(url)

		if (!response.ok) {
			const errorText = await response.text() // Get the raw text response
			//console.error("Google Places API Error (HTTP Status):", response.status, response.statusText);
			//console.error("Raw Error Response Body:", errorText); // Log the raw body
			throw new Error(`Google Places API error: ${response.statusText} - Raw Body: ${errorText}`)
		}

		const data = await response.json()

		// const util = require('util');
		// console.log(util.inspect(data, { depth: null, colors: true }));

		// if (data.status !== 'OK') {
		//   throw new Error(`Google Places API error: ${data.status}`);
		// }

		return {
			name: data.name,
			//formatted_address: data.formatted_address,
			rating: data.rating,
			userRatingCount: data.userRatingCount,
			reviews: data.reviews || [],
		}
	} catch (error) {
		console.error("Error fetching place details:")
		throw error
	}
}
