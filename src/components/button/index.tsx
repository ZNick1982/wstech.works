import React, { MouseEventHandler } from 'react';

export type ButtonProps = {
  children: React.ReactNode;
  className: string;
  onClick: MouseEventHandler;
};

const Button = ({ children, className, onClick }: ButtonProps) => (
  <div className={className}>
    <button
      className="w-fit text-xl text-white bg-orange uppercase flex items-center rounded-full py-4 px-14"
      onClick={onClick}
    >
      {children}
    </button>
  </div>
);

export default Button;
