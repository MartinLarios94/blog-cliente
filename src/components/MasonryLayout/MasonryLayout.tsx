import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import MostRecentsResult from "../../models/most-recents-result";
import "./MasonryLayout.styles.css";

function MasonryLayout({ horizontals, verticals }: MostRecentsResult) {
  const horizontal_a = horizontals[0];
  const horizontal_b = horizontals[1];
  const vertical_a = verticals[0];
  const vertical_b = verticals[1];
  const vertical_c = verticals[2];
  const vertical_d = verticals[3];
  return (
    <>
      <div className="w-full grid grid-cols-2 auto-rows-max gap-4 md:grid-rows-3 md:grid-cols-4">
        {horizontal_a && <ImageCard
          date={horizontal_a.date}
          title={horizontal_a.title}
          image={horizontal_a.image}
          tags={horizontal_a.tags}
          apparence={horizontal_a.apparence}
          className="col-span-2 row-start-1 md:row-end-2 md:col-start-1 md:col-end-3"
        />}
        {vertical_a && <ImageCard
          date={vertical_a.date}
          title={vertical_a.title}
          image={vertical_a.image}
          tags={vertical_a.tags}
          apparence={vertical_a.apparence}
          className="row-start-2 md:row-start-1 md:row-end-3 md:col-start-3 md:col-end-4"
        />}
        {vertical_b && <ImageCard
          date={vertical_b.date}
          title={vertical_b.title}
          image={vertical_b.image}
          tags={vertical_b.tags}
          apparence={vertical_b.apparence}
          className="row-start-2 md:row-start-1 md:row-end-3 md:col-start-4 md:col-end-5"
        />}
        {vertical_c && <ImageCard
          date={vertical_c.date}
          title={vertical_c.title}
          image={vertical_c.image}
          tags={vertical_c.tags}
          apparence={vertical_c.apparence}
          className="md:row-start-2 md:row-end-4 md:col-start-1 md:col-end-2 hidden md:flex"
        />}
        {vertical_d && <ImageCard
          date={vertical_d.date}
          title={vertical_d.title}
          image={vertical_d.image}
          tags={vertical_d.tags}
          apparence={vertical_d.apparence}
          className="md:row-start-2 md:row-end-4 md:col-start-2 md:col-end-3 hidden md:flex"
        />}
        {horizontal_b && <ImageCard
          date={horizontal_b.date}
          title={horizontal_b.title}
          image={horizontal_b.image}
          tags={horizontal_b.tags}
          apparence={horizontal_b.apparence}
          className="md:row-start-3 md:row-end-4 md:col-start-3 md:col-end-5 hidden md:flex"
        />}
      </div>
    </>
  );
}

export default MasonryLayout;
