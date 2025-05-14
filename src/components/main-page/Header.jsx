import React from 'react'
import {useLocation} from "react-router-dom";
import LogoMain from "@/assets/logo.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom"
const Header = () => {


const pathname = useLocation().pathname;

    return (
    <>
        <div className="top-0  h-[80px] flex  overflow-hidden z-50 w-full bg-blue-400 bg-gradient-to-l from-blue-400 to-blue-900 h-18 ">
            <LogoMain className="h-30 w-70 left-10 top-10 pb-4 ml-[-40px]   "/>
            <Button variant="default" size="lg" className="bg-transparent font-light text-white hover:cursor-pointer"> Home</Button>
            <Button variant="default" size="lg" className="bg-transparent font-light text-white hover:cursor-pointer hover:"> Business</Button>
            <Button variant="default" size="lg" className="bg-transparent font-light text-white hover:cursor-pointer hover:"> Solution</Button>
            <Button variant="default" size="lg" className="bg-transparent font-light text-white hover:cursor-pointer hover:"> Fees</Button>
            <Button variant="default" size="lg" className="bg-transparent font-light text-white hover:cursor-pointer hover:"> FAQ</Button>

            <Link to="/Login">
                <Button variant="default" size="lg" className=" bg-white font-light text-blue-800  hover:cursor-pointer hover:bg-gray-200 shadow-2xs"> Get Started </Button>
            </Link>

        </div>

     </>
    )
}
export default Header
