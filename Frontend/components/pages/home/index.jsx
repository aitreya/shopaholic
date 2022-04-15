import React from 'react'
import Navbar from "components/Global/Navbar"
import Banner from "components/pages/home/OfferBanners"
import CardRow from "./CardRow"
import CardGrid from "./CardGrid"

export default function Index() {
  return (
    <div className="min-h-screen bg-cgrey pb-10">
      <Navbar />
      <Banner />
      <div >
        <CardRow />
        <CardGrid/>
        <CardRow />
        <CardRow />
        {/* <CardRow /> */}
      </div>
    </div>
  )
}
