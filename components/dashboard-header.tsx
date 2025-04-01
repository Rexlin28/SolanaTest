"use client"

import Link from "next/link"
import { useWallet } from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, ChevronDown, Menu, Settings, User } from "lucide-react"

export default function DashboardHeader() {
  const { user, logout } = useAuth()
  const { connected } = useWallet()

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-purple-600"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span className="ml-2 text-xl font-bold">SolDash</span>
            </Link>

            <nav className="hidden md:ml-8 md:flex md:space-x-4">
              <Link
                href="/dashboard"
                className="px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100"
              >
                Dashboard
              </Link>
              <Link
                href="/dashboard/transactions"
                className="px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:bg-gray-100 hover:text-gray-900"
              >
                Transactions
              </Link>
              <Link
                href="/dashboard/explore"
                className="px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:bg-gray-100 hover:text-gray-900"
              >
                Explore
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            {!connected && <WalletMultiButton className="wallet-adapter-button" />}

            <Button variant="ghost" size="icon" className="text-gray-500">
              <Bell className="h-5 w-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <User className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="hidden md:inline-block">{user?.name || user?.email}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

