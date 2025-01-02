"use client";
import { useEffect, useState } from "react";
import { Movie } from "../components/type";
import { useParams, useSearchParams } from "next/navigation";
import Pagenition from "../components/pagenition";
import Section from "../components/section";

export type Params = {
  category: string,
};

export default function Genre({ category }: Params) {
  const params = useParams();
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
    },
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${category}?language=en-US&${page}`,
        options
      );
      const resJson = await response.json();
      console.log(resJson)
      setMovies(resJson.results);
      setLoading(false);
      console.log(category)
    };

    fetchMovies();
  }, [params]);

  if (loading) {
    return <div>Unshaad bna</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-7">
      <Section title={category} endpoint={category} movielist={movies}/>
      </div>
      <Pagenition/>
    </div>
  );
}
