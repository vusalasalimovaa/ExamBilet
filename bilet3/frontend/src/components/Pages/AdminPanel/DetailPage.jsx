  import React from "react";
import { useParams } from "react-router-dom";
import { useGetMenuByIdQuery } from "../../../services/menu";

const Detail = () => {
  const { id } = useParams();
  const { data } = useGetMenuByIdQuery(id);
  console.log(data);
  return (
    <>
      <>
        {/* component */}
        <div className="flex min-h-screen items-center justify-center">
          <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img src={data?.image} className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {data?.title}
              </h4>
              <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                {data?.description}
              </p>

              <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                $ {data?.price}
              </p>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Detail;
