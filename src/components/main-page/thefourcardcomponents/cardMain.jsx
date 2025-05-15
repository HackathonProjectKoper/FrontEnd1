import React from 'react'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.jsx";

const CardMain = ({title,text}) => {
    return (

    <Card className="bg-white  shadow-md hover:shadow-lg transition-shadow rounded-xl">
        <CardHeader>
            <CardTitle className="text-blue-900 text-base">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-gray-600 text-sm">{text}</p>
        </CardContent>
    </Card>

    )
}
export default CardMain
