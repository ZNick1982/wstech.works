import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export type ProjectData = {
  name: string;
  type: string;
  url: string;
  imageUrl: string;
};

const ProjectCard = ({ name, type, url, imageUrl }: ProjectData) => (
  <div className="relative flex rounded-2xl aspect-video overflow-hidden w-full h-auto border-back border sm:w-1/2-1rem 2xl:w-1/2-2rem">
    <Image src={imageUrl} className="w-full h-auto absolute" width={100} height={100} alt=""/>
    <div className="bottom-5 left-0 flex flex-col absolute bg-greyBlue p-2 w-3/4 rounded-r-lg">
      <Link href={url} className='text-blueMain hover:underline'>{name}</Link>
      <span className='text-xs'>{type}</span>
    </div>
  </div>
);

export default ProjectCard;
