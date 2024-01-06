import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Transition } from '@headlessui/react';

import Logo from '../logo';
import Link from 'next/link';

export type NavBarProps = {
  items: Array<{
    text: string;
    href: string;
  }>;
};

const NavBar = ({ items }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="bg-back w-full flex justify-center">
      <div className="max-w-screen-xl w-full">
        <div className="px-4 pt-5 pb-5 flex items-center">
          <Link href={'/'}>
            <Logo />
          </Link>
          <div className="flex-1" />
          <ul className="hidden md:flex md:items-center">
            {items.map((el, i) => (
              <li key={i} className="px-3 text-lg">
                <Link
                  href={el.href}
                  onClick={handleLinkClick}
                  className="text-blueMain hover:text-orange uppercase"
                >
                  {el.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className="relative inline-block text-left md:hidden">
            <div className="cursor-pointer">
              {isOpen ? (
                <XMarkIcon
                  className="w-8 h-8 stroke-blueMain pr-1"
                  onClick={() => setIsOpen(false)}
                />
              ) : (
                <Bars3Icon
                  className="w-8 h-8 stroke-blueMain pr-1"
                  onClick={() => setIsOpen(true)}
                />
              )}
            </div>
          </div>
        </div>
        <div className="px-4">
          <hr className="border-blueMain divide-y-0" />
        </div>
        <Transition
          className="md:hidden"
          show={isOpen}
          as="div"
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          {isOpen ? (
            <div className="absolute right-0 w-full origin-top-right">
              <div className="px-4 py-1 flex flex-col bg-back">
                {items.map((el, i) => (
                  <Link
                    key={i}
                    href={el.href}
                    onClick={handleLinkClick}
                    className="text-blueMain hover:text-orange text-3xl my-5 uppercase"
                  >
                    {el.text}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </Transition>
      </div>
    </div>
  );
};

export default NavBar;
