// app/providers.tsx
'use client';

import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';

const colors = {
  brand: {
    // 900: '#1a365d',
    // 800: '#153e75',
    // 700: '#2a69ac',
  },
};

export const theme = extendTheme({ colors });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
}
