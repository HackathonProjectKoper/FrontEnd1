import React from 'react'
import {useLocation} from "react-router-dom";
import LogoMain from "@/assets/logo.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom"
const Header = () => {


const pathname = useLocation().pathname;

    return (
    <>
            <Link to="/Login">
                <Button variant="default" size="lg" className=" bg-white font-light text-blue-800  hover:cursor-pointer hover:bg-gray-200 shadow-2xs"> Get Started </Button>
            </Link>

        </div>

     </>
    )
}
export default Header
