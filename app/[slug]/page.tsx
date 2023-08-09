import Image from "next/image"
import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Loading from "./loading"

async function getData({ id }: { id: string }) {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  //   console.log({ res })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData({ id: params.slug })
  return (
    <div className="mx-auto mt-8 max-w-[1280px]">
      <div>
        <Link
          href={"/"}
          className="text-primary hover:underline hover:underline-offset-4"
        >
          <span> &#8592;</span> Home
        </Link>{" "}
        / <a>{data.data.title}</a>
      </div>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>{data.data.title}</CardTitle>
          <CardDescription>
            {data.data.genres.map((genre: any) => genre.name).join(", ")}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-8">
          <div className="rounded-md">
            <Image
              alt={`${data.data.title} image`}
              src={data.data.images.jpg.large_image_url}
              width={500}
              height={800}
              className="min-w-[500px] rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <span className="font-bold">Synopsis: </span>
              <span>{data.data.synopsis}</span>
            </div>
            <div>
              <span className="font-bold">Episodes: </span>
              <span>{data.data.episodes}</span>
            </div>
            <div>
              <span className="font-bold">Score: </span>
              <span>{data.data.score}</span>
            </div>
            <div>
              <span className="font-bold">Rank: </span>
              <span>{data.data.rank}</span>
            </div>
            <div>
              <span className="font-bold">Popularity: </span>
              <span>{data.data.popularity}</span>
            </div>
            <div>
              <span className="font-bold">Members: </span>
              <span>{data.data.members}</span>
            </div>
            <div>
              <span className="font-bold">Favorites: </span>
              <span>{data.data.favorites}</span>
            </div>
            <div>
              <span className="font-bold">Aired: </span>
              <span>{data.data.aired.string}</span>
            </div>
            <div>
              <span className="font-bold">Duration: </span>
              <span>{data.data.duration}</span>
            </div>
            <div>
              <span className="font-bold">Rating: </span>
              <span>{data.data.rating}</span>
            </div>
            <div>
              <span className="font-bold">Type: </span>
              <span>{data.data.type}</span>
            </div>
            <div>
              <span className="font-bold">Status: </span>
              <span>{data.data.status}</span>
            </div>
            {/* <div>
              <span className="font-bold">Trailer: </span>
              <span>{data.data.trailer_url}</span>
            </div> */}
            {/* <div>
              <span className="font-bold">Genres: </span>
              <span>
                {data.data.genres.map((genre: any) => genre.name).join(", ")}
              </span>
            </div> */}
            <div>
              <span className="font-bold">Studios: </span>
              <span>
                {data.data.studios.map((genre: any) => genre.name).join(", ")}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
