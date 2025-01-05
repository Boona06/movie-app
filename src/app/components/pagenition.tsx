"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

type PageInfo = {
  currentPage: number;
  totalPage: number;
};

export default function Pagenition({ pageInfo }: { pageInfo: PageInfo }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const visitPage = (currentPage: number) => {
    if (currentPage < 3) {
      return [1, 2, 3, 4, 5];
    }
    if (currentPage > pageInfo.totalPage - 2) {
      return [
        pageInfo.totalPage - 4,
        pageInfo.totalPage - 3,
        pageInfo.totalPage - 2,
        pageInfo.totalPage - 1,
        pageInfo.totalPage,
      ];
    }
    return [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
    ];
  };

  const onChangePage = (newPage: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", newPage.toString());
    const newUrl = pathname + "?" + newSearchParams.toString();
    router.push(newUrl);
  };

  const getPage = visitPage(pageInfo.currentPage);

  return (
    <div className="flex justify-end  pr-20 gap-2">
      {pageInfo.currentPage > 1  && (
        <div className="pt-1" onClick={() => onChangePage(pageInfo.currentPage - 1)}><IoIosArrowBack/></div>
      )}
      {getPage.map((page) => (
        <div
          key={page}
          className={`cursor-pointer px-2 ${
            pageInfo.currentPage === page ? "font-bold text-slate-500 border-solid border-2 border-[#E4E4E7] rounded-lg " : ""
          }`}
          onClick={() => onChangePage(page)}
        >
          {page}
        </div>
      ))}
      <div>
      {pageInfo.currentPage < 500  && (
        <div className="pt-1" onClick={() => onChangePage(pageInfo.currentPage + 1)}><IoIosArrowForward/></div>
      )}
      </div>
    </div>
  );
}

