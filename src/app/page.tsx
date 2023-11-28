'use client';
import { Box } from '@chakra-ui/react';
import NavBar from '../components/navbar';

export default function Home() {
  return (
    <main>
      <nav>
        <Box bg="#D6D9E9">
          <NavBar
            pl={[4, 5, 5, 32]} 
            pr={[4, 5, 5, 32]}
            items={[
              { text: 'Projects', href: '#projects' },
              { text: 'Approach', href: '#approach' },
              { text: 'Expertize', href: '#expertize' },
              { text: 'Contacts', href: '#contacts' },
            ]}
          />
        </Box>
      </nav>
      <div>
        Other text!!!
      </div>
    </main>
  );
}
