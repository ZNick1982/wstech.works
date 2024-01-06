import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export type ProjectData = {
  number: string;
  icon: ReactNode;
  title: string;
  text: string;
};

const ProjectCard = ({ icon, title, text, number }: ProjectData) => (
  <div className="bg-white flex flex-col border-back border rounded-2xl overflow-hidden w-full min-h-fit sm:w-1/2-0.5rem xl:w-1/3-0.3rem py-6 px-9">
    <div className='flex items-center justify-between w-full'>
      {icon}
      <span className='text-secondBlue opacity-40 text-5xl font-light'>{number}</span>
    </div>
    <div className='my-4'>
      <h3 className='text-blueMain text-2xl'>{title}</h3>
    </div>
    <p className='text-secondBlue'>{text}</p>
  </div>
);

export default ProjectCard;
