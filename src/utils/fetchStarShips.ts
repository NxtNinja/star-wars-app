import axios from "axios"
import { StarShipArray } from "./types/StarShipType"

const fetchData = async (url: string) => {
    const res = await axios.get(url)

    const data = res.data

    return data
}


export const fetchStarShips = async (starShipUrls: string[]): Promise<StarShipArray> => {
    const starshipsData = starShipUrls.map(url => fetchData(url))

    return Promise.all(starshipsData)
}