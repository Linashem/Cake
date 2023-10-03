import React from "react";
import { Carousel } from "./Carousel/Carousel";
import { Goods } from "./Goods/Goods";
import { Preview } from "./Preview/Preview";

export const MainContent = () => {
  return (
    <>
      {/* <Goods/> */}
      <Carousel />
      <Preview/>
    </>
  );
};
