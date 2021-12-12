import React from 'react'
import { AiOutlineStar } from "react-icons/ai"

export default function Index() {
    return (
        <div className="border-2 border-black w-80 rounded-md bg-white">
            <img src="/tv.jpeg" alt="" className="rounded w-full" />
            <div className="flex flex-col justify-center items-center">
                <h4 className="w-4/5 mt-4">
                    Samsung 43 inch oled odyssey tv
                </h4>
                <div className="flex w-14 justify-evenly items-center bg-dgreen text-white font-semibold text-center rounded-lg">
                    <AiOutlineStar className=""/>
                    4.5
                </div>
                <p className='flex gap-2 items-end'>
                    <span className="font-semibold text-xl">$5000</span>
                    <span className="line-through">$7000</span>
                    <span className="font-semibold text-dgreen">20% off</span>
                </p>
            </div>
        </div>
    )
}
