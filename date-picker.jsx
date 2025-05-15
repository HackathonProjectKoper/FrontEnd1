import { useState, useEffect } from "react"
import { format, isValid, getDaysInMonth } from "date-fns"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DatePicker() {
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [daysInMonth, setDaysInMonth] = useState(31)

  // Generate years from 1900 to current year
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: currentYear - 1899 }, (_, i) => (1900 + i).toString())

  // Months array
  const months = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ]

  // Update days in month when month or year changes
  useEffect(() => {
    if (month && year) {
      const daysCount = getDaysInMonth(new Date(Number.parseInt(year), Number.parseInt(month) - 1))
      setDaysInMonth(daysCount)

      // If selected day is greater than days in month, reset day
      if (day && Number.parseInt(day) > daysCount) {
        setDay("")
      }
    }
  }, [month, year, day])

  // Generate days array based on selected month and year
  const days = Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString())

  // Format the complete date
  const getFormattedDate = () => {
    if (day && month && year) {
      const date = new Date(Number.parseInt(year), Number.parseInt(month) - 1, Number.parseInt(day))
      if (isValid(date)) {
        return format(date, "dd/MM/yyyy");
      }
    }
    return null
  }

  return (
    <div className="w-full max-w-md space-y-4">
      <Label className="text-base">Date of birth</Label>
      <div className="flex gap-2">
        <div className="w-1/3">
          <Select value={day} onValueChange={setDay}>
            <SelectTrigger>
              <SelectValue placeholder="Day" />
            </SelectTrigger>
            <SelectContent>
              {days.map((d) => (
                <SelectItem key={d} value={d}>
                  {d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-1/3">
          <Select value={month} onValueChange={setMonth}>
            <SelectTrigger>
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              {months.map((m) => (
                <SelectItem key={m.value} value={m.value}>
                  {m.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-1/3">
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger>
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((y) => (
                <SelectItem key={y} value={y}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      {getFormattedDate() && <div className="text-sm text-muted-foreground">Selected date: {getFormattedDate()}</div>}
    </div>
  );
}
