import React, { useState } from "react";
import {
  useGetProductByIdQuery,
  usePatchProductByIdMutation,
} from "../../../services/products";
import { useParams } from "react-router-dom";

const EditMenu = () => {
  const [item, setItem] = useState({
    title: "",
    description: "",
    price: "",
  });
  const { id } = useParams();
  const { data } = useGetProductByIdQuery(id);
  console.log(data);
  return (
    <>
      <>
        {/* component */}
        <div className="flex items-center justify-center p-12">
          {/* Author: FormBold Team */}
          {/* Learn More: https://formbold.com */}
          <div className="mx-auto w-full max-w-[550px]">
            <form>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  name="name"
                  value={item.title}
                  placeholder="Title"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Description
                </label>
                <input
                  value={item.description}
                  id="description"
                  type="text"
                  name="text"
                  placeholder="Description"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Price
                </label>
                <input
                  value={item.price}
                  id="price"
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div>
                <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    </>
  );
};

export default EditMenu;
