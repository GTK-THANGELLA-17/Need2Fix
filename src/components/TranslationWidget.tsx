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
    <div className="bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10 border border-blue-200/50 dark:border-blue-800/50 rounded-lg p-2 sm:p-3">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-md flex-shrink-0">
            <Languages className="w-3 h-3 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-xs font-medium text-blue-800 dark:text-blue-200 truncate" data-translate data-original-text="Language">
              Language
            </h4>
            <p className="text-xs text-blue-600 dark:text-blue-300 truncate" data-translate data-original-text="Select language">
              Select language
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-1 flex-shrink-0">
          <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-24 sm:w-28 h-7 border-blue-200 dark:border-blue-700 bg-white dark:bg-gray-800 text-xs">
              <SelectValue placeholder="Lang" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700 max-h-48 z-[90]">
              {languages.map((lang) => (
                <SelectItem 
                  key={lang.code} 
                  value={lang.code}
                  className="text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/30 cursor-pointer text-xs"
                >
                  <div className="flex items-center gap-1">
                    <span>{lang.native}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => speakText('Welcome to service provider registration')}
            className="h-7 w-7 p-0 border-blue-200 dark:border-blue-700 flex-shrink-0"
          >
            <Volume2 className="w-3 h-3 text-blue-600 dark:text-blue-400" />
          </Button>
        </div>
      </div>
      
      {isTranslating && (
        <div className="mt-1 flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400">
          <div className="animate-spin rounded-full h-3 w-3 border-2 border-blue-600 border-t-transparent"></div>
          <span>Translating...</span>
        </div>
      )}
    </div>
  );
};
