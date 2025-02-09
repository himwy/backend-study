"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios, { Axios } from "axios";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false); // NOT YET IMPLEMENTED

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.username.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [user]);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup successful", response.data);
      router.push("/login");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-white text-2xl">
        {loading ? "Loading" : "Signup"}
      </h1>
      <hr />
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Username"
        className="text-black"
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
        className="text-black"
      />
      <label htmlFor="password=">Username:</label>
      <input
        id="password="
        type="text"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
        className="text-black"
      />
      <button onClick={onSignup}>
        {buttonDisabled ? "Sign Up" : "Fill in the required fields"}
      </button>
      <Link href="/login"> Already have an account? </Link>
    </div>
  );
}
