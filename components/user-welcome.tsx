"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useWallet } from "@solana/wallet-adapter-react"

interface UserWelcomeProps {
  user: {
    name?: string
    email?: string
  } | null
}

export default function UserWelcome({ user }: UserWelcomeProps) {
  const { connected, publicKey } = useWallet()
  const currentTime = new Date()
  const hour = currentTime.getHours()

  let greeting = "Good evening"
  if (hour < 12) {
    greeting = "Good morning"
  } else if (hour < 18) {
    greeting = "Good afternoon"
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {greeting}, {user?.name || "there"}!
            </h1>
            <p className="mt-1 text-gray-500">Here's what's happening with your account today.</p>
          </div>

          {connected && publicKey && (
            <div className="mt-4 md:mt-0 p-3 bg-purple-50 rounded-md">
              <p className="text-sm font-medium text-purple-800">Wallet Connected</p>
              <p className="text-xs text-purple-600 font-mono">
                {publicKey.toString().slice(0, 6)}...{publicKey.toString().slice(-4)}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

