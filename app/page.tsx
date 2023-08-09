import React, { Suspense } from "react"

import AnimeList from "@/components/anime-list"
import Loading from "@/components/loading"
import { SearchInput } from "@/components/search-input"

export default async function AnimePage({
  searchParams,
}: {
  searchParams: { q: string }
}) {
  //   const [search, setSearch] = React.useState("")
  //   const data = DATA
  return (
    <div className="mx-auto">
      <div>
        <SearchInput />
      </div>
      <div className="grid grid-cols-1 gap-4 p-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
        <Suspense fallback={<Loading />}>
          <AnimeList searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  )
}
