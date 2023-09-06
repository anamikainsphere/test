"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const LoginStudent = () => {
  const router = useRouter();
  return (
    <>
      <div>LoginStudent</div>
      <Link href="/login">Login</Link>

      <button onClick={() => router.push("/")}>Back to Home</button>

      <Link href="login/loginteacher">login Teacher</Link>

      <ul>
        <li>
          <Link href="/loginstudent/anil">Anil</Link>
        </li>
        <li>
          <Link href="/loginstudent/sam">sam</Link>
        </li>
        <li>
          <Link href="/loginstudent/peter">peter</Link>
        </li>
      </ul>
    </>
  );
};

export default LoginStudent;
