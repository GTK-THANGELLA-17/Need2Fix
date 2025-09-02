
import { useState } from 'react';

export const useChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openChatbot = () => setIsOpen(true);
  const closeChatbot = () => setIsOpen(false);
  const toggleChatbot = () => setIsOpen(!isOpen);

  return {
    isOpen,
    openChatbot,
    closeChatbot,
    toggleChatbot
  };
};
