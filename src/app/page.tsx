'use client';
import NavBar from '../components/navbar';
import Header from '../components/header';

const pagePaddings = [4, 5, 5, 32];

export default function Home() {
  return (
    <main>
      <nav className='relative z-10' >
        <NavBar
          items={[
            { text: 'Projects', href: '#projects' },
            { text: 'Approach', href: '#approach' },
            { text: 'Expertize', href: '#expertize' },
            { text: 'Contacts', href: '#contacts' },
          ]}
        />
      </nav>
      <header
        // bgGradient={'linear(to-b, brand.back 50%, brand.white 100%)'}
      >
        <Header />
      </header>
    </main>
  );
}
