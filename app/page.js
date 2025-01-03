"use client"

import { useState, useEffect } from "react"
import { Abril_Fatface } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { FaHeart } from "react-icons/fa6"

import Header from "@/components/header/Header"

const abril = Abril_Fatface({
  weight: ["400"],
  subsets: ["latin"]
})

export default function Home() {
  const [items, setItems] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/tees")
      const data = await response.json()
      setItems(data)
    }

    fetchData()
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className="p-4 md:p-12">
          <h2
            className={`mb-12 text-3xl lg:text-5xl font-extrabold ${abril.className}`}
          >
            Merch from the Church
          </h2>
          <div className="w-full">
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 md:gap-x-10 w-full">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex flex-col items-center">
                    <Link className="w-full" href={`/shop/tees/${item.id}`}>
                      <Image
                        src={`${item.image}`}
                        width={0}
                        height={0}
                        sizes="100%"
                        alt="Trendy Hipster Streetwear T-Shirt"
                        className="w-full object-cover rounded-t-md mb-4"
                      />
                    </Link>

                    <h3 className="text-lg font-semibold text-gray-800 w-full px-4">
                      {item.name}
                    </h3>

                    <span className="text-xl font-bold text-gray-900 mt-4 flex items-start px-4 w-full">
                      $29.99
                    </span>
                    <div className="flex mt-6 justify-between w-full px-4 mb-4">
                      <button className="px-3 py-2 rounded-lg bg-gray-100 text-gray-700 shadow-md hover:bg-gray-200 focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2">
                        <FaHeart color="red" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
