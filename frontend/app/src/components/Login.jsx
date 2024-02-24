// src/components/Login.js
import React from "react";
import { FaGithub } from "react-icons/fa"; // GitHubアイコンをインポート

function Login() {
  const handleLogin = () => {
    // Rails APIの認証エンドポイントにリダイレクト
    window.location.href = "http://localhost:3041/auth/github";
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <button
        onClick={handleLogin}
        className="flex items-center justify-center px-4 py-2 space-x-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        <FaGithub className="text-xl" />
        <span>Login with GitHub</span>
      </button>
    </div>
  );
}

export default Login;
