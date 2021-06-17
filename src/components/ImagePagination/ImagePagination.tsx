import React from "react";
import BlogModel from "../../models/blog.model";
import Likes from "../../assets/img/likes.svg";
import Views from "../../assets/img/views.svg";
import "./ImagePagination.styles.css";

function ImagePagination(props: BlogModel) {
  return (
    <div className="p-4 w-full md:w-1/3">
      <div className="h-full rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center sm:image-card"
          src={`${props.Image.Content}`}
          alt="blog"
        />
        <div className="pt-2 pb-6">
          <h2 className="tracking-widest text-xs title-font font-medium font-poppins text-gray-400 mb-1">
            {props.Author}
          </h2>
          <h1 className="title-font text-lg font-medium font-domine text-gray-900 mb-3">
            {props.Title}
          </h1>
          <div className="flex content-start items-center flex-wrap ">
            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <img src={Likes} alt="Likes" className="mr-2"/>
              {props.Likes || 0}
            </span>
            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1">
              <img src={Views} alt="Views" className="mr-2"/>
              {props.Views || 0}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ImagePagination;
