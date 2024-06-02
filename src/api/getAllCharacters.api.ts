import { API_GET_ALL_CHARACTERS } from "../constants"

interface Props {
    nroPage?: number
}

export const getAllCharacters = ({ nroPage = 1}: Props) => fetch(`${API_GET_ALL_CHARACTERS}?page=${nroPage}`).then((res) => res.json())