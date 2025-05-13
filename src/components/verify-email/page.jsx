import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { PenLine } from "lucide-react"

export default function VerifyEmail() {
  // Get email from location state or default to empty string
  const location = useLocation()
  const initialEmail = location.state?.email || ""

  const [email, setEmail] = useState(initialEmail)
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
    setCode(["", "", "", "", "", ""])
    inputRefs.current[0]?.focus()
    alert("Verification code resent!")
  }

  const handleVerify = () => {
    const verificationCode = code.join("")
    if (verificationCode.length === 6) {
      alert(`Verifying code: ${verificationCode}`)
      // Call your API here to verify the code
    } else {
      alert("Please enter all 6 digits")
    }
  }

  useEffect(() => {
    inputRefs.current[0]?.focus()
  }, [])

  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-semibold text-blue-900">Verify Your Email Address</h1>
              <span className="ml-2 text-blue-500 text-sm border border-blue-200 px-1 rounded">✓</span>
            </div>

            <p className="text-gray-600">
              We sent a verification code to your email address. Enter the code from the email you received below.
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
                        className="w-full h-14 text-center text-xl border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                ))}
              </div>

              <button
                  onClick={handleVerify}
                  className="w-full py-3 bg-blue-800 hover:bg-blue-900 cursor-pointer border text-white font-medium rounded-xl transition-colors"
              >
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
                      to="/change-email"
                      state={{ email:"current@email.com" }} // Pass current email to ChangeEmail page
                      className="text-blue-500 hover:underline flex items-center"
                  >
                    Change Email Address
                    <PenLine className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
