"use client"

import { useState } from "react"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import { HiOutlineSearch } from "react-icons/hi"

import { Abril_Fatface } from "next/font/google"

const abril = Abril_Fatface({
  weight: ["400"],
  subsets: ["latin"]
})

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className="text-center h-[90px] py-4  flex items-center justify-between  z-10">
      <div id="menu" className={` p-4 relative `}>
        <HiOutlineDotsHorizontal
          size={18}
          color="black"
          className="opacity-50 hover:opacity-100 cursor-pointer"
        />
        {/* sidebar */}
      </div>
      <div className="relative">
        <h1
          className={`text-3xl lg:text-5xl font-extrabold ${abril.className}`}
        >
          Shticker
        </h1>
      </div>
      <div className="p-4">
        <HiOutlineSearch
          size={24}
          color="black"
          className="opacity-50 hover:opacity-100 cursor-pointer"
        />
      </div>
    </header>
  )
}

export default Header
