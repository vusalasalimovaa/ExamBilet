import React, { useState, useEffect } from "react";
import "./tailwind.css";
import axios from "axios";
import {
  useGetAllProductQuery,
  useGetProductByIdQuery,
  usePatchProductByIdMutation,
} from "../../../services/products";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDeleteProductByIdMutation } from "../../../services/products";
import { sortAtoZ, updateSearchMenu } from "../../../redux/AdminSlice";

const Admin = () => {
  // const [data, setData] = useState([]);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   axios.get("api/menu").then((res) => {
  //     setData(res.data);
  //     console.log(data);
  //   });
  // }, []);

  const [deleteProductById] = useDeleteProductByIdMutation();

  const { data: adminData, refetch } = useGetAllProductQuery();
  console.log(adminData);

  const { menu } = useSelector((store) => store.menu);
  const { AtoZ } = useSelector((store) => store.AtoZ);
  const dispatch = useDispatch();

  const filteredData = adminData?.filter((item) =>
    item.title.toUpperCase().includes(menu.toUpperCase())
  );

  // const sortedData = AtoZ
  //   ? filteredData.sort((a, b) => a.title.localeCompare(b.title))
  //   : filteredData;

  const getSortedData = () => {
    if (filteredData) {
      if (AtoZ) {
        // AtoZ true ise A-Z'ye göre sırala.
        return filteredData.sort((a, b) => a.title.localeCompare(b.title));
      } else {
        // AtoZ false ise Z-A'ya göre sırala.
        return filteredData.sort((a, b) => b.title.localeCompare(a.title));
      }
    }
    return [];
  };

  return (
    <div>
      <>
        {/* component */}
        <div className="text-gray-900 bg-gray-200">
          <div className="p-4 flex">
            <h1 className="text-3xl">Users</h1>
          </div>

          <Link to="/create">
            <button
              style={{ marginLeft: "10px", marginTop: "10px" }}
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Add +
            </button>
          </Link>

          <>
            {/* component */}
            {/* This is an example component */}
            <div>
              <>
                {/* component */}
                <div className="flex items-center justify-center">
                  <form action="" className="relative mx-auto flex">
                    <input
                      onChange={(e) =>
                        dispatch(updateSearchMenu(e.target.value))
                      }
                      type="search"
                      className="text-xs peer cursor-pointer relative z-10 h-8 w-10 rounded-lg border bg-transparent  pr-6 outline-none focus:rounded-r-none focus:w-full focus:cursor-text focus:border-taupeGray focus:px-3"
                      placeholder="Typing..."
                    />
                    <button className="absolute top-0 right-0 bottom-0 my-auto h-8 w-10 px-3 bg-slate-300 rounded-lg peer-focus:relative peer-focus:rounded-l-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width={20}
                        height={20}
                        viewBox="0 0 50 50"
                      >
                        <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
                      </svg>
                    </button>
                  </form>
                </div>
              </>

              <div className="p-5">
                <div className="flex justify-center items-baseline flex-wrap">
                  <div className="flex m-2">
                    <button
                      onClick={() => dispatch(sortAtoZ())}
                      className="text-base  rounded-r-none  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
  hover:bg-gray-200  
  bg-gray-100 
  text-gray-700 
  border duration-200 ease-in-out 
  border-gray-600 transition"
                    >
                      
                      <div className="flex leading-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-chevron-left w-5 h-5"
                        >
                          <polyline points="15 18 9 12 15 6" />
                        </svg>
                        A-Z
                      </div>
                    </button>
                    <button
                      onClick={() => dispatch(sortAtoZ())}
                      className="text-base  rounded-l-none border-l-0  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
  hover:bg-teal-200  
  bg-teal-100 
  text-teal-700 
  border duration-200 ease-in-out 
  border-teal-600 transition"
                    >
                      <div className="flex leading-5">
                        Z-A
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-chevron-right w-5 h-5 ml-1"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div>
                    </button>
                  </div>
                  <div className="flex m-2">
                    <button
                      className="text-base  rounded-r-none  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
  hover:bg-teal-700 hover:text-teal-100 
  bg-teal-100 
  text-teal-700 
  border duration-200 ease-in-out 
  border-teal-600 transition"
                    >
                      <div className="flex leading-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-save w-5 h-5 mr-1"
                        ></svg>
                        Low-high
                      </div>
                    </button>
                    <button
                      className="text-base  rounded-l-none rounded-r-none border-l-0 border-r-0  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
  hover:bg-teal-700 hover:text-teal-100 
  bg-teal-100 
  text-teal-700 
  border duration-200 ease-in-out 
  border-teal-600 transition"
                    >
                      <div className="flex leading-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-edit w-5 h-5 mr-1"
                        ></svg>
                        High-Low
                      </div>
                    </button>
                    <button
                      className="text-base  rounded-l-none  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
  hover:bg-teal-700 hover:text-teal-100 
  bg-teal-100 
  text-teal-700 
  border duration-200 ease-in-out 
  border-teal-600 transition"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </>

          <>{/* component */}</>

          <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <tbody>
                <tr className="border-b">
                  <th className="text-left p-3 px-5">Title</th>
                  <th className="text-left p-3 px-5">Description</th>
                  <th className="text-left p-3 px-5">Price</th>
                  <th className="text-left p-3 px-5">Delete</th>
                  <th className="text-left p-3 px-5">Edit</th>
                  <th className="text-left p-3 px-5">Detail</th>
                  <th />
                </tr>

                {getSortedData().map((el) => {
                  return (
                    <tr key={el._id} className="border-b">
                      <td className="p-3 px-5">{el.title}</td>
                      <td className="p-3 px-5">{el.description}</td>
                      <td className="p-3 px-5">{el.price}</td>
                      <td className="p-3 px-5">
                        <button
                          onClick={() => {
                            deleteProductById(el._id);
                            refetch();
                          }}
                          type="button"
                          className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Delete
                        </button>
                      </td>
                      <td className="p-3 px-5">
                        <Link to={`/edit/${el._id}`}>
                          <button
                            type="button"
                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            Edit
                          </button>
                        </Link>
                      </td>
                      <td className="p-3 px-5">
                        <Link to={`/detail/${el._id}`}>
                          <button
                            type="button"
                            className="text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            Detail
                          </button>
                        </Link>
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
