import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useGetMenuByIdQuery,
  usePutMenuByIdMutation,
} from "../../../services/menu";

const Edit = () => {
  //   const { id } = useParams();
  //   const { data } = useGetMenuByIdQuery(id);
  //   console.log(data);
  //   const [item, setItem] = useState({
  //     title: "",
  //     description: "",
  //     price: "",
  //     image: "",
  //   });

  //   const handleChange = (e) => {
  //     setItem({ ...item, [e.target.name]: e.target.value });
  //   };

  //   useEffect(() => {
  //     if (data) {
  //       setItem({
  //         ...item,
  //         id:id,
  //         title: data.title,
  //         description: data.description,
  //         price: data.price,
  //         image: data.image,
  //       });
  //     }
  //   }, [data]);

  //   const [putMenuById] = usePutMenuByIdMutation();

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     await putMenuById(item);
  //   };

  return (
    <>
      <>
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px]">
            <form>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  //   value={item.title}
                  //   onChange={handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  //   value={item.description}
                  //   onChange={handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  //   value={item.price}
                  //   onChange={handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Image
                </label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  //   value={item.image}
                  //   onChange={handleChange}
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

export default Edit;
