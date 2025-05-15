// src/components/ui/auth-buttons.jsx
import React from "react";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/supabaseclient"; // ✅ Import Supabase client

export function AuthButtons({ centered = true }) {
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:5173', // ✅ or your deployed frontend URL
      }
    });

    if (error) {
      console.error('Google login error:', error.message);
    }
  };

  return (
    <div className={`${centered ? 'mx-auto' : ''} flex flex-row gap-2 w-fit`}>
      <Button
        variant="outline"
        size="icon"
        onClick={() => console.log("GitHub login clicked")}
        className="bg-white text-black hover:bg-gray-100 border-gray-300 hover:cursor-pointer"
      >
        <Github className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={handleGoogleLogin}
        className="bg-white text-black hover:bg-gray-100 border-gray-300 hover:cursor-pointer"
      >
        G
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={() => console.log("Apple login clicked")}
        className="bg-white text-black hover:bg-gray-100 border-gray-300 hover:cursor-pointer"
      >
        {/* Apple logo or text */}
        
      </Button>
    </div>
  );
}
