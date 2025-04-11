import React, { useState, useRef, useEffect } from 'react';
import '../styles/chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Auto-scroll vers le bas
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === '') return;

    // Message utilisateur
    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    setInput('');

    // Réponse automatique
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        sender: 'bot', 
        text: getBotResponse(input) 
      }]);
    }, 800);
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('bonjour') || input.includes('salut')) {
      return 'Enchanté de vous parler ! Dites-moi ce dont vous avez besoin.';
    } else if (input.includes('aide') || input.includes('support')) {
      return 'Je peux vous aider avec les réservations, les informations sur les tours, etc.';
    } else {
      return 'Je comprends votre demande. Un conseiller vous répondra rapidement.';
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="chatbot__container">
      <div className="chatbot__header">Assistant Virtuel</div>
      
      <div className="chatbot__messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chatbot__message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="chatbot__input">
        <input
          type="text"
          placeholder="Écrivez votre message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSend}>
          <i className="ri-send-plane-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default Chatbot;