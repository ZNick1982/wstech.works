'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../button';

const Header = () => {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-b from-back via-back to-white w-full flex justify-center">
      <div className="max-w-screen-xl w-full flex flex-col-reverse md:flex md:justify-center relative">
        <Button
          className="md:hidden flex justify-center px-4 mt-10 mb-32"
          onClick={() => {
            router.push('/contacts');
          }}
        >
          HIRE US
        </Button>
        <div className="px-4 pt-5 pb-5 flex justify-center md:justify-end md:absolute md:top-0 md:right-0">
          <Image
            src={'/headerImage.svg'}
            width={100}
            height={100}
            className="w-full md:w-1/2"
            alt=""
          />
        </div>
        <div className="px-4 pt-5 flex flex-col text-center z-10 md:top-0 md:text-left md:w-1/2 md:h-full md:pt-10">
          <h1 className="text-2xl font-medium leading-normal sm:text-3xl md:text-3xl md:leading-normal text-blueMain ">
            WE BUILD HIGH QUALITY WEB AND MOBILE APPLICATIONS
          </h1>
          <Button
            className="hidden md:block my-20 max-w-xs"
            onClick={() => {
              router.push('/contacts');
            }}
          >
            HIRE US
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
