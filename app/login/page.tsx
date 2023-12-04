import React from "react";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "Login - Easy Car",
  description: "The best car in the world.",
};

const LoginPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200 px-8">
      <div className="hero-content flex-col lg:flex-row-reverse justify-center w-full">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="text-center lg:text-left px-10 py-3 space-y-3">
            <h1 className="text-3xl font-bold">Login now!</h1>
            <p className="">Login now with connect us.</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
