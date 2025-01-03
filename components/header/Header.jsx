"use client"

import { useState } from "react"
import Image from "next/image"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import Logo from "../../public/logo.png"
import { IoCartOutline } from "react-icons/io5"
import { IoMdHeartEmpty } from "react-icons/io"
import { IoIosSearch } from "react-icons/io"


const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className="text-center h-[90px] py-4  flex items-center justify-between  z-10">
      <div id="menu" className={`flex gap-4 px-5 relative `}>
        <HiOutlineDotsHorizontal
          size={20}
          color="black"
          className="opacity-50 hover:opacity-100 cursor-pointer"
        />
        <IoIosSearch
          size={24}
          color="black"
          className="opacity-50 hover:opacity-100 cursor-pointer"
        />
        {/* sidebar */}
      </div>
      <div className="relative">
        <Image
          src={Logo}
          alt="logo"
          width={0}
          height={0}
          sizes="100%"
          className="min-w-[80px] max-w-[142px]"
        />
      </div>
      <div className="px-5 flex gap-4">
        <IoMdHeartEmpty
          size={24}
          className="opacity-50 hover:opacity-100 cursor-pointer"
        />
        <IoCartOutline
          size={24}
          className="opacity-50 hover:opacity-100 cursor-pointer"
        />
      </div>
    </header>
  )
}

export default Header
