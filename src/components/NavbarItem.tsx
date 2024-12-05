"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface NavBarItemProps {
  title: string;
  param: string;
}

const NavbarItem = ({ title, param }: NavBarItemProps) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavbarItem;
