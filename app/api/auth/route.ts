import { NextResponse } from "next/server"

// Mock user database - in a real app, you would use a database
const users = [
  {
    id: "1",
    name: "Demo User",
    email: "demo@example.com",
    password: "password123", // In a real app, this would be hashed
  },
]

export async function POST(request: Request) {
  try {
    const { action, email, password, name } = await request.json()

    if (action === "login") {
      // Find user by email
      const user = users.find((u) => u.email === email)

      // Check if user exists and password matches
      if (user && user.password === password) {
        // In a real app, you would create a session or JWT
        return NextResponse.json({
          success: true,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
          },
        })
      } else {
        return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 })
      }
    }

    if (action === "signup") {
      // Check if user already exists
      if (users.some((u) => u.email === email)) {
        return NextResponse.json({ success: false, message: "User already exists" }, { status: 400 })
      }

      // Create new user
      const newUser = {
        id: (users.length + 1).toString(),
        name,
        email,
        password, // In a real app, this would be hashed
      }

      // Add to mock database
      users.push(newUser)

      return NextResponse.json({
        success: true,
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
        },
      })
    }

    return NextResponse.json({ success: false, message: "Invalid action" }, { status: 400 })
  } catch (error) {
    console.error("Auth API error:", error)
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 })
  }
}

