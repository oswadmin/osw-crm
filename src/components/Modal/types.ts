import { ANIMATIONS } from './animations';

export type AnimationType = keyof typeof ANIMATIONS;

export interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export interface ModalProps extends BaseModalProps {
  animation?: AnimationType;
  variant?: 'center' | 'fullscreen';
}