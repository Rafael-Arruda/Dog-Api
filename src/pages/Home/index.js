import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #ffe4c4;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LinkBox = styled.div`
  width: 60vw;
  height: 40vh;
  border: solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;

export default function Home() {
  return (
    <Container>
      <LinkBox>
        <h1> Eu sou a Home </h1>
        <Link to="/dogpages">
          <p>DogPages</p>
        </Link>
      </LinkBox>
    </Container>
  );
}
