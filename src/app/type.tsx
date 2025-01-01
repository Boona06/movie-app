export type Movie = {
    title:string,
    id:number, 
    overview:string,
    vote_average:number,
    poster_path:string,
    backdrop_path:string,
}
export type Props = {
    movielist: Movie[]
    title: string ,
    endpoint: string,
}