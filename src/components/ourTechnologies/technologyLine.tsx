import React, { ReactNode } from 'react';

export type TechnologyLineProps = {
  children: ReactNode;
  techList: Array<string>;
  number: string;
};

const TechnologyLine = ({
  children,
  number,
  techList,
}: TechnologyLineProps) => (
  <div className="bg-white flex flex-col w-full">
    <div className="flex text-2xl font-light text-blueMain items-center my-4">
      <span className="text-orange">{number}</span>
      <span className="pl-4 md:w-1/3">{children}</span>
      <div className='hidden md:flex md:items-center'>
        {techList.map(s => <span className='mr-6 text-sm'>{s}</span>)}
      </div>
      <div className="flex-1"></div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
    </div>
    <hr className="border-back divide-y-0 opacity-70" />
  </div>
);

export default TechnologyLine;
