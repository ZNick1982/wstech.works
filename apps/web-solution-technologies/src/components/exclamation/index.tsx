import React from 'react';

export type ExclamationProps = {
  children: React.ReactNode;
  // className: string;
};

const Exclamation = ({ children }: ExclamationProps) => (
  <div className="bg-white w-full flex justify-center relative">
    <div className="max-w-screen-xl w-full flex items-center justify-center">
      <div className="px-4">
        <hr className="border-blueMain divide-y-0" />
        <div className="my-4 md:my-12 md:mx-20">
          <span className="uppercase text-blueMain text-left text-lg">{children}</span>
        </div>
        <hr className="border-blueMain divide-y-0" />
      </div>
    </div>
  </div>
);

export default Exclamation;
