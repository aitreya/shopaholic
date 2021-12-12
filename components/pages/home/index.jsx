import React from 'react'
import Navbar from "components/Global/Navbar"
import Banner from "components/pages/home/OfferBanners"
import CardRow from "./CardRow"

export default function Index() {
  return (
    <div className="min-h-screen bg-cgrey">
      <Navbar />
      <Banner />
      <div >
        <CardRow />
        <CardRow />
        <CardRow />
        <CardRow />
      </div>
    </div>
  )
}
