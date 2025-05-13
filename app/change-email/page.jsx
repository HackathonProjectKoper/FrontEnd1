"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ChangeEmail() {
  const [email, setEmail] = useState("")
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      // Here you would typically call an API to update the email
      alert(`Email updated to: ${email}`)
      router.push("/verify-email")
    } else {
      alert("Please enter an email address")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">
        <div className="space-y-6">
          <div className="flex items-center">
            <Link href="/verify-email" className="text-gray-500 hover:text-gray-700 mr-2">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-2xl font-semibold text-gray-700">Change Email Address</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-gray-600">
                New Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                placeholder="Enter your email address"
                required />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded transition-colors">
              Update Email
            </button>
          </form>

          <div className="text-center text-gray-500 text-sm pt-4">© 2025 PaySolo Ltd All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}
