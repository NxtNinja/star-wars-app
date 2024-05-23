import axios from "axios"
import { VehicleArray } from "./types/VehicleType"

const fetchData = async (url: string) => {
    const res = await axios.get(url)

    const data = res.data

    return data
}


export const fetchVehicles = async (vehicleUrls: string[]): Promise<VehicleArray> => {
    const vehicleData = vehicleUrls.map(url => fetchData(url))

    return Promise.all(vehicleData)
}