import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-2 px-6 w-full">
      <Link href="/">
        <h2 className="text-lg font-semibold">Atmos</h2>
      </Link>
      <nav>
        <ul className="flex items-center justify-center gap-12 list-none [&>*]:hover:text-safron [&>*]:transition-colors [&>*]:duration-150 [&>*]:ease-out">
          <li>
            <Link href="/#pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
