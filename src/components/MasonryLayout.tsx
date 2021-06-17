import React from "react";
import ImageCard from "./ImageCard/ImageCard";

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
    <section className="masonry-layout">
      {items.map(({ date, title, image, tags, apparence }, i) => (
        <ImageCard
          date={date}
          title={title}
          image={image}
          tags={tags}
          apparence={apparence}
          key={i}
          className={`${apparence === "horizontal" && "two-cols"}`}
        />
      ))}
    </section>
  );
}

export default MasonryLayout;
