import React from "react";
import Link from "next/link";

function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link className="text-xl font-bold" href="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
