import React from 'react'
import Header from "./Header.jsx"
import {Card, CardHeader , CardTitle , CardAction, CardDescription ,CardContent, CardFooter} from "@/components/ui/card.jsx";
import CardMain from "./thefourcardcomponents/cardMain.jsx"
const MainPage = () => {
    return (
        <div className="min-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200" >
            <div className="headerof">
                <Header></Header>
            </div>

            <div className="">
                <CardMain title="Payment Links" text="Generate instant payment links for seamless global transactions"></CardMain>
                <CardMain title="Cross-Border payments" text="Send and receive international payments with minimal fees and instant settlement"></CardMain>
                <CardMain title="Offramp" text="Send fiat and receive crypto in minutes with our seamless conversion process"></CardMain>
                <CardMain title="Crypto to Fiat" text="Convert your crypto to local currency instantly with competitive rates"></CardMain>
            </div>













        </div>
    )
}
export default MainPage
