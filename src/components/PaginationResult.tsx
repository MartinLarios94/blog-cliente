import React, { useState, useEffect, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "../graphql/Queries";
import Blog from "../models/blog.model";
import ImagePagination from "./ImagePagination/ImagePagination";
import Pagination from "./Pagination";

type PaginationResultProps = {
  page: number
}

function PaginationResult({ page }: PaginationResultProps) {
  const [result, setResult] = useState<Blog[]>([])
  const [total, setTotal] = useState(0);

  const { error, loading, data } = useQuery(GET_BLOGS, {
    variables: {
      pagination: { limit: 9, skip: (page - 1) },
    },
  });

  useEffect(() => {
    if (!data || !data.blogs) return;

    const {
      blogs: { blogs, total: t },
    } = data;

    setResult(blogs);
    setTotal(t);
  }, [data]);

  return (
    <section id="pagination-result" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {result.map((page, i: number) => (
            <ImagePagination
              key={i}
              Title={page.Title}
              Excerpt={page.Excerpt}
              Tag={page.Tag}
              Author={page.Author}
              Image={page.Image}
              Likes={page.Likes}
              Views={page.Views}
              createdAt={page.createdAt}
            />
          ))}
        </div>
      </div>
      <div className="container">
        <Pagination perPage={9} page={page} total={total} />
      </div>
    </section>
  );
}

export default PaginationResult;
