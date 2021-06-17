import React, { useState, useEffect, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "../graphql/Queries";
import Blog from "../models/blog.model";
import ImagePagination from "./ImagePagination/ImagePagination";

function PaginationResult() {
  const [pagination, setPagination] = useState<Blog[]>([]);
  const { error, loading, data } = useQuery(GET_BLOGS, {
    variables: {
      pagination: { limit: 9, skip: 0 },
    },
  });

  useEffect(() => {
    if (!data || !data.blogs) return;

    const {
      blogs: { blogs },
    } = data;

    setPagination(blogs);
  }, [data]);

  return (
    <section id="pagination-result" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {pagination.map((page, i: number) => (
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
    </section>
  );
}

export default PaginationResult;
