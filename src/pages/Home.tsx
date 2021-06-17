import React, { useEffect, useState } from "react";
import MostRecents from "../components/MostRecents"
import MostPopular from "../components/MostPopular"
import PaginationResult from "../components/PaginationResult"

function Home(props: any) {
  return <>
    <MostRecents />
    <MostPopular />
    <PaginationResult />
  </>;
}

export default Home;
