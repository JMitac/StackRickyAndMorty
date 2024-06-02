import { FC, useEffect } from "react";
import { MagicMotion } from "react-magic-motion";
import { ItemCharacter } from "./Item";
import { useGetAllCharacters } from "../../hooks";
import { setTotalPage, useHomeStore } from "../../stores/Home";

export const AllCharacters:FC = () => {
    const { page } = useHomeStore((state) => state)
    const { data } = useGetAllCharacters({ nroPage: page})

    useEffect(() => {
        if(data?.info.pages) {
            setTotalPage(data.info.pages)
        }
    },[data?.info.pages])

    return (
        <MagicMotion>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.65em",
            }}>
            {data?.results.map((character) => (
                <ItemCharacter
                    key={character.id}
                    title={character.name}
                    imgSrc={character.image}
                />
                ))}
            </div>
        </MagicMotion>
    );
}