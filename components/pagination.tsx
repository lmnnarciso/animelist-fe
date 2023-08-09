"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { Button } from "./ui/button"

export default function Pagination() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const current = new URLSearchParams(Array.from(searchParams.entries()))
  const page = Number(current.get("page")) as number
  const q = current.get("q")
  const isPageQueryEmpty = page === 0
  const onIncrementPage = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries()))
    const selected = Number(current.get("page"))
    if (selected) {
      current.set("page", String(selected + 1))
    } else {
      current.set("page", String(2))
    }
    const search = current.toString()
    const query = search ? `?${search}` : ""

    router.push(`${pathname}${query}`)
  }

  const onDecrementPage = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries()))
    const selected = Number(current.get("page"))
    if (selected) {
      current.set("page", String(selected - 1))
    } else {
      current.set("page", String(1))
    }
    const search = current.toString()
    const query = search ? `?${search}` : ""

    router.push(`${pathname}${query}`)
  }

  console.log({ q })
  if (q !== null && q !== undefined && q.length > 0) {
    return null
  }
  return (
    <div className="mb-8 w-full">
      <nav className=" mx-8 flex items-center  justify-end gap-8 rounded-md shadow-sm">
        <p className="mr-auto">Page {isPageQueryEmpty ? page + 1 : page}</p>
        {isPageQueryEmpty ||
          (page !== 1 && <Button onClick={onDecrementPage}>Previous</Button>)}

        <Button onClick={onIncrementPage}>Next</Button>
      </nav>
    </div>
  )
}
