import React, { Component } from "react";
import styled from "styled-components";

import CatImage from "./components/CatImage";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H1 = styled.h1`
  color: rgba(0, 0, 0, 0.87);
  font-size: 34px;
`;
const H2 = styled.h2`
  color: rgba(0, 0, 0, 0.87);
  font-size: 24px;
`;

class Home extends Component {
  render() {
    return (
      <Section>
        <H1>Welcome to the Homepage.</H1>
        <CatImage />
        <H2>
          Don't forget to check out the <a href="/todoapp">Demo app</a>
        </H2>
      </Section>
    );
  }
}

export default Home;
