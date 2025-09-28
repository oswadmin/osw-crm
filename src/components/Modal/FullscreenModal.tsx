'use client';

import { useEffect, useState } from 'react';
import Modal from './Modal';

export const FullscreenModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Check if modal has been shown this session
    const hasShown = sessionStorage.getItem('welcomeModalShown');
    if (!hasShown) {
      setIsOpen(true);
      sessionStorage.setItem('welcomeModalShown', 'true');
    }
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      animation="slideUp"
      variant="fullscreen"
      className="bg-white p-6"
    >
      <div className="h-full flex flex-col">
        <button 
          onClick={() => setIsOpen(false)}
          className="self-end p-2"
        >
          Close
        </button>
            
      </div>
    </Modal>
  );
};