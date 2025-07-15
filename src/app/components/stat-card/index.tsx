import React from "react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  description?: string;
  className?: string;
  valueColor?: string; // ✅ ADD THIS
  labelColor?: string; // ✅ ADD THIS
  layout?: "vertical" | "horizontal"; // ✅ ADD THIS
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  value,
  label,
  description,
  className = "",
  valueColor = "text-white",
  labelColor = "text-slate-400",
  layout = "vertical",
}) => {
  return (
    <div className={` p-4 ${className}`}>
      <div
        className={`flex ${
          layout === "vertical"
            ? "flex-col items-center text-center"
            : "items-center space-x-3"
        }`}
      >
        <div className=" flex items-center justify-center ">{icon}</div>
        <div className={`text-[16px] font-semibold mb-1 ${valueColor}`}>
          {value}
        </div>
        <div className={`text-[9.72px] ${labelColor}`}>{label}</div>
        {description && <div className=" text-sm mt-1">{description}</div>}
      </div>
    </div>
  );
};

export default StatCard;
