"use client"

import { useEffect } from "react"

import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="grid h-[100vh] w-full place-content-center">
      <h1 className="text-xl">Something went wrong!</h1>
      <pre>{error.message}</pre>
      <Button onClick={() => reset()}>Go back</Button>
    </div>
  )
}
