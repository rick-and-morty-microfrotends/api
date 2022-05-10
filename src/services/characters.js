import { API_URL, CHARACTERS_PATH } from "../app-constants";

const getByUrl = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export const getAllCharacters = async () => {
    return await getByUrl(`${API_URL}${CHARACTERS_PATH}`);
}