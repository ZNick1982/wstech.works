import React, { ReactNode } from 'react';

export type DevLineProps = {
  children: ReactNode;
  title: string;
  number: string;
};

const DevLine = ({ children, number, title }: DevLineProps) => (
  <div className="bg-white flex flex-col w-full">
    <div className="flex text-base font-light text-blueMain my-4">
      <div className='flex flex-col w-1/2 md:flex-row'>
        <span className="text-orange w-full md:w-1/2">{number}</span>
        <span className="w-full md:w-1/2 text-2xl">{title}</span>
      </div>
      <p className='w-1/2'>{children}</p>
    </div>
    <hr className="border-back divide-y-0 opacity-70" />
  </div>
);

export default DevLine;
