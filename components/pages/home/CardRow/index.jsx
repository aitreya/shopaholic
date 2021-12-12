import React from 'react'
import Slider from "react-slick"
import {GrNext , GrPrevious} from "react-icons/gr"
import ProductCard from "../ProductCard"

export default function Index() {
  const sliderSetting = {
    nextArrow:<GrNext/>,
    prevArrow: <GrPrevious/>,
    slidesToShow : 4,
    infinite : true,
    // variableWidth: true,
  }
  return (
    <div className="bg-white rounded-xl w-10/12 mx-auto mb-6">
      <div className="flex px-10 py-5 items-end gap-4">
        <h2 className="text-3xl font-medium">Electronics</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, eos.</p>
      </div>
      <div className="px-10 pb-10">
        <Slider {...sliderSetting}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Slider>
      </div>
    </div>
  )
}
