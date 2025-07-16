"use client";

import React from "react";
import Image from "next/image";
import StatCard from "../../stat-card";

const Essentials: React.FC = () => {
  return (
    <div className="flex justify-center  items-center bg-white/10 rounded-2xl px-12 gap-x-8 w-[400px] h-[98px]">
      <StatCard
        icon={
          <Image
            src="/weight.png"
            alt="weight"
            width={28}
            height={28}
            className="object-contain"
          />
        }
        value="78g"
        label="Weight"
        valueColor="text-white"
        labelColor="text-white/60"
        layout="vertical"
        className="bg-transparent w-24"
      />
      <StatCard
        icon={
          <Image
            src="/protien.png"
            alt="muscle"
            width={28}
            height={28}
            className="object-contain"
          />
        }
        value="30g"
        label="Muscle"
        valueColor="text-white"
        labelColor="text-white/60"
        layout="vertical"
        className="bg-transparent w-24"
      />
      <StatCard
        icon={
          <Image
            src="/fatt.png"
            alt="fat"
            width={28}
            height={28}
            className="object-contain"
          />
        }
        value="10g"
        label="Fat"
        valueColor="text-white"
        labelColor="text-white/60"
        layout="vertical"
        className="bg-transparent w-24"
      />
      <StatCard
        icon={
          <Image
            src="/water.png"
            alt="water"
            width={28}
            height={28}
            className="object-contain"
          />
        }
        value="5g"
        label="Water"
        valueColor="text-white"
        labelColor="text-white/60"
        layout="vertical"
        className="bg-transparent w-24"
      />
    </div>
  );
};

export default Essentials;
