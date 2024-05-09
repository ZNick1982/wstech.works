import Link from 'next/link';
import React, { ReactNode } from 'react';

type HeroLinkProps = {
  url: string;
  children: ReactNode;
};

const HeroLink = ({ url, children }: HeroLinkProps) => (
  <div className="bg-white bg-opacity-50 w-full flex flex-col items-center">
    <div className="max-w-screen-xl w-full flex px-4 my-20">
      <Link href={url} className='w-full flex justify-between items-center text-blueMain hover:text-orange'>
        <div className="uppercase text-4xl md:text-6xl lg:text-8xl">{children}</div>
        <div className="w-1/6">
          <svg
            className="w-full stroke-blueMain hover:stroke-orange"
            width="172"
            height="110"
            viewBox="0 0 172 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_186_3685)">
              <mask
                id="mask0_186_3685"
                style={{ maskType: 'luminance' }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="172"
                height="110"
              >
                <path
                  d="M0.510254 0.9748L0.510254 109.094L171.49 109.094V0.9748L0.510254 0.9748Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_186_3685)">
                <path
                  d="M0.510254 54.907H161.432"
                  strokeWidth="11.3148"
                />
                <path
                  d="M111.144 5.10791L160.939 54.9037L111.144 104.699"
                  strokeWidth="11.3148"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_186_3685">
                <rect
                  width="170.98"
                  height="108.119"
                  fill="white"
                  transform="translate(0.510254 0.940186)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </Link>
    </div>
  </div>
);

export default HeroLink;
