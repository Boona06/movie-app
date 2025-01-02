
import Section from "./components/section";
import { Props } from "./components/type";
export default function Home(props:Props) {
  return (
   <div>
    <Section title={"Upcoming"} endpoint={"upcoming"} movielist={props.movielist}/>
    <Section title={"Popular"} endpoint={"popular"} movielist={props.movielist}/>
    <Section title={"Top rated"} endpoint={"top_rated"} movielist={props.movielist}/>
   </div>
  );
}
