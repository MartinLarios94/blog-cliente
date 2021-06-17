import React from 'react'
import Blog from "../../models/blog.model";

function Table({ Title, Excerpt, Author, createdAt }: Blog) {
    return (
        <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
            <td className="p-2 border-r">{Title}</td>
            <td className="p-2 border-r">{Excerpt}</td>
            <td className="p-2 border-r">{Author}</td>
            <td className="p-2 border-r">{createdAt}</td>
            <td>
                <a href="#" className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</a>
                <a href="#" className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Remove</a>
            </td>
        </tr>
    )
}
export default Table;