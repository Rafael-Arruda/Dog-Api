import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Image = styled.img`
  width: 40vw;
  height: 50vh;
`;

export default function DogPages() {
  const [dog, setDog] = useState();

  function getDog() {
    let API = "https://dog.ceo/api/breeds/image/random";

    axios.get(API).then((response) => {
      console.log(response.data.message);
      setDog(response.data.message);
    });
  }

  return (
    <>
      <h1>Página Anti stress</h1>

      <Link to="/">
        {" "}
        <p>Home</p>{" "}
      </Link>
      <button
        onClick={() => {
          getDog();
        }}
      >
        Clique aqui
      </button>
      {dog && <Image src={dog} alt="Imagem de doguinho" />}
    </>
  );
}
