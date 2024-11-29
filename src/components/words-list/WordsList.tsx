import React, { FC } from "react";
import { WordsListProps } from "./WordsList.types";
import "./WordsList.css";

const WordsList: FC<WordsListProps> = ({ words, darkMode }) => {
  return (
    <div className={darkMode ? "words dark" : "words"}>
      {words.map((word, index) => (
        <>
          <h3 className="word" key={index} style={{ display: "inline" }}>
            {word}
          </h3>
          {index < words.length - 1 && <div className="dot"></div>}
        </>
      ))}
    </div>
  );
};

export default WordsList;
