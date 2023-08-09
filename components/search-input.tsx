"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { Input } from "./ui/input"

export function SearchInput() {
  // can be improve with debouncing the value
  const [search, setSearch] = useState("")
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleSearchOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
    // setSearch(e.target.value)
    // now you got a read/write object
    const current = new URLSearchParams(Array.from(searchParams.entries())) // -> has to use this form

    // update as necessary
    const value = event.target.value.trim()

    if (!value) {
      current.delete("q")
    } else {
      current.set("q", event.target.value)
    }

    // cast to string
    const search = current.toString()
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : ""

    router.push(`${pathname}${query}`)
  }

  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()))
    const selected = current.get("q")
    if (selected) {
      setSearch(selected)
    }
  }, [searchParams])

  return (
    <div className="px-8">
      <Input
        className="mx-auto mt-8"
        type="text"
        placeholder="Search anime by name"
        value={search}
        onChange={handleSearchOnChange}
      />
    </div>
  )
}
