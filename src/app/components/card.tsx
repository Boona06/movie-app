import Link from "next/link";
import { Movie } from "./type";

 type Props = {
  movie: Movie,
  vote_average:number,
}

export default function Card({ movie , vote_average }: Props) {
  const imgPath= movie.poster_path  ?? movie.backdrop_path 
  return (
    <Link href={`/movie/${movie.id}`}>
    <div className="mt-10">
      <img
        src={`https://image.tmdb.org/t/p/w500${imgPath}`}
        className="rounded-t-lg"
      />
      <div className="">
        <div className="bg-gray-100 opacity-85 rounded-b-lg text-black pl-3 p-5 ">
          <div className="flex gap-2 items-center font-bold ">
          <svg width="19" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.00065 1.63306L10.0607 5.80639L14.6673 6.47972L11.334 9.72639L12.1207 14.3131L8.00065 12.1464L3.88065 14.3131L4.66732 9.72639L1.33398 6.47972L5.94065 5.80639L8.00065 1.63306Z" fill="#FDE047" stroke="#FDE047"/>
        </svg> {vote_average.toFixed(1)} <p className="text-[#71717A] font-normal"> / 10 </p>
          </div>
       
            <h3>{movie.title}</h3>
        </div>  
      </div>
    </div>
    </Link>
    
  );
}
