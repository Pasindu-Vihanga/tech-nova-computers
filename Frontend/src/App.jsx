import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginpage";
import RegisterPage from "./pages/registerPage";
import AdminPage from "./pages/adminPage";
import TestPage from "./pages/test";
import { Toaster } from "react-hot-toast";





function App() {
  return (

    <BrowserRouter>
    <Toaster position="top-center"/>

    <div className="w-full h-screen overflow-x-hidden bg-primary text-secondary">

      <Routes path="/">
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="/test" element={<TestPage />} />
        
      </Routes>
    </div>
    
    </BrowserRouter>

  );
}

export default App;

