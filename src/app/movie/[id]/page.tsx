import Section from "@/app/components/section";

type Props = {
    params : {
        id : number ,
    }
}
type Director = {
    name : string ,
    job : string
}
type Writers = {
    name : string,
    department : string,
}
type Stars = {
    name : string,
}

export default async function MovieDetailPage({ params } : Props){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE',
        },
      };
    const movieDetail = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/credits` , options);
    const credits = await movieDetail.json()
    const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${options}&language=en-US` , options);
    const data = await response.json()
    const imgPath= data?.poster_path  ?? data?.backdrop_path 
    const genres=data.genres
    const runtime = data.runtime
    const hour = runtime /60 
    const minut = runtime % 60
    console.log(credits)
    console.log(data)
    return<div className="lg:pl-44 md:pl-24 ">
        <div className="flex justify-between p-6 ">
            <div>
            <p className="font-bold"> {data.title}</p>
            <p>{data.release_date} · PG · {hour.toFixed(0)}h {minut}min</p>
            </div>
        <div className="flex gap-2 font-bold ">
        <svg width="19" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.00065 1.63306L10.0607 5.80639L14.6673 6.47972L11.334 9.72639L12.1207 14.3131L8.00065 12.1464L3.88065 14.3131L4.66732 9.72639L1.33398 6.47972L5.94065 5.80639L8.00065 1.63306Z" fill="#FDE047" stroke="#FDE047"/>
        </svg> {data.vote_average.toFixed(1)} <p className="text-[#71717A] font-normal"> / 10 </p>
        </div>
        </div>
        <div className="flex justify-center">
        <img className="p-8 hidden sm:hidden lg:block md:hidden" src={`https://image.tmdb.org/t/p/w500${imgPath}`}/>
        <img className="p-8 " src={`https://image.tmdb.org/t/p/w500${imgPath}`}/>
        </div>
        <div className="flex ">
             <img className="p-8 lg:hidden" src={`https://image.tmdb.org/t/p/w92${imgPath}`}/>
         <div className="mt-7">
             {genres.map((genre : any) => (
                 <span className=" rounded-lg border-solid border-[#E4E4E7] border-[1px] p-[1px] ml-8 md:ml-16 ">{genre.name}</span>
              ))}
             <p className="pt-4 lg:pl-16">{data.overview}</p>
        </div>
        </div>
        <div className="p-8 lg:ml-8 ">
            <div className="flex">
            <p className="pt-3 font-bold pr-14"> Director </p>
              {credits.crew
                .filter((director : Director) => director.job == "Director")
                .map((director : Director)=>
                (<span className="pl-4 pt-3">{director.name}</span>) )}
            </div>
            <div className=" border-[2px] border-solid mt-4"></div>
            <div className="flex">
            <p className="pt-3 font-bold pr-14"> Writers </p>
                {credits.crew
                .filter((Writers : Writers) => Writers.department == "Writing")
                .map((Writers : Writers)=>
                (<span className="pl-4 pt-3">{Writers.name} · </span>) )}
            </div>
            <div className=" border-[2px] border-solid mt-4 "></div>
            <div className="flex">
            <p className="pt-3 font-bold pr-14"> Director </p>
                {credits.cast.slice( 0 , 3).map((Stars : Stars)=>
                (<span className="pl-4 pt-3">{Stars.name}</span>))}
            </div>
            <div className=" border-[2px] border-solid mt-4 "></div>
           
        </div>
        <Section title="More Like this" endpoint={`/movie/${params.id}/recommendations`}  moreLink={`movie/${params.id}/recommended`}/>
    </div>
}