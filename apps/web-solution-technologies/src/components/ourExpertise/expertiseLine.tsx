import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export type ProjectData = {
  children: ReactNode;
  colorClass?: string;
};

const ExpertiseLine = ({ children, colorClass='text-secondBlue' }: ProjectData) => (
  <div className="bg-white flex flex-col w-full">
    <span className={`text-2xl ${colorClass}`}>{children}</span>
    <hr className="border-back divide-y-0 opacity-70" />
  </div>
);

export default ExpertiseLine;
