import { Abril_Fatface } from "next/font/google"
import Image from "next/image"

import Header from "@/components/header/Header"

const abril = Abril_Fatface({
  weight: ["400"],
  subsets: ["latin"]
})

const tShirtDesigns = [
  {
    id: "smw01",
    name: "ADHD",
    image: "/designs/adhd.png"
  },
  {
    id: "smw02",
    name: "Bourdain",
    image: "/designs/bourdain.png"
  },
  {
    id: "smw03",
    name: "FedUp",
    image: "/designs/fedup.png"
  },
  {
    id: "smw04",
    name: "Hail Sagan",
    image: "/designs/hail_sagan.png"
  },
  {
    id: "smw05",
    name: "No Balance",
    image: "/designs/no_balance.png"
  },
  {
    id: "smw06",
    name: "No Ragrets",
    image: "/designs/no_ragrets.png"
  },
  {
    id: "smw07",
    name: "1976",
    image: "/designs/1976.png"
  },
  {
    id: "smw08",
    name: "metallica",
    image: "/designs/metallica.png"
  },
  {
    id: "smw09",
    name: "Nakatomi",
    image: "/designs/nakatomi.png"
  },
  {
    id: "smw10",
    name: "Riot",
    image: "/designs/riot.png"
  },
  {
    id: "smw11",
    name: "Stevie Nicks",
    image: "/designs/stevie.png"
  },
  {
    id: "smw12",
    name: "VHS",
    image: "/designs/vhs.png"
  }
]

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="p-4 md:p-12">
          <h2
            className={`mb-12 text-3xl lg:text-5xl font-extrabold ${abril.className}`}
          >
            Pop T-Shirts
          </h2>
          <div className="w-full">
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 md:gap-x-10 w-full">
              {tShirtDesigns.map((_, index) => (
                <li
                  key={index}
                  className="shadow-xl rounded-2xl overflow-hidden w-full"
                >
                  <Image
                    width={0}
                    height={0}
                    sizes="100%"
                    src={_.image}
                    alt={_.name}
                    className="w-full h-full object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
