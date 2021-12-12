import React from 'react'
import { AiFillStar } from "react-icons/ai"

export default function Index() {
  return (
    <div className="w-80 rounded-md bg-white mr-4 hover:scale-105 cursor-pointer relative">
      <img src="/tv.jpeg" alt="" className="rounded p-5" />
      <div className="flex flex-col justify-center items-center">
        <h4 className="w-4/5 mt-4">
          Samsung 43 inch oled odyssey tv
        </h4>
        <p className='flex gap-2 items-end mb-2'>
          <span className="font-semibold text-xl">$5000</span>
          <span className="line-through">$7000</span>
          <span className="font-semibold text-dgreen">20% off</span>
        </p>
        <div className="flex absolute top-2 right-2 w-14 justify-evenly items-center bg-dgreen text-white font-semibold text-center rounded-lg">
          <AiFillStar />
          4.5
        </div>
      </div>
    </div>
  )
}
