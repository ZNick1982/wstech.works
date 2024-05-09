import React, { ReactNode } from 'react';

type HeaderProps = {
  children: ReactNode | string;
};

const Header = ({ children }: HeaderProps) => (
  <div className="bg-gradient-to-b from-back via-back to-white w-full flex justify-center">
    <div className="max-w-screen-xl w-full flex px-4 flex-col md:flex md:justify-center relative">
      <div className="w-full my-16 md:my-24 lg:my-36 ">
        <h1 className='uppercase text-2xl text-blueMain md:text-3xl lg:text-4xl'>
          { children }
        </h1>
      </div>
      <hr className="border-blueMain divide-y-0" />
    </div>
  </div>
);

export default Header;
