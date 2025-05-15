import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import VerifyEmail from '../components/verify-email/page';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import {Link} from "react-router-dom";
import {AuthButtons} from "@/components/ui/auth-buttons.jsx";
import { Checkbox } from "@/components/ui/checkbox"



const formSchema = z
  .object({
    firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
    username: z.string().min(3, { message: "Username must be at least 3 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    dateOfBirth: z.date({ required_error: "Please select a date of birth." }),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export function RegistrationForm() {
  const [date, setDate] = useState()
  const [isRegistered, setIsRegistered] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const onSubmit = async (values) => {
    // Simulate API call
    console.log(values)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setUserEmail(values.email);   // Save the registered email
    setIsRegistered(true);        // Show the VerifyEmail component
    alert("Registration successful! Please verify your email.");
  }

  // Watch the date value to update the form
  const selectedDate = watch("dateOfBirth")

  return (
      <>
        {!isRegistered ?  (
          <div className="flex items-center justify-center min-h-screen bg-background">

            <Card className="w-full max-w-md shadow-lg z-10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-900 text-center">Create an account</CardTitle>
              <AuthButtons  centered={true }/>


                <CardDescription className="text-center mt-2 mb-2">Enter your information to register</CardDescription>
              </CardHeader>
              <CardContent>


                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" placeholder="John" {...register("firstName")} />
                      {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" placeholder="Doe" {...register("lastName")} />
                      {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" placeholder="johndoe" {...register("username")} />
                    {errors.username && <p className="text-sm text-red-500">{errors.username.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        {...register("email")} />
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">

                    {errors.dateOfBirth && <p className="text-sm text-red-500">{errors.dateOfBirth.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" {...register("password")} />
                    {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm password</Label>
                    <Input id="confirmPassword" type="password" {...register("confirmPassword")} />
                    {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>}
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Registering..." : "Register"}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col items-center border-t p-4 space-y-4">
                <p className="text-sm text-muted-foreground text-center">
                  Already have an account?{" "}

                    <Link to="/Login" className="text-blue-500 hover:underline"> Sign in</Link>

                </p>

                <div className="flex items-center space-x-2 ">
                  <Checkbox id="terms" />
                  <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                </div>



              </CardFooter>

            </Card>
            <svg className="absolute bottom-0 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#003c84" fillOpacity="1"
                    d="M0,224L60,218.7C120,213,240,203,360,176C480,149,600,107,720,101.3C840,96,960,128,1080,122.7C1200,117,1320,75,1380,53.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>

          </div>
        ) : (
            <VerifyEmail email={userEmail} />
        )}



      </>

  )
      ;
}