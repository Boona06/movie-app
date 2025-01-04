"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

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
    <div className="flex justify-around pr-20 gap-2">
      {getPage.map((page) => (
        <div
          key={page}
          className={`cursor-pointer px-2 ${
            pageInfo.currentPage === page ? "font-bold text-blue-500" : ""
          }`}
          onClick={() => onChangePage(page)}
        >
          {page}
        </div>
      ))}
    </div>
  );
}

