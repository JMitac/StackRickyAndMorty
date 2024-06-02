import { getAllCharacters } from "../api";
import { TResGetAllCharacters } from "../types";
import { useGetData } from "./useGetData";

interface Props {
    nroPage?: number
}

export const useGetAllCharacters = ({ nroPage }: Props) => {
    const { data, ...rest } =  useGetData({
        queryKey: ['allCharacters', nroPage],
        queryFn: () => getAllCharacters({nroPage}),
        refetchOnWindowFocus: false,
        retry: 1,
        enabled: !!nroPage
    })

    return {
        data: data as TResGetAllCharacters,
        ...rest
    }
}