
import Section from "@/app/components/section";


export default function Recommend({params} : {params : { id : string}}){
    return(
        <div>
            <Section endpoint={`/movie/${params.id}/recommendations`} title="More like this"/>
        </div>
    );
}