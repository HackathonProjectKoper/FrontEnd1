import React from 'react'
import {useLocation} from "react-router-dom";
import LogoMain from "@/assets/logo.jsx";

const Header = () => {

const pathname = useLocation().pathname;

    return (
    <>
        <div className="top-0 z-50 w-full bg-blue-400 h-18 ">
            <LogoMain className="h-18 w-20 left-10 top-10 "/>


        </div>

     </>
    )
}
export default Header
