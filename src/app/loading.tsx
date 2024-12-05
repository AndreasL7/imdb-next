import React from "react";
import Image from "next/image";

const loading = () => {
  return (
    <div className="flex justify-center mt-16">
      <Image
        src="/rolling.svg"
        alt="Loading"
        width={100}
        height={100}
        className="h-52"
      />
    </div>
  );
};

export default loading;
