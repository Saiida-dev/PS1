import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatbotFloating.css';

const ChatbotFloating = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/chatbot');
  };

  return (
    <div className="chatbot__floating" onClick={handleClick}>
      💬
    </div>
  );
};

export default ChatbotFloating;
