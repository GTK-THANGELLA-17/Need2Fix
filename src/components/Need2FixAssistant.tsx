import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Moon, Sun, Minimize2, Maximize2, RefreshCw, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTheme } from '@/components/ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  hasEmoji?: boolean;
}

interface Need2FixAssistantProps {
  onClose?: () => void;
}

const Need2FixAssistant: React.FC<Need2FixAssistantProps> = ({ onClose }) => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '👋 नमस्ते! I\'m your Need2Fix assistant! 🤖\nI can help you with:\n🔧 Service inquiries\n📍 Location support\n💰 Pricing details\n👨‍🔧 Provider registration\n\nHow can I assist you today? 😊✨',
      isUser: false,
      timestamp: new Date(),
      hasEmoji: true
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const defaultQuestions = [
    '🔧 How does Need2Fix work?',
    '⚡ What services do you offer?',
    '🔍 How do I find service providers?',
    '💰 What are your charges?',
    '👨‍🔧 How to become a service provider?',
    '📍 Is Need2Fix available in my city?',
    '🆘 Emergency services available?',
    '⭐ How are providers rated?'
  ];

  const responses = {
    '🔧 How does Need2Fix work?': {
      text: '🚀 Need2Fix connects you with verified service providers in your area! 💫\n\nSimple 3-step process:\n1️⃣ Select your needed service 🔧\n2️⃣ Fill in your location & details 📍\n3️⃣ Get connected via WhatsApp instantly! 📱\n\n✨ All providers are verified & rated for your safety! 🛡️',
      followUp: [
        '📋 What information do I need to provide?',
        '⏱️ How quickly can I get connected?',
        '✅ How do I know if a provider is verified?',
        '💬 Can I chat with providers before booking?',
        '🔒 Is my data safe?'
      ]
    },
    '⚡ What services do you offer?': {
      text: '🛠️ We offer 15+ comprehensive services! 🎯\n\n🏠 **Home Services:**\n• ⚡ Electrician\n• 🚰 Plumber\n• 🪚 Carpenter\n• 🏠 House Labor\n• 🚿 Drainage Cleaning\n• 💧 Water Supply\n• ⚙️ Iron Work\n• 🏗️ House Building\n• 📦 Porter Services\n\n💻 **Tech Services:**\n• 📱 Mobile Repair\n• 💻 Laptop Repair\n• 📺 TV Installation\n• 📶 WiFi Installation\n• 📡 Dish Installation\n\n🚗 **Other Services:**\n• 🔧 Mechanic\n• 💧 Water Purifier Service\n\nAll available 24/7! 🌟',
      followUp: [
        '🏠 Do you provide home visits?',
        '⏰ What are the working hours?',
        '💵 How much do these services cost?',
        '🆘 Do you provide emergency services?',
        '🌍 Which cities are covered?'
      ]
    },
    '🔍 How do I find service providers?': {
      text: '📍 Super easy 4-step process! ✨\n\n1️⃣ **Select Service** 🔧 - Choose what you need\n2️⃣ **Auto Location** 📍 - We detect your location automatically\n3️⃣ **Enter Details** 📝 - Tell us your requirements\n4️⃣ **Get Connected** 📱 - Instant WhatsApp contact with providers!\n\n🎯 We show you matching providers with:\n• ⭐ Customer ratings\n• 📞 Direct contact details\n• 📍 Distance from you\n• 💰 Transparent pricing',
      followUp: [
        '📱 Can I contact providers directly?',
        '⭐ How are providers rated?',
        '📍 How accurate is location matching?',
        '🔄 Can I change my location later?',
        '⚡ How fast is the matching process?'
      ]
    },
    '💰 What are your charges?': {
      text: '🆓 **Need2Fix is 100% FREE for customers!** 🎉\n\n💳 **For Customers:**\n• No registration fees ❌\n• No booking charges ❌\n• No hidden costs ❌\n• Pay providers directly 💵\n\n👨‍🔧 **For Service Providers:**\n• 📅 Monthly Plan: ₹999/month (0% commission)\n• 📅 Yearly Plan: ₹9999/year (2 months free!)\n• 💼 Commission Plan: Pay only when you get clients\n• 🚀 Premium features available\n\n🔒 **100% Secure Payments!** 🛡️',
      followUp: [
        '💳 What payment methods are accepted?',
        '🧾 Do I get a bill/receipt?',
        '💸 Are there any hidden charges?',
        '🔒 Is my payment information secure?',
        '💰 How do providers set their rates?'
      ]
    },
    '👨‍🔧 How to become a service provider?': {
      text: '🚀 **Join our network of 10,000+ providers!** 🌟\n\n📋 **Registration Process:**\n1️⃣ Click "Service Provider - Register Here" 🖱️\n2️⃣ Fill registration form 📝\n3️⃣ Upload documents (ID, certificates) 📄\n4️⃣ Verification (24-48 hours) ✅\n5️⃣ Start getting clients! 💼\n\n💰 **Choose Your Plan:**\n• 📅 Monthly: ₹999/month (unlimited leads)\n• 📅 Yearly: ₹9999/year (2 months free!)\n• 💼 Commission: Pay per successful booking\n\n🎯 **Benefits:**\n• Direct client contact 📱\n• Flexible working hours ⏰\n• Grow your business 📈\n• Verified badge 🛡️',
      followUp: [
        '📋 What documents do I need?',
        '⏱️ How long does verification take?',
        '💰 What are the monthly charges?',
        '📈 How do I get more clients?',
        '🆘 What support do you provide?'
      ]
    },
    '📍 Is Need2Fix available in my city?': {
      text: '🏙️ **We\'re expanding rapidly across India!** 🇮🇳\n\n🌟 **Currently Available:**\n• 🏙️ Mumbai, Delhi, Bangalore\n• 🏘️ Hyderabad, Chennai, Pune\n• 🌆 Kolkata, Ahmedabad, Jaipur\n• 🏙️ And 25+ more cities!\n\n🚀 **Coming Soon:**\n• 100+ new cities this year\n• Rural area expansion\n• All tier-2 & tier-3 cities\n\n📢 **Not in your city yet?**\nRegister your interest - we\'ll notify you when we launch! 🔔',
      followUp: [
        '🗓️ When will you expand to other cities?',
        '📢 How will I know when you\'re in my city?',
        '🤝 Can I become a provider in a new city?',
        '📧 Can I get notified about expansion?',
        '🌍 Do you cover rural areas?'
      ]
    },
    '🆘 Emergency services available?': {
      text: '🚨 **YES! 24/7 Emergency Services Available!** ⚡\n\n🔥 **Emergency Services:**\n• ⚡ Electrical emergencies\n• 🚰 Plumbing leaks & blockages\n• 🔧 Urgent repairs\n• 🚪 Lockout situations\n• 💻 Critical tech failures\n\n⏱️ **Response Time:**\n• 🚨 Emergency: 15-30 minutes\n• ⚡ Urgent: 1-2 hours\n• 🔧 Regular: Same day\n\n📞 **Emergency Hotline:** 8499090369\n💬 **WhatsApp Support:** Available 24/7\n\n🛡️ **All emergency providers are verified!** ✅',
      followUp: [
        '💰 Are emergency services more expensive?',
        '⏰ What qualifies as an emergency?',
        '📞 Can I call directly for emergencies?',
        '🚗 Do providers come with tools?',
        '🔒 Are emergency providers background checked?'
      ]
    },
    '⭐ How are providers rated?': {
      text: '🌟 **Transparent 5-Star Rating System!** ⭐\n\n📊 **Rating Factors:**\n• ⭐ Service Quality (40%)\n• ⏰ Punctuality (25%)\n• 💰 Fair Pricing (20%)\n• 💬 Communication (15%)\n\n✅ **Features:**\n• 📝 Real customer reviews\n• 📊 Detailed rating breakdown\n• 🛡️ Verified reviews only\n• 📈 Performance tracking\n• 🏆 Top performer badges\n\n🎯 **Minimum Requirements:**\n• 4.0+ rating to stay active\n• Regular performance monitoring\n• Customer feedback analysis\n\n💯 **100% authentic reviews guaranteed!** 🔒',
      followUp: [
        '📝 How do I leave a review?',
        '🏆 What are top performer benefits?',
        '📊 Can I see detailed ratings?',
        '🛡️ How do you prevent fake reviews?',
        '📈 Do ratings affect pricing?'
      ]
    }
  };

  // Enhanced follow-up responses with more emojis and details
  const followUpResponses = {
    '📋 What information do I need to provide?': '📝 **Just the basics!** ✨\n\n🔹 Your location (auto-detected) 📍\n🔹 Contact number 📞\n🔹 Service description 💬\n🔹 Preferred timing ⏰\n🔹 Any special requirements 📝\n\nThat\'s it! We keep it super simple! 😊🚀',
    '⏱️ How quickly can I get connected?': '⚡ **Lightning Fast!** 🚀\n\n• Emergency: 15-30 minutes 🚨\n• Regular services: 30 minutes ⏰\n• Tech repairs: 1 hour 💻\n• Major installations: Same day 🛠️\n\nOur providers are super responsive! 📱✨',
    '✅ How do I know if a provider is verified?': '🛡️ **Multi-level Verification!** 🔒\n\n✅ Government ID verified\n✅ Address proof checked\n✅ Skill certificates validated\n✅ Background verification done\n✅ Customer reviews monitored\n✅ Insurance covered\n\nLook for the blue verified badge! 🏆💙',
    '💬 Can I chat with providers before booking?': '📱 **Absolutely!** 💯\n\nEvery provider has:\n• Direct WhatsApp contact 💬\n• Phone number 📞\n• Chat before booking 🗣️\n• Discuss requirements 📝\n• Negotiate pricing 💰\n• Schedule timing ⏰\n\nFull transparency! ✨🤝',
    '🔒 Is my data safe?': '🛡️ **100% Secure & Private!** 🔐\n\n🔒 **Security Features:**\n• End-to-end encryption 🔐\n• No data selling ❌\n• GDPR compliant 📋\n• Secure servers 🖥️\n• Regular security audits 🔍\n• Privacy-first approach 🤐\n\nYour data is completely safe with us! 💚✨'
  };

  const clearChat = () => {
    setMessages([{
      id: '1',
      text: '👋 नमस्ते! I\'m your Need2Fix assistant! 🤖\nI can help you with:\n🔧 Service inquiries\n📍 Location support\n💰 Pricing details\n👨‍🔧 Provider registration\n\nHow can I assist you today? 😊✨',
      isUser: false,
      timestamp: new Date(),
      hasEmoji: true
    }]);
    setShowQuickQuestions(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setShowQuickQuestions(false);
    setIsTyping(true);

    // Find response
    const mainResponse = responses[text as keyof typeof responses];
    const followUpResponse = followUpResponses[text as keyof typeof followUpResponses];
    
    let responseText = '';
    let hasFollowUp = false;

    if (mainResponse) {
      responseText = mainResponse.text;
      hasFollowUp = true;
    } else if (followUpResponse) {
      responseText = followUpResponse;
      hasFollowUp = true;
    } else {
      // Enhanced default response with more helpful suggestions
      responseText = '🤔 **Great question!** 💭\n\nI\'m here to help with specific queries about:\n🔧 Our services & how they work\n📍 Location availability\n💰 Pricing & payment methods\n👨‍🔧 Becoming a service provider\n🆘 Emergency services\n⭐ Quality & ratings\n\n📞 **For specific technical queries:** 8499090369\n💬 **Try asking about any of the topics above!** ✨\n\nWhat would you like to know more about? 😊🚀';
      hasFollowUp = true;
    }

    // Simulate typing delay
    setTimeout(() => {
      setIsTyping(false);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        isUser: false,
        timestamp: new Date(),
        hasEmoji: true
      };
      setMessages(prev => [...prev, botMessage]);
      
      if (hasFollowUp) {
        setShowQuickQuestions(true);
      }
    }, 1500);
  };

  const handleQuestionClick = (question: string) => {
    handleSendMessage(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage(inputText);
    }
  };

  const getCurrentFollowUpQuestions = () => {
    const lastUserMessage = [...messages].reverse().find(m => m.isUser);
    if (lastUserMessage) {
      const response = responses[lastUserMessage.text as keyof typeof responses];
      if (response?.followUp) {
        return response.followUp;
      }
    }
    return defaultQuestions;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="rounded-full w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl border-4 border-white/20 backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <MessageCircle className="w-4 h-4 text-white" />
              </motion.div>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-80 flex flex-col overflow-hidden"
            style={{ height: isMinimized ? '60px' : '500px' }}
          >
            {/* Enhanced Header */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Bot className="w-5 h-5" />
                </motion.div>
                <h3 className="font-semibold">Need2Fix Assistant 🤖</h3>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="text-white hover:bg-white/20 p-1"
                  title="Toggle theme"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white hover:bg-white/20 p-1"
                  title={isMinimized ? "Maximize" : "Minimize"}
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearChat}
                  className="text-white hover:bg-white/20 p-1"
                  title="Clear chat"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClose}
                  className="text-white hover:bg-white/20 p-1"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Messages Container */}
            {!isMinimized && (
              <>
                <div 
                  ref={messagesContainerRef}
                  className="flex-1 overflow-y-auto p-4 space-y-3 scroll-smooth bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-800/50 dark:to-gray-900"
                >
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[85%] p-3 rounded-2xl shadow-lg backdrop-blur-sm ${
                            message.isUser
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                              : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700'
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            {!message.isUser && <Bot className="w-4 h-4 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />}
                            {message.isUser && <User className="w-4 h-4 mt-1 flex-shrink-0" />}
                            <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Typing Indicator */}
                  <AnimatePresence>
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex justify-start"
                      >
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                          <div className="flex items-center gap-2">
                            <Bot className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <motion.div className="flex space-x-1">
                              <motion.div
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                                className="w-2 h-2 bg-blue-500 rounded-full"
                              />
                              <motion.div
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                                className="w-2 h-2 bg-purple-500 rounded-full"
                              />
                              <motion.div
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                                className="w-2 h-2 bg-pink-500 rounded-full"
                              />
                            </motion.div>
                            <span className="text-xs text-gray-500 dark:text-gray-400">Typing...</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Quick Questions */}
                  <AnimatePresence>
                    {showQuickQuestions && !isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-2"
                      >
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center font-medium">
                          {messages.length === 1 ? '❓ Quick questions:' : '💡 You might also ask:'}
                        </p>
                        <div className="grid gap-2">
                          {getCurrentFollowUpQuestions().map((question, index) => (
                            <motion.div
                              key={question}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleQuestionClick(question)}
                                className="text-xs h-auto p-2 text-left justify-start hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 border-gray-300 dark:border-gray-600 w-full transition-all duration-300 hover:scale-[1.02]"
                              >
                                {question}
                              </Button>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Enhanced Input */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                  <div className="flex gap-2">
                    <Input
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything... 💬✨"
                      className="flex-1 border-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 rounded-xl bg-white dark:bg-gray-800"
                      disabled={isTyping}
                    />
                    <Button
                      onClick={() => handleSendMessage(inputText)}
                      size="sm"
                      className="px-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl"
                      disabled={!inputText.trim() || isTyping}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Need2FixAssistant;
