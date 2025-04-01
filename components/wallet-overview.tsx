"use client"

import { useState, useEffect } from "react"
import { useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { ArrowUpRight, Coins, RefreshCw } from "lucide-react"

export default function WalletOverview() {
  const { connected, publicKey, connection } = useWallet()
  const [balance, setBalance] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchBalance = async () => {
    if (connected && publicKey && connection) {
      try {
        setIsLoading(true)
        const balance = await connection.getBalance(publicKey)
        setBalance(balance / LAMPORTS_PER_SOL)
      } catch (error) {
        console.error("Error fetching balance:", error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  useEffect(() => {
    fetchBalance()
  }, [connected, publicKey, connection])

  if (!connected) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Wallet Overview</CardTitle>
          <CardDescription>Connect your Solana wallet to view your balance</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <WalletMultiButton className="wallet-adapter-button" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Wallet Overview</CardTitle>
          <CardDescription>Your Solana wallet balance and activity</CardDescription>
        </div>
        <Button variant="ghost" size="icon" onClick={fetchBalance} disabled={isLoading}>
          <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">SOL Balance</p>
            <div className="flex items-center">
              <Coins className="mr-2 h-5 w-5 text-purple-500" />
              <span className="text-2xl font-bold">{balance !== null ? balance.toFixed(4) : "—"} SOL</span>
            </div>
          </div>

          <div className="flex flex-col justify-end space-y-2">
            <div className="flex space-x-2">
              <Button className="flex-1">Send</Button>
              <Button className="flex-1" variant="outline">
                Receive
              </Button>
            </div>
            <Button variant="link" className="justify-start px-0">
              <span>View on Solana Explorer</span>
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

