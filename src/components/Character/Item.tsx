import { FC } from "react";

interface CharacterProps {
    title: string;
    imgSrc: string;
}

export const ItemCharacter:FC<CharacterProps> = ({ title, imgSrc }) => {
    return (
        <div
          style={{
            width: "10rem",
            padding: "0.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            backgroundColor: "#607D8B",
          }}
        >
          <h5
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1.1em",
            }}
          >
            {title}
          </h5>
          <img
            alt={`image of ${title}`}
            src={imgSrc}
            style={{ width: "auto", height: "8rem", margin: "auto" }}
          />
        </div>
      );
}