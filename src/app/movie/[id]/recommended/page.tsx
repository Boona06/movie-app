
import Section from "@/app/components/section";

type Props = {
  params: {
    id: string; // `string` байх ёстой
  };
};

export default async function MovieDetailPage({ params }: Props) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE ", 
    },
  };

  const movieDetailResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}/credits`,
    options
  );
  const credits = await movieDetailResponse.json();

  const movieResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
    options
  );
  const data = await movieResponse.json();

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.overview}</p>
      <Section title="More Like This" endpoint={`/movie/${params.id}/recommendations`} />
    </div>
  );
}
