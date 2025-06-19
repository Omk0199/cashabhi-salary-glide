
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, X } from "lucide-react";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hi there! I\'m Casha, your virtual assistant. How can I help you today?',
      time: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      content: newMessage,
      time: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setNewMessage('');
    
    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "I'd be happy to help you with that! Could you provide more details?",
        "Thanks for your question. Cashabhi offers loans starting from ₹10,000 up to ₹5,00,000.",
        "The application process is simple and takes just 2 minutes. Would you like me to guide you through it?",
        "Our interest rates start from 11.5% p.a., much lower than typical personal loans.",
        "You can use Cashabhi loans for medical bills, vehicle expenses, weddings, home repairs, and more."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botReply = {
        type: 'bot',
        content: randomResponse,
        time: new Date()
      };
      
      setMessages(prev => [...prev, botReply]);
    }, 1000);
  };

  return (
    <>
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
        <Button
          onClick={toggleChat}
          size="lg"
          className="h-14 w-14 rounded-full bg-cashabhi-orange hover:bg-cashabhi-orange-dark shadow-lg"
        >
          <MessageSquare size={24} />
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Card className="w-[350px] shadow-xl">
            <CardHeader className="bg-cashabhi-blue text-white py-3 px-4 flex flex-row items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageSquare size={18} />
                <span>Casha Assistant</span>
              </CardTitle>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-white hover:bg-white/20" 
                onClick={toggleChat}
              >
                <X size={18} />
              </Button>
            </CardHeader>
            
            <div className="h-[350px] overflow-y-auto p-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-3 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.type === 'user'
                        ? 'bg-cashabhi-blue text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p>{message.content}</p>
                    <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                      {message.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <CardContent className="p-3 border-t">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  placeholder="Type your message here..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="icon" className="bg-cashabhi-blue hover:bg-cashabhi-blue-dark">
                  <Send size={18} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
