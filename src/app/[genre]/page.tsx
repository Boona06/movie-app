"use client";
import { useEffect, useState } from "react";
import { Movie } from "../components/type";
import { useParams, useSearchParams } from "next/navigation";
import Pagenition from "../components/pagenition";
import Card from "../components/card";
import { Skeleton } from "@/components/ui/skeleton";

type PageInfo = {
  totalPage: number ,
  currentPage:number
}
export default function Genre() {
  const params = useParams();
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [pageInfo , setPageinfo]=useState<PageInfo>({
    totalPage : 0 ,
    currentPage: 0,
  })

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
        `https://api.themoviedb.org/3/movie/${params.genre}?language=en-US&page=${page}`,
        options
      );
      const resJson = await response.json();
      console.log(resJson)
      setMovies(resJson.results);
      setPageinfo( {currentPage :  Number(page) , totalPage : resJson.totalpages})
      setLoading(false);
    };

    fetchMovies();
  }, [params.genre, page]);

  if (loading) {
    return <div><Skeleton className="w-[160px] h-[300px] rounded-md" /></div>;
  }

  return (
    <div>
      <div>
      <p className="font-bold text-2xl pl-10 pt-16">{params.genre}</p>
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 p-8">
              {movies?.map((movieItem) => (
              <Card key={movieItem.id} movie={movieItem} vote_average={movieItem.vote_average} />
              ))}
            </div>
      </div>
      <Pagenition pageInfo={pageInfo}/>
    </div>
  );
}
