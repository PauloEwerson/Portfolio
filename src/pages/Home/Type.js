import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter 
      options={{
        strings: [
          "JavaScript",
          "Typescript",
          "React JS",
          "Node JS",
          "Docker",
          "MySQL",
          "MongoDB",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
