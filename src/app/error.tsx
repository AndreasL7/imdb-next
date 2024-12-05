"use client";

import React, { useEffect } from "react";

interface ErrorProps {
  error: string;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later.</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}></button>
    </div>
  );
};

export default Error;
