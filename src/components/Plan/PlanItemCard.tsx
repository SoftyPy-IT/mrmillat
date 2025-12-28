import { TPlan } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "./plan.css";

const PlanItemCard = ({ plan }: { plan: TPlan }) => {
  return (
    <div
      key={plan?._id}
      className="md:w-96 h-full rounded-xl shadow-lg hover:bg-gray-50 bg-white border m-2 md:m-0"
    >
      <Link href={`/plans/${plan?._id}`}>
        <div className="">
          <div className="overflow-hidden">
            <Image
              src={plan?.imageUrl}
              alt="Plan Image"
              width={300}
              height={250}
              className="w-full duration-500  hover:scale-110 h-[250px] rounded-lg object-cover shadow-md"
            />
          </div>

          <div className="mb-5 p-3 md:p-5  h-full md:h-[150px]">
            <h2 className="text-lg font-bold text-blue-950">
              {plan?.title.length > 80
                ? `${plan?.title?.slice(0, 80)}...`
                : plan?.title}
            </h2>
            <p className="text-sm ">
              {plan?.shortDescription?.slice(0, 80)}
              <button className="text-blue-500 rounded">...আরও-দেখুন</button>
            </p>
             <div className=" text-sm opacity-80 flex flex-row justify-between item-center text-black my-3">
              <div className="flex  gap-1 items-center">
                <span>
                  <FaCalendar />
                </span>
                <p>
                  <strong></strong>
                  {new Date(plan?.date).toDateString()}
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <span>
                  <FaLocationDot />
                </span>
                <p>
                  <strong></strong>
                  {plan?.location}
                </p>
              </div>
            </div> 

            <div>
              
            </div>
          </div>
        </div>
      </Link>
      
    </div>
  );
};

export default PlanItemCard;
