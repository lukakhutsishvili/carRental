import React, { useState, createContext, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

const SearchPage = lazy(() => import("./components/SearchPage"));
const CarDetailsPage = lazy(() => import("./components/CarDetailsPage"));
// const UserProfile = lazy(() => import("./components/UserProfile"));
// const LoginPage = lazy(() => import("./components/LoginPage"));
// const SignupPage = lazy(() => import("./components/SignupPage"));
// const AdminPanel = lazy(() => import("./components/AdminPanel"));

export const AuthContext = createContext();

function App() {
  const [user, setUser] = useState(true);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Header />
      <main className="min-h-screen p-4 bg">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="w-full">
            <img src="public/თბილისი.jpg" />
          </div>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/car/:id" element={<CarDetailsPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
