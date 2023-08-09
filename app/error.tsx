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
    <div>
      Error
      <Button onClick={() => reset()}>Go back</Button>
    </div>
  )
}
