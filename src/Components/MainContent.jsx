import React from "react";
import { Carousel } from "./Carousel/Carousel";
import { Comments } from "./Comments/Comments";
import { NewTastes } from "./NewTastes/NewTastes";

export const MainContent = () => {
  return (
    <>
      <Carousel />
      <NewTastes/>
      {/* <Comments/> */}
    </>
  );
};
