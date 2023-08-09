import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="mx-auto mt-8 max-w-[1280px]">
      <div className="flex gap-4">
        <Link
          href={"/"}
          className="text-primary hover:underline hover:underline-offset-1"
        >
          <span> &#8592;</span> Home
        </Link>{" "}
        /{" "}
        <a>
          <Skeleton className="h-4 w-[100px]" />
        </a>
      </div>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-[32px] w-[500px]" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="h-4 w-[100px]" />
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-8">
          <div className="rounded-md">
            <Skeleton className="h-[800px] w-[500px]" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-8">
              <span className="font-bold">Synopsis: </span>
              <Skeleton className="h-[100px] w-[500px]" />
            </div>
            <div className="flex gap-8">
              <span className="font-bold">Episodes: </span>
              <Skeleton className="h-4 w-[100px]" />
            </div>
            <div className="flex gap-8">
              <span className="font-bold">Score: </span>
              <Skeleton className="h-4 w-[100px]" />
            </div>
            <div className="flex gap-8">
              <span className="font-bold">Rank: </span>
              <Skeleton className="h-4 w-[100px]" />
            </div>
            <div className="flex gap-8">
              <span className="font-bold">Popularity: </span>
              <Skeleton className="h-4 w-[100px]" />
            </div>
            <div className="flex gap-8">
              <span className="font-bold">Members: </span>
              <Skeleton className="h-4 w-[100px]" />
            </div>
            <div className="flex gap-8">
              <span className="font-bold">Favorites: </span>
              <Skeleton className="h-4 w-[100px]" />
            </div>
            <div className="flex gap-8">
              <span className="font-bold">Aired: </span>
              <Skeleton className="h-4 w-[100px]" />
            </div>
            <div className="flex gap-8">
              <span className="font-bold">Duration: </span>
              <Skeleton className="h-4 w-[100px]" />
            </div>
            <div className="flex gap-8">
              <span className="font-bold">Rating: </span>
              <Skeleton className="h-4 w-[100px]" />
            </div>
            <div className="flex gap-8">
              <span className="font-bold">Type: </span>
              <Skeleton className="h-4 w-[100px]" />
            </div>
            <div className="flex gap-8">
              <span className="font-bold">Status: </span>
              <Skeleton className="h-4 w-[100px]" />
            </div>
            <div className="flex gap-8">
              <span className="font-bold">Studios: </span>
              <Skeleton className="h-4 w-[100px]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
