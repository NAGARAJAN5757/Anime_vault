"use server"

import AnimeCard, { AnimeProp } from "@/app/components/AnimeCard"

export const fetchAnime = async (page: number) => {
	if (process.env.API_KEY === undefined) return new Error("key not found")
	const response = await fetch(
		`${process.env.API_KEY}?page=${page}&limit=8&order=popularity`
	)
	const data = await response.json()
	// console.log(data)
	return data.map((item: AnimeProp, index: number) => (
		<AnimeCard key={item.id} anime={item} index={index} />
	))
}
