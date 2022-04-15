import React from 'react'
import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr"
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
        nextArrow: <GrNext />,
        prevArrow: <GrPrevious />
    };

    const offers = ["Bhai sab free h", "99% discount available", "baadh me ja", "aur kitte offer lega "]

    return (
        <div className="w-2/3 mx-auto mt-4 mb-10 border-4 border-cblack rounded-2xl">
            <Slider {...settings}>
                {offers.map((i, key) => <Banner data={i} key={key} />)}
            </Slider>

        </div>
    )
}
