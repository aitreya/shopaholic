import React from 'react'

export default function Index() {
    const btnstyles = "h-20 bg-cblack px-10 flex justify-between"
    return (
        <div className={btnstyles}>
            <div className="flex justify-center items-center">
                <img src="yt.svg" alt="" className="h-12 cursor-pointer" />
            </div>
            <div className="flex justify-center items-center">
                <ul className="flex justify-center items-center text-white text-2xl gap-6 ">
                    <li className="cursor-pointer hover:scale-110">Home</li>
                    <li className="cursor-pointer hover:scale-110">Electronics</li>
                    <li className="cursor-pointer hover:scale-110">Fashion</li>
                    <li className="cursor-pointer hover:scale-110">Travel</li>
                </ul>
            </div>
            <div className="flex justify-center items-center gap-6">
                <img src="hamburger.svg" alt="" className="h-5 cursor-pointer" />
                <img src="profile.png" alt="" className="h-14 cursor-pointer" />
            </div>
        </div>
    )
}
