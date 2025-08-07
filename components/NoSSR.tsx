'use client';

import dynamic from 'next/dynamic';
import { ComponentType, ReactNode } from 'react';

interface NoSSRProps {
  children: ReactNode;
}

const NoSSR: ComponentType<NoSSRProps> = ({ children }) => {
  return <>{children}</>;
};

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
});
