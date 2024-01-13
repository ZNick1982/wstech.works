import React, { ReactNode } from 'react';
import ExpertiseLine from './expertiseLine';

type OurExpertiseProps = {
  children: ReactNode;
};

const OurExpertise = ({ children }: OurExpertiseProps) => (
  <div className="bg-white w-full flex flex-col items-center relative">
    <div className="max-w-screen-xl w-full flex flex-col px-4">
      <div className="flex justify-between">
        <h2 className="mt-20 mb-10 text-4xl uppercase text-blueMain text-left">
          <span className="text-orange">Our</span>
          &nbsp;Expertise
        </h2>
        <svg
          width="40"
          height="40"
          viewBox="0 0 82 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-20"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.83339 71.6417V1.974H2.27783V79.4184H79.7223V74.8629H10.0546L79.0549 5.86242L75.8339 2.64115L6.83339 71.6417Z"
            fill="#323F90"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-4">
        {children}
      </div>
    </div>
  </div>
);

export default OurExpertise;
export { ExpertiseLine };
