import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import MostRecents from "../components/MostRecents";
import MostPopular from "../components/MostPopular";
import PaginationResult from "../components/PaginationResult";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home(props: any) {
  const [page, setPage] = useState(0);
  const query = useQuery();

  useEffect(() => {
    const p = +(query.get("page") || "1");
    setPage(p);
  }, [query])

  return (
    <>
      {page === 1 && <MostRecents />}
      {page === 1 && <MostPopular />}
      <PaginationResult page={page} />
    </>
  );
}

export default Home;
