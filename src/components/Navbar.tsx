import React, { Suspense } from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6">
      <Suspense>
        <NavbarItem title="Trending" param="fetchTrending" />
      </Suspense>
      <Suspense>
        <NavbarItem title="Top Rated" param="fetchTopRated" />
      </Suspense>
    </div>
  );
};

export default Navbar;
