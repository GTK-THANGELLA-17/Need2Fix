
import React, { useState, useEffect } from 'react';
import { Languages, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface TranslationWidgetProps {
  onLanguageChange: (language: string) => void;
}

const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिंदी' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' }
];

export const TranslationWidget: React.FC<TranslationWidgetProps> = ({ onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isTranslating, setIsTranslating] = useState(false);

  const handleLanguageChange = async (langCode: string) => {
    setSelectedLanguage(langCode);
    setIsTranslating(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (langCode !== 'en') {
        await translatePage(langCode);
      } else {
        resetToEnglish();
      }
      
      onLanguageChange(langCode);
    } catch (error) {
      console.error('Translation failed:', error);
    } finally {
      setIsTranslating(false);
    }
  };

  const translatePage = async (targetLang: string) => {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    
    for (const element of elementsToTranslate) {
      const originalText = element.getAttribute('data-original-text') || element.textContent;
      
      if (!element.getAttribute('data-original-text')) {
        element.setAttribute('data-original-text', originalText || '');
      }
      
      if (originalText) {
        try {
          const translatedText = await translateText(originalText, targetLang);
          element.textContent = translatedText;
        } catch (error) {
          console.error('Failed to translate text:', error);
        }
      }
    }
  };

  const translateText = async (text: string, targetLang: string): Promise<string> => {
    const translations: { [key: string]: { [key: string]: string } } = {
      'hi': {
        'Service Provider Registration': 'सेवा प्रदाता पंजीकरण',
        'Join Our Professional Network': 'हमारे व्यावसायिक नेटवर्क में शामिल हों',
        'Basic Details': 'बुनियादी विवरण',
        'Full Name': 'पूरा नाम',
        'Mobile Number': 'मोबाइल नंबर',
        'Email ID': 'ईमेल आईडी',
        'Current Location': 'वर्तमान स्थान',
        'Auto-Detect': 'स्वचालित पहचान',
        'Select State': 'राज्य चुनें',
        'City': 'शहर',
        'Service Details': 'सेवा विवरण',
        'Services Offered': 'दी जाने वाली सेवाएं',
        'Working Days': 'कार्य दिवस',
        'Submit via WhatsApp': 'व्हाट्सएप के माध्यम से भेजें',
        'Years of Experience': 'अनुभव के वर्ष',
        'Short Bio / Description': 'संक्षिप्त परिचय / विवरण',
        'Languages Spoken': 'बोली जाने वाली भाषाएं',
        'Available for Emergency Requests': 'आपातकालीन अनुरोधों के लिए उपलब्ध',
        'Available Time Slots': 'उपलब्ध समय स्लॉट',
        'Locations You Can Work In': 'वे स्थान जहां आप काम कर सकते हैं',
        'Language Translator': 'भाषा अनुवादक',
        'Select your preferred language for the form': 'फॉर्म के लिए अपनी पसंदीदा भाषा चुनें'
      },
      'te': {
        'Service Provider Registration': 'సేవా ప్రదాత నమోదు',
        'Join Our Professional Network': 'మా వృత్తిపరమైన నెట్‌వర్క్‌లో చేరండి',
        'Basic Details': 'ప్రాథమిక వివరాలు',
        'Full Name': 'పూర్తి పేరు',
        'Mobile Number': 'మొబైల్ నంబర్',
        'Email ID': 'ఇమెయిల్ ఐడి',
        'Current Location': 'ప్రస్తుత స్థానం',
        'Auto-Detect': 'స్వయంచాలక గుర్తింపు',
        'Select State': 'రాష్ట్రం ఎంచుకోండి',
        'City': 'నగరం',
        'Service Details': 'సేవా వివరాలు',
        'Services Offered': 'అందించే సేవలు',
        'Working Days': 'పని దినాలు',
        'Submit via WhatsApp': 'వాట్సాప్ ద్వారా పంపండి',
        'Years of Experience': 'అనుభవం సంవత్సరాలు',
        'Short Bio / Description': 'చిన్న పరిచయం / వివరణ',
        'Languages Spoken': 'మాట్లాడే భాషలు',
        'Available for Emergency Requests': 'అత్యవసర అభ్యర్థనలకు అందుబాటులో',
        'Available Time Slots': 'అందుబాటులో ఉన్న సమయ స్లాట్‌లు',
        'Locations You Can Work In': 'మీరు పని చేయగల ప్రాంతాలు',
        'Language Translator': 'భాషా అనువాదకుడు',
        'Select your preferred language for the form': 'ఫారం కోసం మీ ఇష్టమైన భాషను ఎంచుకోండి'
      }
    };

    return translations[targetLang]?.[text] || text;
  };

  const resetToEnglish = () => {
    const elementsToReset = document.querySelectorAll('[data-original-text]');
    
    elementsToReset.forEach(element => {
      const originalText = element.getAttribute('data-original-text');
      if (originalText) {
        element.textContent = originalText;
      }
    });
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = selectedLanguage === 'en' ? 'en-US' : `${selectedLanguage}-IN`;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 sm:p-2 rounded-lg">
            <Languages className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-medium text-blue-800 dark:text-blue-200" data-translate data-original-text="Language Translator">
              Language Translator
            </h4>
            <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-300" data-translate data-original-text="Select your preferred language for the form">
              Select your preferred language for the form
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 justify-end">
          <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-32 sm:w-40 h-8 sm:h-10 border-blue-200 dark:border-blue-700 bg-white dark:bg-gray-800 text-xs sm:text-sm">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700 max-h-60 z-[80]">
              {languages.map((lang) => (
                <SelectItem 
                  key={lang.code} 
                  value={lang.code}
                  className="text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/30 cursor-pointer text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span>{lang.native}</span>
                    <span className="text-xs text-gray-500 hidden sm:inline">({lang.name})</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => speakText('Welcome to service provider registration')}
            className="h-8 w-8 sm:h-10 sm:w-10 p-0 border-blue-200 dark:border-blue-700"
          >
            <Volume2 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
          </Button>
        </div>
      </div>
      
      {isTranslating && (
        <div className="mt-2 sm:mt-3 flex items-center gap-2 text-xs sm:text-sm text-blue-600 dark:text-blue-400">
          <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-2 border-blue-600 border-t-transparent"></div>
          <span>Translating content...</span>
        </div>
      )}
    </div>
  );
};
