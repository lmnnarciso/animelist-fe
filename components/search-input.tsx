"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { Input } from "./ui/input"

// import { useRouter } from "next/router"

export function SearchInput() {
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
  const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
    <Input
      className="mx-8 mt-8"
      type="text"
      placeholder="Search anime by name"
      value={search}
      onChange={handleSearchOnChange}
    />
  )
}
