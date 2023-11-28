import React, { useState } from 'react';
import { Box, Flex, Spacer, Show, Divider } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';

import Logo from '../logo';
import { Link } from '@chakra-ui/next-js';

export type NavBarProps = {
  items: Array<{
    text: string;
    href: string;
  }>;
  pl: Array<number> | number;
  pr: Array<number> | number;
};

const NavBar = ({ items, pl, pr }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <Box
        width={'100%'}
        position={isOpen ? 'fixed' : 'relative'}
        bgColor={'#D6D9E9'}
      >
        <Box pt={[8, 4, 4, 4]} pb={[8, 4, 4, 4]} pl={pl} pr={pr}>
          <Flex alignItems="center">
            <Link href={'/'}>
              <Logo />
            </Link>
            <Spacer />
            <Show above="md">
              <Flex alignItems="center">
                {items.map((el, i) => (
                  <Link
                    key={i}
                    href={el.href}
                    fontSize="xl"
                    ml={4}
                    mr={4}
                    color={'#323F90'}
                    _hover={{
                      textDecoration: 'none',
                      color: '#F4863B',
                    }}
                    onClick={handleLinkClick}
                  >
                    {el.text}
                  </Link>
                ))}
              </Flex>
            </Show>
            <Show below="md">
              {isOpen ? (
                <CloseIcon
                  w={6}
                  h={6}
                  color="#323F90"
                  pointer="cursor"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  sx={{
                    cursor: 'pointer',
                  }}
                />
              ) : (
                <HamburgerIcon
                  w={6}
                  h={6}
                  color="#323F90"
                  onClick={() => {
                    setIsOpen(true);
                  }}
                  sx={{
                    cursor: 'pointer',
                  }}
                />
              )}
            </Show>
          </Flex>
        </Box>
        <Box pl={pl} pr={pr}>
          <Divider borderColor={'#323F90'} />
        </Box>
        <Show below="md">
          <Box position={'relative'}>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  key="nav"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Flex
                    flexFlow={'column'}
                    w={'100%'}
                    justifyContent={'space-evenly'}
                    position={'absolute'}
                    top={0}
                    left={0}
                    bgColor={'#D6D9E9'}
                    pl={pl}
                    pr={pr}
                  >
                    {items.map((el, i) => (
                      <Link
                        key={i}
                        href={el.href}
                        fontSize="6xl"
                        mt={6}
                        mb={6}
                        color={'#323F90'}
                        _hover={{
                          textDecoration: 'none',
                          color: '#F4863B',
                        }}
                        onClick={handleLinkClick}
                      >
                        {el.text}
                      </Link>
                    ))}
                  </Flex>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        </Show>
      </Box>
    </>
  );
};

export default NavBar;
