import React from "react";
import { useAuth } from "./AuthProvider";

const LoginPage = () => {
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await login({
      email: formData.get("email"),
      password: formData.get("password"),
    });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
