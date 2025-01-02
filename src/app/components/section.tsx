"use client"
import { Movie } from "./type";
import Card from "./card";
import { Props } from "./type";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function Section( {endpoint , title } : Props ) {
  const [loading , setLoading]=useState(true)
  const [movie, setMovie] = useState<Movie[]>([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE',
    },
  };

  useEffect(() => {
  const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`,
        options
      );
      const resJson = await response.json();
      setMovie(resJson.results);
      console.log(resJson)
    };
    setLoading(false)
    fetchMovie();
  }, []); 

  return (<>
    {loading && <div>Unshaad bnaa ho </div>}
    {!loading && <div className="pl-7">
      <div className="flex justify-between">
        <h2 className="font-bold pt-10">{title}</h2>
        <Link href={`/${endpoint}`} >
        <button className="font-bold pt-10">View all</button>
         </Link>
        </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-7">
        {movie?.map((movieItem) => (
        <Card key={movieItem.id} movie={movieItem} vote_average={movieItem.vote_average} />
        ))}
      </div>
    </div>}
  </>
    
  );
}
