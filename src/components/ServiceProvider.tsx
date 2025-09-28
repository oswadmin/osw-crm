'use client';

import { Service } from '@/lib/types';
import { createContext, useContext, ReactNode } from 'react';


// Define the shape of your context
const ServicesContext = createContext<Service[] | undefined>(undefined);

// Define the provider component
export function ServicesProvider({ services, children }: { services: Service[], children: ReactNode }) {
  return (
    <ServicesContext.Provider value={services}>
      {children}
    </ServicesContext.Provider>
  );
}

// Custom hook to consume the context
export function useServices() {
  const context = useContext(ServicesContext);
  if (context === undefined) {
    throw new Error('useServices must be used within a ServicesProvider');
  }
  return context;
}