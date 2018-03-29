import React from "react";
import styled from "styled-components";

import image from "./cat.png";

const Image = styled.img``;

const CatImage = () => {
  return <Image src={image} />;
};

export default CatImage;
