import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "../../graphql/Queries";
import Blog from "../../models/blog.model";
import Table from "../../components/utils/Table";
import { Link } from "react-router-dom";

function PanelAdmin() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const { error, loading, data } = useQuery(GET_BLOGS);

  useEffect(() => {
    if (!data || !data.blogs) return;

    const {
      blogs: { blogs },
    } = data;

    setBlogs(blogs);
  }, [data]);

  return (
    <section className="p-4 m-4 ">
      <div className="table w-full p-2">
        <table className="w-full border">
          <thead className="font-domine">
            <tr className="bg-gray-50 border-b">
              <th className="p-2 border-r cursor-pointer text-sm text-gray-500">
                <div className="flex items-center justify-center">Title</div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm  text-gray-500">
                <div className="flex items-center justify-center">Excerpt</div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm  text-gray-500">
                <div className="flex items-center justify-center">Author</div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm  text-gray-500">
                <div className="flex items-center justify-center">
                  Create Date
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, i) => (
              <Table
                key={i}
                Title={blog.Title}
                Excerpt={blog.Excerpt}
                Tag={blog.Tag}
                Author={blog.Author}
                Image={blog.Image}
                Likes={blog.Likes}
                Views={blog.Views}
                createdAt={blog.createdAt.toString()}
              />
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/createBlog" type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Blog</Link>
    </section>
  );
}
export default PanelAdmin;
