import { useState } from "react";
import "./App.scss";
import Header from "./layout/header";
import LogInPage from "./pages/login-page";
import UsersPage from "./pages/users";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/sign-up-page";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/sign-up-page" element={<SignUpPage />} />
        <Route path="/users-page" element={<UsersPage />} />
      </Routes>
    </div>
  );
}

export default App;
