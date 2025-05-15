import React from 'react'
import Header from "./Header.jsx"
import {Card, CardHeader , CardTitle , CardAction, CardDescription ,CardContent, CardFooter} from "@/components/ui/card.jsx";
import CardMain from "./thefourcardcomponents/cardMain.jsx"
const MainPage = () => {
    return (
         <div className="min-h-screen flex flex-col">

      {/* Header */}
      <div className="w-full">
        <Header />
      </div>

      {/* Body split into 3 vertical parts */}
      <div className="flex flex-1 flex-row">

        {/* Left Section */}
        <div className="w-1/3 bg-gray-50 p-4">
          <h2 className="text-xl font-semibold text-gray-700">Left Panel</h2>
          <p className="text-sm text-gray-500 mt-2">Put some navigation or info here.</p>
        </div>

        {/* Middle Section */}
        <div className="w-1/3 bg-white p-4">
          <h2 className="text-xl font-semibold text-gray-700">Middle Panel</h2>
          <p className="text-sm text-gray-500 mt-2">Use this area for charts, stats, or content.</p>
        </div>

        {/* Right Section – Cards */}
        <div className="w-1/3 bg-gray-100 p-4 overflow-y-auto">
          <div className="grid grid-cols-2 gap-2">
            <CardMain
              className="w-full"     
              title="Payment Links"
              text="Generate instant payment links for seamless global transactions"
            />
            <CardMain
              className="w-full"     
              title="Cross-Border payments"
              text="Send and receive international payments with minimal fees and instant settlement"
            />
            <CardMain              
             className="w-full"     
              title="Offramp"
              text="Send fiat and receive crypto in minutes with our seamless conversion process"
            />
            <CardMain
              className="w-full"     
              title="Crypto to Fiat"
              text="Convert your crypto to local currency instantly with competitive rates"
            />
          </div>
        </div>

      </div>
    </div>
    )
}
export default MainPage
