"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-sky-300 text-gray-100 shadow-lg">
      <nav className="flex items-center justify-between p-4">
        <Link href={"/"} className="text-xl font-bold text-indigo-400">
          ecbook commerce
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href="/"
            className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            ホーム
          </Link>
          <Link
            href="/login"
            className="text-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            ログイン
          </Link>

          <Link href={`/profile`}>
            <Image
              width={50}
              height={50}
              className="rounded-3xl"
              alt="profile_icon"
              src={"/default_icon.png"}
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;