import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "../../graphql/Queries";
import Blog from "../../models/blog.model";
import Table from "../utils/Table";

function PanelAdmin() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const { error, loading, data } = useQuery(GET_BLOGS, {
    variables: {
      pagination: { limit: 9, skip: 0 },
    },
  });

  useEffect(() => {
    if (!data || !data.blogs) return;

    const {
      blogs: { blogs },
    } = data;

    setBlogs(blogs);
  }, [data]);

  return (
    <div className="table w-full p-2">
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-50 border-b">
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">
                Title
              </div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">
                Excerpt
              </div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">
                Author
              </div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">
                Create Date
              </div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">
                Actions
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
  );
}
export default PanelAdmin;
