import React from "react";
import "./ImageCard.styles.css";

type ImageCardProps = {
  title: String;
  date: Date;
  tags: Array<String>;
  image: String;
  apparence: String;
  className: String;
};

function ImageCard({ title, date, tags, image, apparence, className }: ImageCardProps) {
  return (
    <>
      <div
        className={`image-card rounded p-4 flex flex-col text-white ${apparence} ${className}`}
        style={{ backgroundImage: `url("${image}")` }}
      >
        <div className="flex w-full flex-grow-1">
          {tags.map((t, i) => (
            <div
              className="flex-none uppercase bg-white text-black text-xs font-poppins tracking-wide font-semibold px-2 py-1 rounded-md mr-3"
              key={i}
            >
              <span>{t}</span>
            </div>
          ))}
        </div>
        <div className="flex-grow-2 flex flex-col justify-end">
          <h3 className="mb-4 font-domine font-extrabold">{title}</h3>
        </div>
        <span className="flex-grow-1 font-poppins font-medium text-sm">
          {date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>
    </>
  );
}

ImageCard.defaultProps = { apparence: "vertical" };

export default ImageCard;
