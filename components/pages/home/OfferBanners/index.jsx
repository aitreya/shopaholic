import React from 'react'
import Slider from "react-slick";
import Banner from './Banner'

export default function index() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        nextArrow : <img src="rightarr.svg" alt="" style={{height : "500px !important"}}/>,
        prevArrow : <img src="leftarr.svg" alt="" />
    };

    const offers = ["Bhai sab free h" , "99% discount available" , "baad me ja" , "aur kitte offer lega gaandu"]

    return (
        <div className="w-2/3 mx-auto mt-4">
            <Slider {...settings}>
                {offers.map((i,key) => <Banner data={i} key={key}/>)}
            </Slider>
            
        </div>
    )
}
