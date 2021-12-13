import React from 'react'
import Slider from "react-slick"
import { GrNext, GrPrevious } from "react-icons/gr"
import ProductCard from "../ProductCard"

export default function Index() {
    return (
        <div className="bg-white rounded-xl w-10/12 mx-auto mb-6 overflow-hidden">
            <div className="flex px-10 py-5 items-end gap-4">
                <h2 className="text-3xl font-medium">Electronics</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, eos.</p>
            </div>
            <div className="flex">
                <div className=" w-2/5 p-3">
                    <div className="w-full rounded-md bg-cblack h-full">

                    </div>
                </div>
                <div className="pr-10 pb-10 grid grid-flow-col overflow-x-auto grid-rows-2">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    )
}
