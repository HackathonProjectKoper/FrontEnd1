import React from 'react'
import {useLocation} from "react-router-dom";
import LogoMain from "@/assets/logo.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom"
const Header = () => {


const pathname = useLocation().pathname;

    return (
    <>
        <div className="top-0 h-[80px] w-full flex items-center z-50 bg-gradient-to-l from-blue-400 to-blue-900 justify-between px-4">
            <div className="flex items-center justify-start">
            <LogoMain className="h-12 w-70 "/>
            </div>
            <div className="flex justify-center items-center space-x-4">
            <Button variant="default" size="lg" className="bg-transparent font-light text-white hover:cursor-pointer hover:bg-white/20 transition-colors"> Home</Button>
            <Button variant="default" size="lg" className="bg-transparent font-light text-white hover:cursor-pointer hover:bg-white/20 transition-colors"> Business</Button>
            <Button variant="default" size="lg" className="bg-transparent font-light text-white hover:cursor-pointer hover:bg-white/20 transition-colors"> Solution</Button>
            <Button variant="default" size="lg" className="bg-transparent font-light text-white hover:cursor-pointer hover:bg-white/20 transition-colors"> Fees</Button>
            <Button variant="default" size="lg" className="bg-transparent font-light text-white hover:cursor-pointer hover:bg-white/20 transition-colors"> FAQ</Button>
            </div>
            <div className="flex justify-end items-center">
            <Link to="/Login">
                <Button variant="default" size="lg" className=" bg-white font-light text-blue-800  hover:cursor-pointer hover:bg-gray-200 shadow-2xs"> Get Started </Button>
            </Link>
            </div>

        </div>

     </>
    )
}
export default Header
