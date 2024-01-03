'use client';
import NavBar from '../components/navbar';
import Header from '../components/header';
import Exclamation from '../components/exclamation';

export default function Home() {
  return (
    <main>
      <nav className="relative z-10">
        <NavBar
          items={[
            { text: 'Projects', href: '#projects' },
            { text: 'Approach', href: '#approach' },
            { text: 'Expertize', href: '#expertize' },
            { text: 'Contacts', href: '#contacts' },
          ]}
        />
      </nav>
      <header>
        <Header />
      </header>
      <section>
        <Exclamation>
          We are a creative agency with experienced professionals and promising
          talents create products that bring impressive results for our clients.
          Every project is implemented comprehensively — from concept to
          production.
        </Exclamation>
      </section>
    </main>
  );
}
