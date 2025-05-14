import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginForm } from './components/login-form';
import { RegistrationForm } from './components/registration-form';
import VerifyEmail from './components/verify-email/page';
import ChangeEmail from "@/components/change-email/page.jsx";
import MainPage  from "@/components/main-page/MainPage.jsx";
import Header from "@/components/main-page/Header.jsx";
import LogoMain from "@/assets/logo.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
    return (
        <GoogleOAuthProvider clientId="88173405945-q343j1kadm1t2lefgcisco3sionsvch4.apps.googleusercontent.com">

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/verify-email" element={<VerifyEmail />} />
                <Route path="/change-email" element={<ChangeEmail />} />

            </Routes>
        </BrowserRouter>
        </GoogleOAuthProvider>
    );
}

export default App;