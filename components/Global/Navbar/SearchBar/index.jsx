import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi"

export default function Index() {
  const [searchText, updateSearchText] = useState("")
  return (
    <div className="flex items-center px-4 w-2/5 h-12 bg-white rounded-lg">
      <input type="text" value={searchText} onChange={(e) => updateSearchText(e.target.value)} className="w-full text-2xl p-2 outline-none" />
      <FiSearch className="text-3xl cursor-pointer" />
    </div>
  )
}
