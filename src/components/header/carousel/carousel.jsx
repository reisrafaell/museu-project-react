import React, { useState } from "react";
import "./carousel.scss";
import Item from "./item";
import Carousel from "react-elastic-carousel";

import image1 from '../../../assets/image1.jpeg'

const CarouselApp = () => {
  return (
    <div className="carousel">
      <Carousel itemsToShow={1}>
      
        <Item> </Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
        <Item>7</Item>
      
      </Carousel>
    </div>
  );
};
export default CarouselApp;
