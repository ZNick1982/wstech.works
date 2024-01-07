'use client';
import Image from 'next/image';
import NavBar from '../components/navbar';
import Header from '../components/header';
import Exclamation from '../components/exclamation';
import SoftEngDesign from '../components/softEngDesign';
import OurProjects, { ProjectCard } from '../components/ourProjects';
import OurApproach, { ApproachCard } from '../components/ourApproach';
import OurExpertise, { ExpertiseLine } from '../components/ourExpertise';
import OurTechnologies, { TechnologyLine } from '../components/ourTechnologies';
import SoftDevDoneRight, { DevLine } from '../components/softDevDoneRight';
import OurTeam from '../components/ourTeam';
import CompassIcon from '../../public/icons/compass.svg';
import ChartIcon from '../../public/icons/chart.svg';
import HorseIcon from '../../public/icons/horse.svg';
import PaperIcon from '../../public/icons/paper.svg';
import RocketIcon from '../../public/icons/rocket.svg';
import WandIcon from '../../public/icons/wand.svg';
import TeamImage from '../../public/teamImage.png';

export default function Home() {
  return (
    <main>
      <nav className="relative z-10">
        <NavBar
          items={[
            { text: 'Projects', href: '#projects' },
            { text: 'Approach', href: '#approach' },
            { text: 'Expertise', href: '#expertise' },
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
            icon={<Image src={CompassIcon} alt="" />}
            number="1"
            title="Acquaintance"
            text="Share your idea and requirements with us, and we will prepare a proposal outlining the recommended team, timeline, and budget."
          />
          <ApproachCard
            icon={<Image src={HorseIcon} alt="" />}
            number="2"
            title="Strategy"
            text="Defining a suitable strategy for your companies website."
          />
          <ApproachCard
            icon={<Image src={PaperIcon} alt="" />}
            number="3"
            title="Structure"
            text="Collaboratively, we create a sitemap and wireframes for the main screens."
          />
          <ApproachCard
            icon={<Image src={WandIcon} alt="" />}
            number="4"
            title="Design"
            text="Let the creativity flow! Our skilled team will explore two or three intriguing and distinctive design concepts for your homepage."
          />
          <ApproachCard
            icon={<Image src={RocketIcon} alt="" />}
            number="5"
            title="Development"
            text="Once the design is settled, we proceed to develop all the screens for the web, ensuring a consistent style, interactivity, animations, and responsiveness."
          />
          <ApproachCard
            icon={<Image src={ChartIcon} alt="" />}
            number="6"
            title="Support"
            text="During the handoff, we provide detailed instructions for updating and troubleshooting your brand new website."
          />
        </OurApproach>
      </section>
      <section id="expertise">
        <OurExpertise>
          <ExpertiseLine colorClass="text-back opacity-80">
            Capabilities
          </ExpertiseLine>
          <ExpertiseLine colorClass="text-secondBlue">
            Landing Pages
          </ExpertiseLine>
          <ExpertiseLine colorClass="text-secondBlue">
            Marketing Websites
          </ExpertiseLine>
          <ExpertiseLine colorClass="text-secondBlue">
            Membership Websites
          </ExpertiseLine>
          <ExpertiseLine colorClass="text-secondBlue">
            E-Commerce Platforms
          </ExpertiseLine>
          <ExpertiseLine colorClass="text-secondBlue">
            Mobile Apps
          </ExpertiseLine>
          <div className="w-full py-8 px-4 md:px-10 md:py-20">
            <p className="uppercase text-2xl text-blueMain">
              Each project is implemented{' '}
              <span className="opacity-30">
                comprehensively - from concept to
              </span>{' '}
              production. We believe <span className="opacity-30">that</span>{' '}
              our ideas <span className="opacity-30">make communication</span>{' '}
              brand <span className="opacity-30">with</span> a consumer light,
              emotionally deep, <span className="opacity-30">attracting</span>{' '}
              attention.
            </p>
          </div>
        </OurExpertise>
      </section>
      <section>
        <OurTechnologies>
          <TechnologyLine
            number="1"
            techList={['PHP', 'Python', 'Java', 'Golang', '.NET', 'Node.JS']}
          >
            Backend
          </TechnologyLine>
          <TechnologyLine number="2" techList={['React', 'Angular', 'Vue']}>
            Frontend
          </TechnologyLine>
          <TechnologyLine
            number="3"
            techList={['React Native', 'Kotlin', 'Swift', 'Cordova']}
          >
            IOS/Android
          </TechnologyLine>
          <TechnologyLine
            number="4"
            techList={['Figma', 'Adobe Photoshop', 'Adobe XD', 'Sketch']}
          >
            Design
          </TechnologyLine>
        </OurTechnologies>
      </section>
      <section>
        <SoftDevDoneRight>
          <DevLine number="/01" title="Real-Time Communication">
            Our developers work within your nearshore time zone to allow for
            real-time collaboration. We work to achieve a true "branch location"
            feel. We infuse accountability and transparency into our model with
            regular management and progress reports.
          </DevLine>
          <DevLine number="/02" title="Scalable Business Model">
            We work with you to find the areas that are best suited to bring you
            value. Based on your needs, our flexible business model gives you
            the option to increase or decrease the size of your dedicated team
            at any point of the lifecycle.
          </DevLine>
          <DevLine number="/03" title="You Own The Source Code">
            Most software companies insist on owning their own source codes to
            prevent their clients from seeking out other vendors or tools. Under
            our agreement, you are the sole proprietor of the source code and
            intellectual property.
          </DevLine>
        </SoftDevDoneRight>
      </section>
      <section>
        <OurTeam image={TeamImage}>
          Welcome to our web studio's powerhouse team, where brilliant
          developers and creative designers converge to shape the digital
          landscape through exceptional website and mobile app development. Our
          developers, armed with the latest technologies and programming
          expertise, transform ideas into seamless, high-performance websites
          and apps that exceed expectations. Meanwhile, our imaginative
          designers craft captivating user interfaces and visually stunning
          experiences, ensuring your digital presence leaves a lasting
          impression. Together, we synergize our talents to deliver innovative
          and user-centric solutions, making your online journey an
          unforgettable one.
        </OurTeam>
      </section>
    </main>
  );
}
