import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import "./MasonryLayout.styles.css";

type Item = {
  title: String;
  date: Date;
  tags: Array<String>;
  image: String;
  apparence: String;
};

type MasonryLayoutProps = {
  items: Array<Item>;
};

function MasonryLayout({ items }: MasonryLayoutProps) {
  return (
    <div className="masonry-layout w-full px-2">
      {items.map(({ date, title, image, tags, apparence }, i) => (
        <ImageCard
          date={date}
          title={title}
          image={image}
          tags={tags}
          apparence={apparence}
          key={i}
          className={`${apparence === "horizontal" && "two-rows"}`}
        />
      ))}
    </div>
  );
}

export default MasonryLayout;
