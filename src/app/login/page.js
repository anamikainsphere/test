"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const navigate = (page) => [router.push("/login/" + page)];
  return (
    <>
      <div>Login</div>
      <button onClick={() => router.push("/")}>Back to Home</button>
      <Link href="login/loginteacher">login Teacher</Link>
      <button onClick={() => navigate("loginteacher")}>Login Teacher</button>
      <button onClick={() => navigate("loginteacher")}>Login Student</button>
    </>
  );
};
export default Login;
 