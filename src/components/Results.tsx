import React from "react";

interface ResultsProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface ResultsComponentProps {
  results: ResultsProps[]; // Array of ResultsProps objects
}

const Results = ({ results }: ResultsComponentProps) => {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <h2>{result.original_title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Results;
