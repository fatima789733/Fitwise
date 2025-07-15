"use client";

import React from "react";
import Image from "next/image";
import StatCard from "../stat-card";

const Diet: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-white/10 rounded-2xl px-6 gap-x-4 w-[260px] h-[98px]">
      <StatCard
        icon={
          <Image
            src="/carbs.png"
            alt="Carbs"
            width={28}
            height={28}
            className="object-contain"
          />
        }
        value="125g"
        label="Carbs"
        valueColor="text-[#FF3C3C]"
        labelColor="text-white/60"
        layout="vertical"
        className="bg-transparent w-24"
      />
      <StatCard
        icon={
          <Image
            src="/protien.png"
            alt="Protein"
            width={28}
            height={28}
            className="object-contain"
          />
        }
        value="15g"
        label="Protein"
        valueColor="text-[#4395FF]"
        labelColor="text-white/60"
        layout="vertical"
        className="bg-transparent w-24"
      />
      <StatCard
        icon={
          <Image
            src="/fats.png"
            alt="Fat"
            width={28}
            height={28}
            className="object-contain"
          />
        }
        value="5g"
        label="Fat"
        valueColor="text-[#FF3C3C]"
        labelColor="text-white/60"
        layout="vertical"
        className="bg-transparent w-24"
      />
    </div>
  );
};

export default Diet;
