import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { PenLine } from "lucide-react"

export default function VerifyEmail() {
  const [email, setEmail] = useState("zi**************92@gmail.com")
  const [code, setCode] = useState(["", "", "", "", "", ""])
  const inputRefs = useRef([])

  // Handle input change
  const handleChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)

      // Move to next input if current input is filled
      if (value !== "" && index < 5) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  // Handle backspace key
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && code[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  // Handle paste
  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").trim()

    if (/^\d+$/.test(pastedData) && pastedData.length <= 6) {
      const newCode = [...code]
      for (let i = 0; i < Math.min(pastedData.length, 6); i++) {
        newCode[i] = pastedData[i]
      }
      setCode(newCode)

      // Focus the appropriate input after paste
      if (pastedData.length < 6) {
        inputRefs.current[pastedData.length]?.focus()
      } else {
        inputRefs.current[5]?.focus()
      }
    }
  }

  const handleResend = () => {
    // Reset the code
    setCode(["", "", "", "", "", ""])
    // Focus the first input
    inputRefs.current[0]?.focus()
    // Here you would typically call an API to resend the code
    alert("Verification code resent!")
  }

  const handleVerify = () => {
    const verificationCode = code.join("")
    if (verificationCode.length === 6) {
      // Here you would typically call an API to verify the code
      alert(`Verifying code: ${verificationCode}`)
    } else {
      alert("Please enter all 6 digits")
    }
  }

  // Focus the first input on component mount
  useEffect(() => {
    inputRefs.current[0]?.focus()
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">
        <div className="space-y-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-gray-700">Verify Your Email Address</h1>
            <span
              className="ml-2 text-blue-500 text-sm border border-blue-200 px-1 rounded">✓</span>
          </div>

          <p className="text-gray-600">
            We sent a verification code to your email address. Enter the code from the email you received in the field
            below.
          </p>

          <p className="text-gray-800 font-medium">{email}</p>

          <div className="space-y-4">
            <p className="text-gray-600">Type your 6 digit security code</p>

            <div className="flex gap-2">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-full h-14 text-center text-xl border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
              ))}
            </div>

            <button
              onClick={handleVerify}
              className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded transition-colors">
              Verify my email
            </button>

            <div className="text-center space-y-3 pt-2">
              <p className="text-gray-600">
                Didn't get the code?
                <button onClick={handleResend} className="ml-1 text-blue-700 hover:underline">
                  Resend
                </button>
              </p>

              <div className="flex items-center justify-center">
                <Link
                  href="/change-email"
                  className="text-blue-700 hover:underline flex items-center">
                  Change Email Address
                  <PenLine className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm pt-4">© 2025 PaySolo Ltd All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}
