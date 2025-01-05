"use client"
import { Movie } from "./type";
import Card from "./card";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

export type Props = {
  title: string ,
  endpoint: string,
  moreLink?: string,
}


export default function Section( {endpoint , title, moreLink  } : Props ) {
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
        `https://api.themoviedb.org/3/${endpoint}`,
        options
      );
      const resJson = await response.json();
      setMovie(resJson.results);
      setLoading(false)
      console.log(resJson)
    };
 
    fetchMovie();
  }, [endpoint]); 

  return (<>
    {loading && <div className="flex gap-4 ">
      <Skeleton className="h-[250px] w-[168px] rounded-xl " /></div>}
    {!loading && <div className="pl-5 pr-5 lg:pl-20 lg:pr-20 md:pl-12 md:pr-12 ">
      <div className="flex justify-between">
        <h2 className="font-bold pt-10 text-2xl">{title}</h2>
       { moreLink &&  <Link href={`/${moreLink}`} >
        <button className="font-bold pt-10">See more</button>
         </Link>}
        </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 pb-14">
        {movie?.map((movieItem) => (
        <Card key={movieItem.id} movie={movieItem} vote_average={movieItem.vote_average} />
        )).slice(0 , 10 )}
      </div>
    </div>}
  </>
    
  );
}
