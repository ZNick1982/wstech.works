'use client';
import NavBar from '../components/navbar';
import Header from '../components/header';
import Exclamation from '../components/exclamation';
import SoftEngDesign from '../components/softEngDesign';
import OurProjects from '../components/ourProjects';
import ProjectCard from '../components/ourProjects/projectCard';

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
      <section>
        <SoftEngDesign />
      </section>
      <section id="projects">
        <OurProjects>
          <ProjectCard
            name="Weave Works"
            type="Website maintenance and developement"
            url="https://weave.works"
            imageUrl="/weaveworks.png"
          />
          <ProjectCard
            name="Fake.REST"
            type="SAAS"
            url="https://fake.rest"
            imageUrl="/fakerest.png"
          />
          <ProjectCard
            name="Panda Flow"
            type="PAAS"
            url="https://www.pandaflow.io"
            imageUrl="/pandaflow.png"
          />
        </OurProjects>
      </section>
    </main>
  );
}
