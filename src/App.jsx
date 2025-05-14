import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginForm } from './components/login-form';
import { RegistrationForm } from './components/registration-form';
import VerifyEmail from './components/verify-email/page';
import ChangeEmail from "@/components/change-email/page.jsx";
import Header from "@/components/main-page/Header.jsx";
import LogoMain from "@/assets/logo.jsx";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/verify-email" element={<VerifyEmail />} />
                <Route path="/change-email" element={<ChangeEmail />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;