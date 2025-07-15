// components/PhoneMockup.tsx
import React from "react";
import Image from "next/image";

const PhoneMockup: React.FC = () => {
  return (
    <div>
      <Image
        src="/iPhone.png"
        alt="iPhone Mockup"
        width={434}
        height={405}
        priority
        className="cursor-pointer"
      />
    </div>
  );
};

export default PhoneMockup;
