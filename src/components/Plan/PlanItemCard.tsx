import { TPlan } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PlanItemCard = ({ plan }: { plan: TPlan }) => {
  return (
    <Link href={`/plans/${plan?._id}`} className="block">
      <div className="group relative h-[350px] md:h-[480px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
        {/* Full Image */}
        <Image
          src={plan?.imageUrl}
          alt={plan?.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="group-hover:scale-105 transition-transform duration-700"
          priority={false}
        />
        
        {/* Title at bottom */}
        <div className="absolute bottom-0 left-0 right-0 ">
          <div className="bg-gradient-to-t from-black/80 to-transparent p-4 rounded-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center group-hover:text-blue-300 transition-colors duration-300">
              {plan?.title}
            </h3>
          </div>
        </div>
        
        {/* Click indicator */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
            Click to view
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlanItemCard;