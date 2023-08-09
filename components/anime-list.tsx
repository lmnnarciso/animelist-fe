import Image from "next/image"
import Link from "next/link"

import { Anime } from "@/types/anime"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "./ui/button"

async function getData({
  search,
}: {
  search: string
}): Promise<{ data: Anime[] }> {
  const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search ?? ""}`, {
    cache: "force-cache",
  })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function AnimeList({
  searchParams,
}: {
  searchParams: { q: string }
}) {
  const data = await getData({ search: searchParams.q })
  return (
    <>
      {data.data.map((item) => (
        <Card key={item.mal_id} className="">
          <CardHeader className="">
            <CardTitle className="line-clamp-3 flex min-h-[72px] items-center justify-center text-ellipsis text-center">
              {item.title} ({item.year ?? "N/A"})
            </CardTitle>
            <CardDescription className="line-clamp-3 min-h-[60px] text-ellipsis">
              {item.synopsis ?? "No synopsis"}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <Image
              alt={`${item.title} image`}
              src={item.images.webp.large_image_url}
              height={300}
              width={150}
              className="mx-auto box-border max-h-[300px] min-h-[300px] min-w-[200px] max-w-[200px]"
            />
          </CardContent>
          <CardFooter>
            <Link href={`/${item.mal_id}`} className="w-full">
              <Button className="w-full">View</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}
