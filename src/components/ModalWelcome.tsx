// components/ModalWelcome.tsx
'use client';

import { siteConfig } from '@/config/siteConfig';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalWelcomeProps {
  initialDelay?: number;
  displayDuration?: number;
  exitDuration?: number;
  message?: string;
  title?: string;
}

export default function ModalWelcome({
  initialDelay = 0,
  displayDuration = 1000,
  exitDuration = 1000,
}: ModalWelcomeProps) {

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLeaving, setIsLeaving] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    //console.log('ModalWelcome mounted');
    setIsMounted(true);
    
    const showTimer = setTimeout(() => {
      //console.log('Setting isVisible to true');
      setIsVisible(true);
    }, initialDelay);

    const leaveTimer = setTimeout(() => {
      //console.log('Starting leave animation');
      setIsLeaving(true);
    }, initialDelay + displayDuration);

    const closeTimer = setTimeout(() => {
      //console.log('Closing modal');
      setIsVisible(false);
    }, initialDelay + displayDuration + exitDuration);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(leaveTimer);
      clearTimeout(closeTimer);
    };
  }, [initialDelay, displayDuration, exitDuration]);

  //console.log('ModalWelcome rendering:', { isMounted, isVisible, isLeaving });

  if (!isMounted) {
    //console.log('Modal not mounted yet');
    return null;
  }

  if (!isVisible) {
    //console.log('Modal not visible');
    return null;
  }

  const modalContent = (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-blue transform transition-all duration-1000 ease-in-out
          ${!isLeaving ? 'opacity-100' : 'animate-slide-down'}
          ${isVisible ? 'animate-rise-up' : ''}
      `}
    >
      <div>
        <Image
          src = {siteConfig.OSW_IMG.LOGO}
          alt = ""
          width={600}
          height={600}
          className="w-40 h-40"
        />
      </div>
    </div>
  );

  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    //console.log('Not in browser environment');
    return null;
  }

  //console.log('Rendering modal portal');
  return createPortal(modalContent, document.body);
};

