import Link from "next/link";
import React from "react";
import "./login.css";
const Layout = ({ children }) => {
  return (
    <>
      <div>
        <ul className="login-nav">
          <li>
            <Link href="/login">Home</Link>
          </li>
          <li>
            <Link href="/login">About</Link>
          </li>
          <li>
            <Link href="/login">Service</Link>
          </li>
          <li>
            <Link href="/login">Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <div>
          <ul className="sidebar">
            <li>
              <Link href="/about">Dashboard</Link>
            </li>
            <li>
              <Link href="/about">Profile</Link>
            </li>
            <li>
              <Link href="/about">Reports</Link>
            </li>
            <li>
              <Link href="/about">Settings</Link>
            </li>
          </ul>
        </div>
      </div>
      {children}
    </>
  );
};

export default Layout;
