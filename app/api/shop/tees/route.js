import fs from "fs"
import path from "path"

export async function GET() {
  const filePath = path.join(process.cwd(), "data", "tees.json")

  const data = JSON.parse(fs.readFileSync(filePath, "utf8"))

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  })
}
