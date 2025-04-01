"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

// Mock user data - in a real app, this would come from your authentication system
type User = {
  id: string
  name?: string
  email: string
}

type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  signup: (name: string, email: string, password: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Check if user is logged in on mount
  useEffect(() => {
    const checkAuth = async () => {
      // In a real app, you would check with your auth service
      // For this demo, we'll just check localStorage
      const storedUser = localStorage.getItem("user")
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    // In a real app, you would validate credentials with your auth service
    // For this demo, we'll just simulate a successful login
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Check if we have a user with this email in localStorage
    const storedUser = localStorage.getItem("user")
    let newUser: User

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      if (parsedUser.email === email) {
        newUser = parsedUser
      } else {
        newUser = {
          id: "1",
          email,
          name: email.split("@")[0],
        }
      }
    } else {
      newUser = {
        id: "1",
        email,
        name: email.split("@")[0],
      }
    }

    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
    setIsLoading(false)
    router.push("/dashboard")
  }

  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
    }

    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
    setIsLoading(false)
    router.push("/dashboard")
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    router.push("/")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

