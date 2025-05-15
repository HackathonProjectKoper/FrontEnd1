import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from 'react-router-dom';
import {AuthButtons} from "@/components/ui/auth-buttons.jsx";
import React from "react";



export function LoginForm({
  className,
  ...props
}) {



  return (
      <div className="flex items-center justify-center min-h-screen bg-background ">

        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card className="w-full max-w-md shadow-lg z-50 ">
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-blue-900">Welcome back</CardTitle>
              <CardDescription>
                Login with your Google account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid gap-6">


                <div>
                  <AuthButtons centered={true}/>

                </div>




                  <div
                      className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                      <span className="bg-card text-muted-foreground relative z-10 px-2">
                        Or continue with
                      </span>
                  </div>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email or username " required/>
                    </div>
                    <div className="grid gap-3">
                      <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                          Forgot your password?
                        </a>
                      </div>
                      <Input id="password" type="password" placeholder="********" required/>
                    </div>
                    <Button type="submit" className="w-full bg-blue-800 hover:cursor-pointer hover:bg-blue-900">
                      Login
                    </Button>
                  </div>
                  <div className="text-center text-sm">
                    New on our platform? {" "}
                    <Link to="/Register" className="text-blue-500 hover:cursor-pointer underline underline-offset-4">
                      Sign up
                    </Link>


                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
          <div
              className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4 z-50 ">
            By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
            and <a href="#">Privacy Policy</a>.
          </div>

        </div>
        <svg className="absolute bottom-0 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#003c84" fillOpacity="1"
                d="M0,224L60,218.7C120,213,240,203,360,176C480,149,600,107,720,101.3C840,96,960,128,1080,122.7C1200,117,1320,75,1380,53.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
  );
}