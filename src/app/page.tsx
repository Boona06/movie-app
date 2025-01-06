

import Section from "./components/section";

export default function Home() {
  return (
   <div>
  
    <Section  title={"Upcoming"} endpoint={"movie/upcoming?language=en-US&page=1"} moreLink="upcoming?language=en-US&page=1"/>
    <Section title={"Popular"} endpoint={"movie/popular?language=en-US&page=1"} moreLink="popular?language=en-US&page=1" />
    <Section  title={"Top rated"} endpoint={"movie/top_rated?language=en-US&page=1"} moreLink="top_rated?language=en-US&page=1"  />
   </div>
  );
}
