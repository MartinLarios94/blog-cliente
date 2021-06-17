import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <ul className="flex">
            <li className="cursor-pointer mx-1 px-3 py-2 bg-gray-200 text-gray-500 rounded-lg">
                <a className="flex items-center font-bold" href="/#">
                    <span className="mx-1">previous</span>
                </a>
            </li>
            {
                pages.map((_, i) => (
                    <li className="cursor-pointer mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg" key={i}>
                        <Link to={{
                            pathname: "/",
                            search: `?page=${i + 1}`
                        }} className="font-bold">{i + 1}</Link>
                    </li>
                ))
            }
            <li className="cursor-pointer mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
                <a className="flex items-center font-bold" href="/#">
                    <span className="mx-1">Next</span>
                </a>
            </li>
        </ul>
    )
}

export default Pagination