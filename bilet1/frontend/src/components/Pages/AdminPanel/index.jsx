import React from "react";
import { useGetAllProductsQuery } from "../../../services/product";
import "../AdminPanel/tailwind.css";

const Admin = () => {
  const { data: adminProducts } = useGetAllProductsQuery();
  console.log(adminProducts);
  return (
    <div>
      <>
        {/* component */}
        <div className="text-gray-900 bg-gray-200">
          <div className="p-4 flex">
            <h1 className="text-3xl">Products</h1>
          </div>
          <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <tbody>
                <tr className="border-b">
                  <th className="text-left p-3 px-5">Title</th>
                  <th className="text-left p-3 px-5">Rate</th>
                  <th className="text-left p-3 px-5">Like</th>
                  <th className="text-left p-3 px-5">Description</th>
                  <th className="text-left p-3 px-5">Image</th>
                  <th />
                </tr>

                {adminProducts &&
                  adminProducts.map((el) => {
                    return (
                      <tr className="border-b hover:bg-orange-100 bg-gray-100">
                        <td className="p-3 px-5">{el.title}</td>
                        <td className="p-3 px-5">{el.rate}</td>
                        <td className="p-3 px-5">{el.like}</td>
                        <td className="p-3 px-5">{el.description}</td>
                        <td className="p-3 px-5">
                          <img
                            style={{ width: "100px" }}
                            src={el.image}
                            alt=""
                          />
                        </td>
                        <td className="p-3 px-5">
                          <button
                            type="button"
                            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            Delete
                          </button>
                        </td>
                        <td className="p-3 px-5">
                          <button
                            type="button"
                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    </div>
  );
};

export default Admin;
