import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import axios from "axios"; // axiosをインポート

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null); // ユーザー情報を保持するための状態

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get("token");
    if (token) {
      setToken(token);
      fetchUserData(token); // APIからユーザー情報を取得
    }
  }, []);

  // トークンを使用してユーザー情報を取得する関数
  const fetchUserData = async (token) => {
    try {
      const response = await axios.get(
        "http://localhost:3041/api/v1/users/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUser(response.data); // ユーザー情報を状態にセット
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      {token && user ? (
        <div className="p-4 md:p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome, {user.name}!
          </h1>
          <p className="mt-2 text-gray-600">
            Your Nickname:{" "}
            <code className="p-1 bg-gray-200 rounded">{user.nickname}</code>
          </p>
          <p className="mt-2 text-gray-600">
            Your token: <code className="p-1 bg-gray-200 rounded">{token}</code>
          </p>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
