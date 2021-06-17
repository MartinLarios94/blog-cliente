import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_BLOG } from "../../graphql/Mutation";

export default function FormBlogs() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [author, setAuthor] = useState("");
  const [tag, setTag] = useState("");
  const [imageContent, setImageContent] = useState("");
  const [imageOrientation, setImageOrientation] = useState("horizontal");
  const [createBlog, { error }] = useMutation(CREATE_BLOG);

  const addBlog = () => {
    createBlog({
      variables: {
        Title: title,
        Excerpt: excerpt,
        Author: author,
        Tag: tag,
        Image: {
          Content: imageContent,
          Orientation: imageOrientation || "horizontal",
        },
        Views: Math.floor(Math.random() * 100),
        Likes: Math.floor(Math.random() * 100),
      },
    });
    if (error) console.log(error);
  };
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover ">
      <div className=" bg-black opacity-60 inset-0 z-0"></div>
      <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-5 text-3xl font-bold text-gray-900">
            Make a post!
          </h2>
        </div>
        <div className="mt-8 space-y-3">
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Title
            </label>
            <input
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              type=""
              placeholder="Title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Excerpt
            </label>
            <input
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              type=""
              placeholder="Excerpt"
              onChange={(e) => {
                setExcerpt(e.target.value);
              }}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Author
            </label>
            <input
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              type=""
              placeholder="Author"
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Tag
            </label>
            <input
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              type=""
              placeholder="Tag"
              onChange={(e) => {
                setTag(e.target.value);
              }}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Attach Image Url
            </label>
            <input
              type=""
              onChange={(e) => setImageContent(e.target.value)}
              placeholder="Image Url"
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Image Orientation
            </label>
            <select
              className="text-base p-2 border font-domine border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              onChange={(e) => setImageOrientation(e.target.value)}
            >
              <option value="">--Select an option--</option>
              <option value="horizontal">Horizontal</option>
              <option value="vertical">Vertical</option>
            </select>
          </div>
          <div>
            <Link
              onClick={addBlog}
              className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
              font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
              to="/"
            >
              Create
            </Link>
            <Link
              to="/admin"
              className="my-5 w-full flex justify-center bg-red-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-red-600 shadow-lg cursor-pointer transition ease-in duration-300"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
