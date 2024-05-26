import axios from "axios"
import { FilmsArray } from "./types/FilmsType"

const fetchData = async (url: string) => {
    const res = await axios.get(url)

    const data = res.data

    return data
}


export const fetchFilms = async (filmUrls: string[]): Promise<FilmsArray> => {
    const filmData = filmUrls.map(url => fetchData(url))

    return Promise.all(filmData)
}