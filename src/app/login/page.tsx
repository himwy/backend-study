"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { Axios } from "axios";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onSignup = async () => {};
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-white text-2xl">Login</h1>
      <hr />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />
      <label htmlFor="password=">Username:</label>
      <input
        id="password="
        type="text"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
      />
      <button onClick={onSignup}>Login</button>
      <Link href="/signup"> Don't have an account? </Link>
    </div>
  );
}
