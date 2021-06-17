import { Form, Formik, FormikHelpers, useFormikContext } from "formik";
import React, { ChangeEvent, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import FormGroupImage from "../utils/FormGroupImage";
import Blog from "../../models/blog.model";
import { useMutation } from "@apollo/client";
import { CREATE_BLOG } from "../../graphql/Mutation";

export default function FormBlogs(props: formBlogsProps) {
  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [author, setAuthor] = useState("")
  const [tag, setTag] = useState("")
  const [image, setImage] = useState<{Content: "", Orientation: ""}>()
  const [imagenBase64, setImagenBase64] = useState("");
  const [imagenURL, setImagenURL] = useState("");
  const [createBlog, { error }] = useMutation(CREATE_BLOG);

  const addBlog = () => {
    createBlog({
      variables: {
        blogInput: {
          Title: title,
          Excerpt: excerpt,
          Author: author,
          Tag: tag,
          Image: image,
        },
      },
    });
    console.log(createBlog);
    if (error) console.log(error);
  };

  const ManejarOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const archivo = e.currentTarget.files[0];
      aBase64(archivo)
        .then((valor: string) => setImagenBase64(valor))
        .catch((error) => console.error(error));

      // values[props.campo] = archivo;
      setImagenURL('')
    }
  };

  const aBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  // useEffect(() => {
  //   addBlog
  // }, [addBlog])

  return (
    
    <div 
    className="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover ">
      <div className=" bg-black opacity-60 inset-0 z-0"></div>
      <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-5 text-3xl font-bold text-gray-900">
            Make a post!
          </h2>
        </div>
        <div className="mt-8 space-y-3" >
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Title
            </label>
            <input
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              type=""
              placeholder="Title"
              onChange={(e) => {setTitle(e.target.value)}}
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
              onChange={(e) => {setExcerpt(e.target.value)}}
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
              onChange={(e) => {setAuthor(e.target.value)}}
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
              onChange={(e) => {setTag(e.target.value)}}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Attach Image
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                <div className="h-full w-full text-center flex flex-col items-center justify-center">
                  <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                    <img
                      className="has-mask h-36 object-center"
                      src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                      alt="freepik image"
                    />
                  </div>
                  <p className="pointer-none text-gray-500 ">
                    <input onChange={ManejarOnChange} id="" className="text-blue-600 hover:underline"
                    />{" "}
                    Select a File from your computer
                  </p>
                </div>
                <input type="file" accept=".jpg, .png, .jpge" className="hidden" />
              </label>
            </div>
          </div>
          <p className="text-sm text-gray-300">
            <span>File type: png,jpg,jpge</span>
          </p>
          <div>
            <button
              type="submit"
              className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
              onClick={addBlog}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface formBlogsProps {
  modelo: Blog; 
}

