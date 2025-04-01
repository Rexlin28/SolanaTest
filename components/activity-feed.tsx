import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ActivityFeedProps {
  className?: string
}

// Mock data for the activity feed
const activities = [
  {
    id: 1,
    type: "transfer",
    status: "success",
    amount: "0.5 SOL",
    from: "7xKX...9Yka",
    to: "3jNm...8Rtz",
    date: "2 hours ago",
  },
  {
    id: 2,
    type: "swap",
    status: "success",
    amount: "10 USDC",
    from: "You",
    to: "0.25 SOL",
    date: "5 hours ago",
  },
  {
    id: 3,
    type: "mint",
    status: "pending",
    amount: "1 NFT",
    from: "Magic Eden",
    to: "You",
    date: "1 day ago",
  },
  {
    id: 4,
    type: "transfer",
    status: "success",
    amount: "1.2 SOL",
    from: "You",
    to: "5qLp...2Wfr",
    date: "2 days ago",
  },
]

export default function ActivityFeed({ className }: ActivityFeedProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest transactions and wallet activity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4 rounded-lg border p-3">
              <div
                className={cn(
                  "mt-0.5 h-9 w-9 rounded-full flex items-center justify-center",
                  activity.type === "transfer" ? "bg-blue-100" : "",
                  activity.type === "swap" ? "bg-green-100" : "",
                  activity.type === "mint" ? "bg-purple-100" : "",
                )}
              >
                {activity.type === "transfer" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M12 19V5M5 12l7-7 7 7" />
                  </svg>
                )}
                {activity.type === "swap" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <path d="M17 1l4 4-4 4" />
                    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                    <path d="M7 23l-4-4 4-4" />
                    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                  </svg>
                )}
                {activity.type === "mint" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-600"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                  </svg>
                )}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">
                    {activity.type === "transfer" && "Transfer"}
                    {activity.type === "swap" && "Token Swap"}
                    {activity.type === "mint" && "NFT Mint"}
                  </p>
                  <Badge variant={activity.status === "success" ? "default" : "outline"}>
                    {activity.status === "success" ? "Completed" : "Pending"}
                  </Badge>
                </div>
                <p className="text-sm text-gray-500">
                  {activity.type === "transfer" && `${activity.from} → ${activity.to}`}
                  {activity.type === "swap" && `${activity.from} → ${activity.to}`}
                  {activity.type === "mint" && `${activity.from} → ${activity.to}`}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{activity.amount}</p>
                  <p className="text-xs text-gray-500">{activity.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

