import React, { Suspense } from "react"

import AnimeList from "@/components/anime-list"
import Loading from "@/components/loading"
import Pagination from "@/components/pagination"
import { SearchInput } from "@/components/search-input"

import Error from "./error"

export default async function AnimePage({
  searchParams,
}: {
  searchParams: { q: string; page: string }
}) {
  return (
    <div className="mx-auto">
      <SearchInput />
      <div className="relative grid grid-cols-1 gap-4 p-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        <Suspense fallback={<Loading />}>
          {/* @ts-expect-error Server Component */}
          <AnimeList searchParams={searchParams} />
        </Suspense>
      </div>
      <Pagination />
    </div>
  )
}
