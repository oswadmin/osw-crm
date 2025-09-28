'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ANIMATIONS } from './animations';
import { ModalProps } from './types';
import { cn } from '@/lib/utils';


const Modal = ({ 
  isOpen, 
  onClose, 
  children, 
  className,
  animation = 'scale',
  variant = 'center'
}: ModalProps) => {
  const variants = ANIMATIONS[animation];
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          
          <motion.div
            {...variants}
            className={cn(
              "fixed z-50",
              variant === 'fullscreen' ? 'inset-0' : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
              className
            )}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
