"use client";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  const navigate=(name)=>{
    router.push(name)
  }
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Home</h1>
      </main>
      {/* this is called linking in next js */}
      <Link href="/login">Go to Login Page</Link>
      <br />
      <Link href="/about">Go to About Page</Link> <br />
      {/* this is called Nvigating in next js */}
      <button onClick={() => navigate("/login")}>Login </button>
      <button onClick={() => router.push("/about")}>About </button>
      <br />
    </>
  );
}
