import React, { useState } from 'react';

import Logo from '../logo';
import Link from 'next/link';

const Footer = () => (
  <div className="bg-white w-full flex justify-center">
    <div className="max-w-screen-xl w-full">
      <div className="px-4">
        <hr className="border-blueMain divide-y-0" />
      </div>
      <div className="px-4 pt-5 pb-5 flex justify-between text-blueMain">
        <Link href={'/'}>
          <Logo className="w-40" />
        </Link>
        <div className="flex flex-col">
          {/* <Link href={'tel:+12368184560'} className="hover:text-orange">
            +1 236 818 4560
          </Link> */}
          <Link
            href={'mailto:nickzherdev@gmail.com'}
            className="hover:text-orange"
          >
            nickzherdev@gmail.com
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
