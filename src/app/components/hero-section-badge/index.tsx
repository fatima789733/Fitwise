import React from "react";

const Badge: React.FC = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="px-2.5 py-1.5 bg-white/5 rounded-[60px] inline-flex justify-center items-center gap-1.5">
        <div className="px-2.5 py-0.5 bg-blue-500 rounded-3xl flex justify-center items-center gap-2.5">
          <a href="#">
            <div className="justify-center text-white text-[16px] leading-tight">
              New
            </div>
          </a>
        </div>
        <div className="justify-center text-white text-base text-[16px] leading-normal">
          Fitness & Wellness App
        </div>
      </div>
    </div>
  );
};

export default Badge;
