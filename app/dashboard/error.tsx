"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DashboardError({
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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Dashboard Error</h2>
        <p className="mt-2 text-gray-500">There was a problem loading your dashboard data.</p>
        <div className="mt-6 space-x-4">
          <Button onClick={reset} variant="default">
            Try again
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

