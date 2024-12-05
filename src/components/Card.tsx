import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ResultsProps } from "./Results";
import { FiThumbsUp } from "react-icons/fi";

interface CardProps {
  result: ResultsProps;
}

const Card = ({ result }: CardProps) => {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          alt=""
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-pacity duration-300"
        ></Image>
      </Link>
      <div className="p-2">
        <p className="line-clamp-2 text-md">{result.overview}</p>
        <h2 className="text-lg font-bold truncate">{result.title || ""}</h2>
        <p className="flex items-center">
          {result.release_date || ""}
          <FiThumbsUp className="h-5 mr-1 ml-3" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Card;
