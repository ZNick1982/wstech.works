'use client';
import NavBar from '../components/navbar';
import Header from '../components/header';
import Exclamation from '../components/exclamation';
import SoftEngDesign from '../components/softEngDesign';
import OurProjects, { ProjectCard } from '../components/ourProjects';
import OurApproach, { ApproachCard } from '../components/ourApproach';
import CompassIcon from '../../public/icons/compass.svg';
import ChartIcon from '../../public/icons/chart.svg';
import HorseIcon from '../../public/icons/horse.svg';
import PaperIcon from '../../public/icons/paper.svg';
import RocketIcon from '../../public/icons/rocket.svg';
import WandIcon from '../../public/icons/wand.svg';
import Image from 'next/image';

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
      <section id="approach">
        <OurApproach>
          <ApproachCard
            icon={<Image src={CompassIcon} alt=""/>}
            number="1"
            title="Acquaintance"
            text="Share your idea and requirements with us, and we will prepare a proposal outlining the recommended team, timeline, and budget."
          />
          <ApproachCard
            icon={<Image src={HorseIcon} alt=""/>}
            number="2"
            title="Strategy"
            text="Defining a suitable strategy for your companies website."
          />
          <ApproachCard
            icon={<Image src={PaperIcon} alt=""/>}
            number="3"
            title="Structure"
            text="Collaboratively, we create a sitemap and wireframes for the main screens."
          />
          <ApproachCard
            icon={<Image src={WandIcon} alt=""/>}
            number="4"
            title="Design"
            text="Let the creativity flow! Our skilled team will explore two or three intriguing and distinctive design concepts for your homepage."
          />
          <ApproachCard
            icon={<Image src={RocketIcon} alt=""/>}
            number="5"
            title="Development"
            text="Once the design is settled, we proceed to develop all the screens for the web, ensuring a consistent style, interactivity, animations, and responsiveness."
          />
          <ApproachCard
            icon={<Image src={ChartIcon} alt=""/>}
            number="6"
            title="Support"
            text="During the handoff, we provide detailed instructions for updating and troubleshooting your brand new website."
          />
        </OurApproach>
      </section>
    </main>
  );
}
