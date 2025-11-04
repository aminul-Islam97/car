"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) return setError(data.message || "Sign in failed");

      localStorage.setItem("token", data.token);
      router.push("/dashboard");
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-20 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="input" />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="input" />
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Sign In</button>
      </form>

      <p className="mt-4 text-center">
        Don’t have an account? <Link href="/signup" className="text-blue-600">Sign Up</Link>
      </p>
    </div>
  );
}
