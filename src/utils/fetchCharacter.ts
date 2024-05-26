import axios from "axios";
import { Hero } from "./types/CharacterType";

const api = process.env.NEXT_PUBLIC_API_URL

export const fetchCharacter = async (id: number) => {
    await new Promise<void>((resolve) => setTimeout(resolve, 1500));

    const res = await axios.get(`${api}/${id}`);

    const data = res.data as Hero;

    return data;
}