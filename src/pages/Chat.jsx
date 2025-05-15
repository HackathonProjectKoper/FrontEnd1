import { useEffect, useRef, useState } from "react";
import Message from "../components/Message";
import PromptForm from "../components/PromptForm";
import Sidebar from "../components/Sidebar";

const Chat = () => {
  const typingInterval = useRef(null);
  const messagesContainerRef = useRef(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(() => window.innerWidth > 768);
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  const [conversations, setConversations] = useState(() => {
    try {
      const saved = localStorage.getItem("conversations");
      return saved ? JSON.parse(saved) : [{ id: "default", title: "New Chat", messages: [] }];
    } catch (error) {
      console.error("Error loading conversations:", error);
      return [{ id: "default", title: "New Chat", messages: [] }];
    }
  });

  const [activeConversation, setActiveConversation] = useState(() => {
    const saved = localStorage.getItem("activeConversation");
    return saved || "default";
  });

  useEffect(() => {
    localStorage.setItem("conversations", JSON.stringify(conversations));
  }, [conversations]);

  useEffect(() => {
    localStorage.setItem("activeConversation", activeConversation);
  }, [activeConversation]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [conversations]);

  const generateResponse = (conversation, botMessageId) => {
    // Simulate typing effect
    const fullResponse = "This is a fake response from Gemini!";
    let index = 0;

    typingInterval.current = setInterval(() => {
      setConversations(prev =>
        prev.map(conv => {
          if (conv.id !== conversation.id) return conv;
          const messages = [...conv.messages];
          const botIndex = messages.findIndex(msg => msg.id === botMessageId);
          if (botIndex !== -1) {
            messages[botIndex] = {
              ...messages[botIndex],
              content: fullResponse.substring(0, index + 1),
              loading: true,
            };
          }
          return { ...conv, messages };
        })
      );

      index++;
      if (index >= fullResponse.length) {
        clearInterval(typingInterval.current);
        setConversations(prev =>
          prev.map(conv => {
            if (conv.id !== conversation.id) return conv;
            const messages = [...conv.messages];
            const botIndex = messages.findIndex(msg => msg.id === botMessageId);
            if (botIndex !== -1) {
              messages[botIndex] = {
                ...messages[botIndex],
                content: fullResponse,
                loading: false,
              };
            }
            return { ...conv, messages };
          })
        );
        setIsLoading(false);
      }
    }, 30);
  };

  const activeMessages = conversations.find(conv => conv.id === activeConversation)?.messages || [];

  return (
    <div className={`chat-app ${theme}`}>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        conversations={conversations}
        setConversations={setConversations}
        activeConversation={activeConversation}
        setActiveConversation={setActiveConversation}
        theme={theme}
        setTheme={setTheme}
      />
      <main className="chat-main">
        <div className="messages-container" ref={messagesContainerRef}>
          {activeMessages.map(msg => (
            <Message key={msg.id} message={msg} />
          ))}
        </div>
        <PromptForm
          conversations={conversations}
          setConversations={setConversations}
          activeConversation={activeConversation}
          generateResponse={generateResponse}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </main>
    </div>
  );
};

export default Chat;
