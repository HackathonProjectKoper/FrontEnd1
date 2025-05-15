import React from 'react'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.jsx";

const CardMain = ({title,text}) => {
    return (

    <Card className="w-1/6 bg-white  shadow-lg ">
        <CardHeader>
            <CardTitle className="text-blue-900 text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-gray-600 ">{text}</p>
        </CardContent>
    </Card>

    )
}
export default CardMain
