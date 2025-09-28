// components/WelcomeWrapper.tsx
'use client';

import { useState, useEffect } from 'react';
import ModalWelcome from './ModalWelcome';

export default function WelcomeWrapper() {
  // Set to false for testing
  const [hasVisited, setHasVisited] = useState<boolean>(false);

  useEffect(() => {
    //console.log('WelcomeWrapper mounted, hasVisited:', hasVisited);
    
    // Commented out sessionStorage logic for testing
    /*
    const visited = sessionStorage.getItem('hasVisited') === 'true';
    setHasVisited(visited);
    
    if (!visited) {
      sessionStorage.setItem('hasVisited', 'true');
    }
    */
  }, []);

  // console.log('WelcomeWrapper rendering, hasVisited:', hasVisited);

  // // Changed condition to make it more explicit
  // if (hasVisited) {
  //   console.log('Modal hidden because hasVisited is true');
  //   return null;
  // }

  //console.log('Rendering ModalWelcome');
  return (
    <ModalWelcome
      initialDelay={100}        // Reduced for testing
      displayDuration={3000}    // Increased for testing
      exitDuration={1000}
      title="Welcome to Our Site!"
      message="We're thrilled to have you here. Take a look around and discover what we have to offer."
    />
  );
}