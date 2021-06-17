import React from 'react'
import Blog from "../../models/blog.model";

function Table({ Title, Excerpt, Author, createdAt,  }: Blog) {
    return (
        <tr className="text-center border-b text-sm font-poppins text-gray-600 hover:bg-green-200">
            <td className="p-2 border-r">{Title}</td>
            <td className="p-2 border-r">{Excerpt}</td>
            <td className="p-2 border-r">{Author}</td>
            <td className="p-2 border-r">{new Date(+createdAt).toISOString()}</td>
            
        </tr>
    )
}
export default Table;