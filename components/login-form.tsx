"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useWallet } from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/hooks/use-auth"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { connected, publicKey } = useWallet()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await login(email, password)
    } catch (error) {
      console.error("Login failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Sign in to your account or connect your Solana wallet</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>
        </form>

        <div className="mt-4 text-center">
          <Link href="/signup" className="text-sm text-primary hover:underline">
            Don't have an account? Sign up
          </Link>
        </div>

        <div className="flex items-center my-6">
          <Separator className="flex-1" />
          <span className="px-3 text-sm text-gray-500">OR</span>
          <Separator className="flex-1" />
        </div>

        <div className="flex justify-center">
          <WalletMultiButton className="wallet-adapter-button" />
        </div>

        {connected && publicKey && (
          <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-md text-sm">
            Connected: {publicKey.toString().slice(0, 6)}...{publicKey.toString().slice(-4)}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

