import React from 'react';
import Image from 'next/image';
import Button from '../button';

const Header = () => (
  <div className="bg-gradient-to-b from-back via-back to-white w-full flex justify-center relative">
    <div className="max-w-screen-2xl w-full flex flex-col-reverse md:flex-col">
      <Button className="md:hidden flex justify-center m-10">HIRE US</Button>
      <div className="px-4 lg:px-32 pt-5 pb-5 flex justify-center md:justify-end">
        <Image
          src={'/headerImage.svg'}
          width={100}
          height={100}
          className="w-full md:w-1/2"
          alt=""
        />
      </div>
      <div className="px-4 lg:px-32 pt-5 flex flex-col text-center md:absolute md:top-0 md:text-left md:w-1/2 md:h-full md:pt-10">
        <h1 className="text-xl font-medium leading-normal sm:text-3xl md:text-3xl md:leading-normal text-blueMain ">
          WE BUILD HIGH QUALITY WEB AND MOBILE APPLICATIONS
        </h1>
        <Button className="hidden md:block mt-20">HIRE US</Button>
      </div>
    </div>
  </div>
);

export default Header;
