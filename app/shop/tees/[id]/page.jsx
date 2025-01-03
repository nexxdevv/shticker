import Image from "next/image"

export async function generateStaticParams() {
  const response = await fetch("/api/tees")
  const data = await response.json()

  return data.map((item) => ({ id: item.id.toString() }))
}

export default async function TeesPage({ params }) {
  const { id } = params

  const response = await fetch("/api/tees")
  const data = await response.json()

  const item = data.find((item) => item.id === id)

  if (!item) {
    return <div>Item not found</div>
  }

  return (
    <div>
      <Image
        src={`${item.image}`}
        width={0}
        height={0}
        sizes="100%"
        alt="Trendy Hipster Streetwear T-Shirt"
        className="w-full object-cover rounded-t-md mb-4"
      />
      <h2>{item.name}</h2>

    </div>
  )
}
