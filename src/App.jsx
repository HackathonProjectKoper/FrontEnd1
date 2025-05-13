import React from 'react'
import {LoginForm} from "@/components/login-form.jsx";
import {RegistrationForm} from "@/components/registration-form";
import {BrowserRouter,Routes ,Route} from "react-router-dom";
import VerifyEmail from "../app/verify-email/page.jsx";

const App = () => {
    return (
        <BrowserRouter>

                    <Routes>



                            <Route path="/Register" element={<RegistrationForm />} />
                            <Route path="/Login" element={<LoginForm />} />



                    </Routes>

        </BrowserRouter>
    )
}
export default App
