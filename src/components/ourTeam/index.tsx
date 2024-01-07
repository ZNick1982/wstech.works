import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React, { ReactNode } from 'react';

type OurTeamProps = {
  children: ReactNode;
  image: StaticImport;
};

const OurTeam = ({ children, image }: OurTeamProps) => (
  <div className="bg-white bg-opacity-50 w-full flex flex-col items-center">
    <div className="max-w-screen-xl w-full flex flex-col md:flex-row px-4 mt-20">
      <div className="w-full md:w-1/2 text-blueMain text-left">
        <div className="flex justify-between">
          <h2 className="mb-10 text-4xl uppercase ">
            <span className="text-orange">Our</span>
            &nbsp;Team
          </h2>
        </div>
        <p className="pr-8 pb-10 font-light">{children}</p>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          className="w-full h-auto"
          src={image}
          width={100}
          height={100}
          alt=""
        />
      </div>
    </div>
  </div>
);

export default OurTeam;
