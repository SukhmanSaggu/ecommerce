import { useState, useEffect, useRef } from "react";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            24/7 Customer Support
          </h1>
          <p className="text-lg text-gray-600">
            We're here to help you anytime, day or night
          </p>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Call Us
            </h3>
            <p className="text-gray-600 mb-3">+1 (555) 123-4567</p>
            <p className="text-sm text-gray-500">Available 24/7</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-3">✉️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Email Us
            </h3>
            <p className="text-gray-600 mb-3">support@mercadillo.com</p>
            <p className="text-sm text-gray-500">Reply within 2 hours</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Live Chat
            </h3>
            <p className="text-gray-600 mb-3">Click to start chatting</p>
            <p className="text-sm text-gray-500">AI Assistant Available</p>
          </div>
        </div>

        {/* Chat Bot Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="font-bold">Mercadillo Support</h3>
                <p className="text-sm text-blue-200">Online • Always here to help</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm">Online</span>
            </div>
          </div>
          
          <ChatBot />
        </div>

        {/* Apology Section */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <span className="text-3xl">🙏</span>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Sorry for Any Inconvenience
              </h3>
              <p className="text-gray-600">
                We sincerely apologize if you've experienced any issues while shopping with us. 
                Your satisfaction is our top priority, and we're committed to resolving any 
                concerns you may have. Please reach out to our support team, and we'll make 
                things right for you.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Quick Help Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Order Status & Tracking",
              "Returns & Refunds",
              "Payment Issues",
              "Shipping Delays",
              "Account Problems",
              "Product Inquiries"
            ].map((topic, index) => (
              <button
                key={index}
                className="text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
              >
                → {topic}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Chat Bot Component
const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hello! Welcome to Mercadillo Support 🤖",
      time: new Date()
    },
    {
      id: 2,
      type: "bot",
      text: "I'm here to help you 24/7. How can I assist you today?",
      time: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = {
    "hello": ["Hello! How can I help you today? 😊", "Hi there! What can I assist you with?"],
    "hi": ["Hello! Welcome to Mercadillo! 👋", "Hi! How can I help you today?"],
    "order": ["I'd be happy to help with your order! Could you please provide your order number?", "For order inquiries, please share your order number and I'll track it for you."],
    "track": ["To track your order, please provide your order number or email address.", "Let me check your order status! Please share your order details."],
    "return": ["We offer a 30-day return policy! Would you like to initiate a return?", "Returns are easy - just contact us within 30 days of purchase."],
    "refund": ["I understand you need a refund. Our team processes refunds within 5-7 business days.", "Refunds typically take 5-7 business days to reflect in your account."],
    "delivery": ["We offer free delivery on orders above $50! Standard delivery takes 3-5 business days.", "Free delivery available on orders over $50. Express delivery option also available."],
    "payment": ["For payment issues, please check your card details and try again. We accept all major credit cards.", "Having payment problems? Try clearing your cache or use a different payment method."],
    "price": ["Our prices are competitive and we often have discounts! Check our promotions page for current offers.", "We strive to offer the best prices. Sign up for our newsletter to get exclusive deals!"],
    "contact": ["You can reach us at +1 (555) 123-4567 or email support@mercadillo.com", "We're available 24/7! Call us at +1 (555) 123-4567 or chat with us here."],
    "thank": ["You're welcome! Is there anything else I can help you with? 😊", "Happy to help! Let me know if you have more questions."],
    "bye": ["Goodbye! Thank you for chatting with us. Have a great day! 👋", "Thank you for reaching out! Feel free to chat anytime. Bye! 👋"]
  };

  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();
    
    for (const [key, responses] of Object.entries(botResponses)) {
      if (lowerInput.includes(key)) {
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    
    const defaultResponses = [
      "I understand your concern. Let me connect you with a human agent who can better assist you.",
      "Thanks for reaching out! Our team will look into this and get back to you shortly.",
      "I appreciate your patience. Could you provide more details so I can help you better?",
      "That's a great question! Let me check our system for the best answer for you."
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      text: inputText,
      time: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        type: "bot",
        text: getBotResponse(inputText),
        time: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-96">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                msg.type === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-gray-200 text-gray-800"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <p className={`text-xs mt-1 ${msg.type === "user" ? "text-blue-200" : "text-gray-400"}`}>
                {msg.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-200 p-3 rounded-lg">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSend}
            disabled={!inputText.trim()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Send
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          🤖 AI Assistant • Average response time: &lt; 1 minute
        </p>
      </div>
    </div>
  );
};

export default Services;