import React from "react";
import { Carousel } from "./Carousel/Carousel";
import { NewTastes } from "./NewTastes/NewTastes";

export const MainContent = () => {
  return (
    <>
      {/* <Goods/> */}
      <Carousel />
      <NewTastes/>
    </>
  );
};
