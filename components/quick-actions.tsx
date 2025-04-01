import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wallet, Zap, CreditCard, Gift, Coins } from "lucide-react"

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common tasks and shortcuts</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button variant="outline" className="justify-between h-auto py-3">
          <div className="flex items-center">
            <div className="mr-3 h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
              <Wallet className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">Fund Wallet</p>
              <p className="text-xs text-muted-foreground">Add SOL to your wallet</p>
            </div>
          </div>
          <ArrowRight className="h-4 w-4" />
        </Button>

        <Button variant="outline" className="justify-between h-auto py-3">
          <div className="flex items-center">
            <div className="mr-3 h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">Swap Tokens</p>
              <p className="text-xs text-muted-foreground">Exchange SOL for other tokens</p>
            </div>
          </div>
          <ArrowRight className="h-4 w-4" />
        </Button>

        <Button variant="outline" className="justify-between h-auto py-3">
          <div className="flex items-center">
            <div className="mr-3 h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
              <CreditCard className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">Buy Crypto</p>
              <p className="text-xs text-muted-foreground">Purchase with credit card</p>
            </div>
          </div>
          <ArrowRight className="h-4 w-4" />
        </Button>

        <Button variant="outline" className="justify-between h-auto py-3">
          <div className="flex items-center">
            <div className="mr-3 h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
              <Gift className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">NFT Marketplace</p>
              <p className="text-xs text-muted-foreground">Browse and collect NFTs</p>
            </div>
          </div>
          <ArrowRight className="h-4 w-4" />
        </Button>

        <Button variant="outline" className="justify-between h-auto py-3">
          <div className="flex items-center">
            <div className="mr-3 h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
              <Coins className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">Staking</p>
              <p className="text-xs text-muted-foreground">Earn rewards on your SOL</p>
            </div>
          </div>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}

