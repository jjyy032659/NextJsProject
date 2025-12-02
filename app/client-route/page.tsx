"use client";
import { serverSideFunction } from "@/utils/server-utils";


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




export default function ClientRoutePage() {

const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="http://placekitten.com/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/400/200" />
        </div>
      </Slider>
    </div>
  );


    // const result = serverSideFunction();
    // console.log("This is a client-side component.");    
    //     return <>
    //     <h1>client Route Page</h1>;
    //     <p>{result}</p>
    //     </>
}