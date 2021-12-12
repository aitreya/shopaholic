import React from 'react'
import ProductCard from "../ProductCard"

export default function Index() {
  return (
    <div className="bg-cgrey rounded-xl w-10/12 mx-auto">
      <div className="flex px-10 py-5 items-end gap-4">
        <h2 className="text-3xl">Mobiles</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, eos.</p>
      </div>
      <div className="px-10 pb-10">
        <ProductCard/>
      </div>
    </div>
  )
}
