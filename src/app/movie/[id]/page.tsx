type Props = {
    params : {
        id : number ,
    }
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
    const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${options}&language=en-US` , options);
    const data = await response.json()
    const imgPath= data?.poster_path  ?? data?.backdrop_path 
    const genres=data.genres
    const runtime = data.runtime
    const hour = runtime /60 
    const minut = runtime % 60
    console.log(data)
    return<div>
        <div className="flex justify-between p-6">
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
        <img className="p-4 -mt-3 " src={`https://image.tmdb.org/t/p/w500${imgPath}`}/>
        <div className="flex ">
             <img className="p-8" src={`https://image.tmdb.org/t/p/w92${imgPath}`}/>
         <div>
             <p> {genres.map((genre : any) => {<p key={genres.id}>{genre.name},</p> })}</p> 
             <p>{data.overview}</p>
        </div>
        </div>
    </div>
}