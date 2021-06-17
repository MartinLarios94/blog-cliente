import React, { useState, useEffect, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "../graphql/Queries";
import Blog from "../models/blog.model";
import MasonryLayout from "./MasonryLayout/MasonryLayout";

function MostRecents() {
  const [recents, setRecents] = useState([]);
  const { error, loading, data } = useQuery(GET_BLOGS, {
    variables: {
      sort: { createdAt: "desc" },
      pagination: { limit: 6, skip: 0 },
    },
  });

  const parsed = useMemo(() => {
    if(!data || !data.blogs) return [];

    const {
      blogs: { blogs },
    } = data;
    return blogs.map(({ Title: title, createdAt, Tag, Image: { Content: image, Orientation: apparence } }: Blog) => {
      const date = new Date(+createdAt.toString());
      return { title, date, tags: [Tag], image, apparence };
    });
  }, [data]);

  useEffect(() => {
    setRecents(parsed);
  }, [parsed]);

  return <section id="most-recents" className="py-4 px-2 w-full">
    <MasonryLayout items={recents}/>
  </section>;
}

export default MostRecents;
