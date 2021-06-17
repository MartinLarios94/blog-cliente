import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Left from "../assets/img/left.svg";
import Right from "../assets/img/right.svg";

type PaginationProps = {
    perPage: number,
    total: number,
    page: number
}

function Pagination({ perPage, total, page }: PaginationProps) {
    const [pages, setPages] = useState<Array<number>>([]);

    useEffect(() => {
        const p = Math.ceil(total / perPage);
        setPages(Array(p).fill(0))
    }, [perPage, total])

    return (
        <ul className="flex w-max mx-auto my-4">
            {
                page !== 1 && <li className="cursor-pointer mx-1 px-3 py-2 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
                    <Link to={{
                        pathname: "/",
                        search: `?page=${(page - 1)}`
                    }} className="flex items-center font-poppins"><img src={Left} alt="<"/> previous</Link>
                </li>
            }
            {
                pages.map((_, i) => (
                    <li className={`cursor-pointer mx-1 px-3 py-2 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg ${page === (i + 1) && ""}`} key={i}>
                        <Link to={{
                            pathname: "/",
                            search: `?page=${i+1}`
                        }} className="font-poppins">{i + 1}</Link>
                    </li>
                ))
            }
            {
                page !== pages.length && <li className="cursor-pointer mx-1 px-3 py-2 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
                    <Link to={{
                        pathname: "/",
                        search: `?page=${(page + 1)}`
                    }} className="flex items-center font-poppins">next <img src={Right} alt=">"/></Link>
                </li>
            }
        </ul>
    )
}

export default Pagination