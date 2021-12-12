import React from 'react'
import SearchBar from "./SearchBar"
import {GiHamburgerMenu} from "react-icons/gi"
import {CgProfile} from "react-icons/cg"

export default function Index() {
    return (
        <div className="h-20 bg-cyellow px-10 flex justify-between sticky top-0 z-10 shadow-xl items-center">
            <div className="flex justify-center items-center">
                <img src="yt.svg" alt="" className="h-12 cursor-pointer" />
            </div>
            <SearchBar/>
            <div className="flex justify-center items-center gap-6">
                <GiHamburgerMenu className="text-2xl cursor-pointer"/>
                <CgProfile className="text-4xl cursor-pointer"/>
            </div>
        </div>
    )
}
