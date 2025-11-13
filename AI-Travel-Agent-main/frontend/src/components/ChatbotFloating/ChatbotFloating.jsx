import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatbotFloating.css';

const ChatbotFloating = () => {
  const navigate = useNavigate();
  const redirectToAgent = () => {
    window.location.href = "http://localhost:8501/"; // Redirige vers l'URL de ton agent AI
  };

  const handleClick = () => {
    navigate('/chatbot');
  };

  return (
    <div className="chatbot__floating" onClick={redirectToAgent}>
      💬
    </div>
  );
};

export default ChatbotFloating;
