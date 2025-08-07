// src/components/ParallaxWrapper.tsx
"use client"; // ¡Directiva crucial! Marca este componente como uno del lado del cliente.

import { ParallaxProvider } from 'react-scroll-parallax';

type Props = {
  children: React.ReactNode;
};

const ParallaxWrapper: React.FC<Props> = ({ children }) => {
  return (
    <ParallaxProvider>
      {children}
    </ParallaxProvider>
  );
};

export default ParallaxWrapper;