"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import DashboardHeader from "@/components/dashboard-header"
import UserWelcome from "@/components/user-welcome"
import WalletOverview from "@/components/wallet-overview"
import ActivityFeed from "@/components/activity-feed"
import QuickActions from "@/components/quick-actions"

// Mock authentication state - in a real app, you would use a proper auth system
import { useAuth } from "@/hooks/use-auth"

export default function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // If not loading and not authenticated, redirect to login
    if (!isLoading && !isAuthenticated) {
      router.push("/")
    }
  }, [isLoading, isAuthenticated, router])

  // Show nothing while checking authentication or redirecting
  if (isLoading || !isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <UserWelcome user={user} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="md:col-span-2">
            <WalletOverview />
            <ActivityFeed className="mt-6" />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>
      </main>
    </div>
  )
}

