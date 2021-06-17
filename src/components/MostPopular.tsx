import React, { useState, useEffect, useMemo } from "react";
import { useQuery } from "@apollo/client";
import Blog from "../models/blog.model";
import { GET_BLOGS } from "../graphql/Queries";
import ImagePopular from "../components/ImagePopular/ImagePopular";

function MostPopular() {
  const [popular, setPopular] = useState<Blog>();

  const { error, loading, data } = useQuery(GET_BLOGS, {
    variables: {
      sort: { Views: "desc" },
      pagination: { limit: 1, skip: 0 },
    },
  });

  useEffect(() => {
    if (!data || !data.blogs) return;

    const {
      blogs: { blogs },
    } = data;

    const blog: Blog = blogs[0];
    setPopular(blog);
  }, [data]);

  return (
    <section id="most-popular" className="my-10">
      {popular && (
        <ImagePopular
          Title={popular?.Title}
          Author={popular?.Author}
          Excerpt={popular?.Excerpt}
          Image={popular.Image}
          Likes={popular?.Likes}
          Tag={popular?.Tag}
          Views={popular?.Views}
          createdAt={popular?.createdAt}
        />
      )}
    </section>
  );
}

export default MostPopular;
