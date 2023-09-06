"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const About = () => {
  const router = useRouter();
  return (
    <>
      <div>About</div>
      <Link href="about/aboutstudent">About Student</Link>

      <button onClick={() => router.push("/")}>Back to Home</button>
      <h1>Admin Portal</h1>

      <h2 style={{color:"teal"}}>Heading Admin</h2>
      <Link href="about/aboutteacher">About Teacher</Link>
    </>
  );
};

export default About;
