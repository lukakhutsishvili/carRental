import React, { useState, createContext, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import data from "./data.json";
import "./i18n/i18n";

const SearchPage = lazy(() => import("./components/SearchPage"));
const CarDetailsPage = lazy(() => import("./components/CarDetailsPage"));
// const UserProfile = lazy(() => import("./components/UserProfile"));
// const LoginPage = lazy(() => import("./components/LoginPage"));
// const SignupPage = lazy(() => import("./components/SignupPage"));
// const AdminPanel = lazy(() => import("./components/AdminPanel"));

export const Context = createContext();

function App() {
  const [user, setUser] = useState(true);
  const [cars, setCars] = useState(data);

  console.log(cars);

  return (
    <Context.Provider value={{ user, setUser, cars }}>
      <Header />
      <main className="bg-black min-h-screen p-4 bg">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/car/:id" element={<CarDetailsPage />} />
            {/* <Route path="/profile" element={<UserProfile />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/admin/*" element={<AdminPanel />} /> */}
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Context.Provider>
  );
}

export default App;
