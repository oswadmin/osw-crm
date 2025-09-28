'use client';

import { useEffect, useState } from 'react';
import Modal from './Modal';

export const WelcomeModal = () => {
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
      animation="fade"
      className="bg-white rounded-lg p-6 max-w-md"
    >
      <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
      <p>Thank you for visiting our site...</p>
    </Modal>
  );
};