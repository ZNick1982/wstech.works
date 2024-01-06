import React from 'react';

const renderText = (text: string) => (
  <div className="flex w-full justify-center my-6 md:my-10">
    <span className="uppercase text-blueMain text-center text-4xl sm:text-6xl md:text-8xl">
      {text}
    </span>
  </div>
);

const SoftEngDesign = () => (
  <div className="bg-white w-full flex flex-col items-center relative">
    <div className="max-w-screen-xl w-full flex flex-col items-center justify-center px-4">
      {renderText('/* Software')}
      <hr className="hidden border-blueMain divide-y-0 w-full md:block" />
    </div>
    <div className="w-full bg-[url('/orangeSmallLogo.svg')] bg-repeat-x bg-center h-9 "></div>
    <div className="max-w-screen-xl w-full flex flex-col items-center justify-center px-4">
      <hr className="hidden border-blueMain divide-y-0 w-full md:block" />
      {renderText('// Enginering')}
      <hr className="hidden border-blueMain divide-y-0 w-full md:block" />
    </div>
    <div className="w-full bg-[url('/orangeSmallLogo.svg')] bg-repeat-x bg-center h-9 "></div>
    <div className="max-w-screen-xl w-full flex flex-col items-center justify-center px-4">
      <hr className="hidden border-blueMain divide-y-0 w-full md:block" />
      {renderText('Design */')}
      <hr className="border-blueMain divide-y-0 w-full" />
    </div>
  </div>
);

export default SoftEngDesign;
