"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignInPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // Simulate a simple login check
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Example mock user
    const mockUser = {
      email: "demo@example.com",
      password: "123456",
    };

    if (email === mockUser.email && password === mockUser.password) {
      localStorage.setItem("token", "mock-token-123");
      router.push("/dashboard");
    } else {
      setError("Invalid credentials. Try demo@example.com / 123456");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-20 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>

      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>

      <p className="mt-4 text-center text-gray-600">
        Don’t have an account?{" "}
        <Link href="/signup" className="text-blue-600 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
