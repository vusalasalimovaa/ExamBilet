import React, { useState } from "react";
import {
  useGetAllProductQuery,
  usePostProductMutation,
} from "../../../services/products";

const CreateMenu = () => {
  const [postProduct] = usePostProductMutation();
  const { refetch } = useGetAllProductQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.title.value);

    let obj = {
      title: e.target.title.value,
      description: e.target.description.value,
      price: e.target.price.value,
    };

    await postProduct({ obj });
    refetch();
  };
  return (
    <>
      <>
        {/* component */}
        <div className="flex items-center justify-center p-12">
          {/* Author: FormBold Team */}
          {/* Learn More: https://formbold.com */}
          <div className="mx-auto w-full max-w-[550px]">
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  name="name"
                  placeholder="Title"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Description
                </label>
                <input
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

export default CreateMenu;
