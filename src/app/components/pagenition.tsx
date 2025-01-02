"use client"

import { usePathname , useSearchParams , useRouter } from "next/navigation";

export default function Pagenition({}){

const pathname = usePathname();
const searchParams = useSearchParams();
const router = useRouter();

const onChangePage = (newPage : number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('page' , newPage.toString());
    const newUrl = pathname + '?' + newSearchParams.toString();
    router.push(newUrl);
}
return(<div className=" flex justify-end pr-20 gap-10">
    <div onClick={()=>onChangePage(1)}>1</div>
    <div onClick={()=>onChangePage(10)}>10</div>
    <div onClick={()=>onChangePage(100)}>100</div>
</div>);
}