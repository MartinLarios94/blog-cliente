import React, { useState, useEffect, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { MOST_RECENTS } from "../graphql/Queries";
import Blog from "../models/blog.model";
import MostRecentsResult from "../models/most-recents-result"
import MasonryLayout from "./MasonryLayout/MasonryLayout";

function MostRecents() {
  const [recents, setRecents] = useState<MostRecentsResult>({ horizontals: [], verticals: [] });
  const { error, loading, data } = useQuery(MOST_RECENTS);

  const parsed = useMemo(() => {
    if (!data || !data.mostRecents) return { horizontals: [], verticals: [] };
    const { mostRecents: { horizontals, verticals } } = data;

    const map = (({ Title: title, createdAt, Tag, Image: { Content: image, Orientation: apparence } }: Blog) => {
      const date = new Date(+createdAt.toString());
      return { title, date, tags: [Tag], image, apparence };
    });

    const result: MostRecentsResult = {
      horizontals: horizontals.map(map),
      verticals: verticals.map(map)
    }

    return result;
  }, [data]);

  useEffect(() => {
    setRecents(parsed);
  }, [parsed]);

  return <section id="most-recents" className="py-4 px-2 w-full gird place-items-center">
    <MasonryLayout horizontals={recents.horizontals} verticals={recents.verticals} />
  </section>;
}

export default MostRecents;
