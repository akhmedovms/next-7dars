import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="header">
      <h1 className="logo">
        <Link href="/">MY Next Project</Link>
      </h1>

      <div className="links">
        <Link href="/about">About</Link>
        <Link href="/about/team">Our Team</Link>
        <Link href="/code/repo">Code</Link>
      </div>
    </div>
  );
}

export default Header;
