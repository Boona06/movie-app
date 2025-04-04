"use client"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

type GenreType = {
    id : number ,
    name : string
}
export default function FilterGenre(){
    const [genre , setGenre] = useState([])
    const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
        },
      };
    
      useEffect(() => {
        const fetchGenres = async () => {
          const response = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?language=en-US`,
            options
          );
          const resJson = await response.json();
          console.log(resJson)
          setGenre(resJson.genres)
        };
    
        fetchGenres();
      }, []);
    return(
        <>
        <Popover>
            <PopoverTrigger>
                <div className="p-2 pl-5 pr-4 flex gap-2 border-solid border-2 border-gray-300 rounded-md"><IoIosArrowDown className="mt-1"/>Genre</div>
            </PopoverTrigger>
            <PopoverContent >
              <h2 className="font-bold">Genres</h2>
               <p>See lists of movies by genre</p>
               <div className="border-solid border-[1px] border-gray-400 m-2"></div>
               {genre.map((genre : GenreType)=><Link key={genre.name} href={`/movie/${genre.id}`}><Badge className="ml-1" key={`genre-${genre.id}`}>{genre.name}<IoIosArrowForward/></Badge></Link>)}
            </PopoverContent>
        </Popover>
        </>
    );
}