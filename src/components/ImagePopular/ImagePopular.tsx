import React from "react";
import BlogModel from "../../models/blog.model";
import likes from "../../assets/img/likes.svg";
import views from "../../assets/img/views.svg";
import "./ImagePopular.styles.css";

function ImagePopular(props: BlogModel) {
  return (
    <section className=" w-full grid items-center">
      <div className="bg-white p-4 w-80 max-w-3xl sm:w-full sm:p-4 h-auto sm:h-64 flex flex-col sm:flex-row gap-5 select-none">
        <div
          style={{ backgroundImage: `url("${props.Image.Content}")` }}
          className="image-card h-52 sm:h-full sm:w-72 bg-gray-100 bg-center bg-cover p-4"
        >
          <div className="flex w-full flex-grow-1">
            <div className="flex-none uppercase bg-white text-black text-xs tracking-wide font-semibold px-2 py-1 rounded-md mr-3">
              <span>{props.Tag}</span>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-1 flex-col gap-2 p-1">
          <h1 className="text-lg sm:text-xl font-semibold font-domine text-gray-600">
            {props.Title}
          </h1>
          <p className="text-gray-500 text-sm sm:text-base line-clamp-3 font-poppins">
            {props.Excerpt}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ImagePopular;
