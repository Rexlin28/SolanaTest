"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h2 className="text-2xl font-semibold text-gray-900">Something went wrong!</h2>
      <p className="mt-2 text-gray-500">An unexpected error has occurred. Please try again later.</p>
      <Button onClick={reset} className="mt-6">
        Try again
      </Button>
    </div>
  )
}

