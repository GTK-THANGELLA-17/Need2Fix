
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TranslationContextType {
  language: 'en' | 'hi' | 'te';
  setLanguage: (lang: 'en' | 'hi' | 'te') => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    backToIntro: "Back to Intro",
    exploreServices: "Explore Services",
    
    // Header
    allServicesAvailable: "All Services Available",
    professionalServices: "Professional services at your doorstep across India. Choose from our wide range of trusted service providers.",
    
    // Trust indicators
    rating: "4.8+ Rating",
    verifiedProfessionals: "Verified Professionals",
    responseTime: "30min Response",
    happyCustomers: "10K+ Happy Customers",
    
    // Location
    selectLocation: "Select Your Location",
    currentLocation: "Current Location",
    detectLocation: "Detect My Location",
    searchCity: "Search for a city...",
    
    // Services
    electrician: "Electrician",
    plumber: "Plumber",
    carpenter: "Carpenter",
    mechanic: "Mechanic",
    houseLabor: "House Labor",
    tvInstallation: "TV Installation",
    drainageCleaning: "Drainage Cleaning",
    waterSupply: "Water Supply",
    ironWork: "Iron Work",
    construction: "Construction",
    porterServices: "Porter Services",
    acRepair: "AC Repair",
    paintingServices: "Painting Services",
    cleaningServices: "Cleaning Services",
    pestControl: "Pest Control",
    securityServices: "Security Services",
    gardeningServices: "Gardening Services",
    applianceRepair: "Appliance Repair",
    
    // Service descriptions
    electricianDesc: "Electrical installations, repairs, and maintenance services",
    plumberDesc: "Plumbing installations, repairs, and emergency services",
    carpenterDesc: "Furniture making, repairs, and wooden work services",
    mechanicDesc: "Vehicle repairs, maintenance, and automotive services",
    houseLaborDesc: "General household work and maintenance services",
    tvInstallationDesc: "TV mounting, setup, and installation services",
    drainageCleaningDesc: "Drain cleaning, unblocking, and maintenance",
    waterSupplyDesc: "Water connection, pump installation, and repairs",
    ironWorkDesc: "Metal fabrication, welding, and iron work services",
    constructionDesc: "Building construction, renovation, and civil work",
    porterServicesDesc: "Moving, packing, and transportation services",
    acRepairDesc: "Air conditioning installation, repair, and maintenance",
    paintingServicesDesc: "Interior and exterior painting services",
    cleaningServicesDesc: "Home and office cleaning services",
    pestControlDesc: "Pest elimination and prevention services",
    securityServicesDesc: "Security guard and surveillance services",
    gardeningServicesDesc: "Garden maintenance and landscaping services",
    applianceRepairDesc: "Home appliance repair and maintenance",
    
    // Why Choose Section
    whyChooseTitle: "Why Choose Need2Fix?",
    whyChooseSubtitle: "We're revolutionizing home services with technology, trust, and transparency",
    
    lightningFast: "Lightning Fast",
    lightningFastDesc: "Connect with verified professionals in under 30 minutes",
    lightningFastStats: "30min avg",
    
    verified: "100% Verified",
    verifiedDesc: "All service providers undergo thorough background verification",
    verifiedStats: "Background checked",
    
    qualityAssured: "Quality Assured",
    qualityAssuredDesc: "Rated by thousands of customers with satisfaction guarantee",
    qualityAssuredStats: "4.8★ rating",
    
    expertNetwork: "Expert Network",
    expertNetworkDesc: "Access to skilled professionals across multiple service categories",
    expertNetworkStats: "1000+ experts",
    
    transparentPricing: "Transparent Pricing",
    transparentPricingDesc: "No hidden charges, upfront pricing with detailed breakdown",
    transparentPricingStats: "No hidden fees",
    
    growingNetwork: "Growing Network",
    growingNetworkDesc: "Expanding across India with new cities and services",
    growingNetworkStats: "100+ cities",
    
    // Footer
    footerBrand: "Need2Fix",
    footerDescription: "Connecting you with trusted local service providers across India. Your one-stop solution for all home and professional services.",
    availableAcrossIndia: "Available across India",
    ourServices: "Our Services",
    andManyMore: "And many more...",
    contactUs: "Contact Us",
    whyNeed2Fix: "Why Need2Fix?",
    whyNeed2FixDesc: "We solve the common problem of finding reliable service providers when you need them urgently. No more asking friends for contact numbers or worrying about trust - we connect you with verified professionals instantly.",
    madeWithLove: "Made with",
    forCommunities: "for connecting communities",
    developedBy: "Developed by G.Thangella",
    copyrightText: "© 2024 Need2Fix. Bridging the gap between service providers and customers across India.",
    
    // Service Modal
    availableServiceProviders: "Available Service Providers",
    closeModal: "Close",
    callNow: "Call Now",
    whatsappContact: "WhatsApp",
    registerAsProvider: "Register as Service Provider",
    
    // Service Provider Registration
    registerTitle: "Service Provider - Register Here",
    registerSubtitle: "Join our network of trusted professionals and grow your business",
    personalInfo: "Personal Information",
    fullName: "Full Name",
    fullNamePlaceholder: "Enter your full name",
    phoneNumber: "Phone Number",
    phoneNumberPlaceholder: "Enter your phone number",
    email: "Email Address",
    emailPlaceholder: "Enter your email address",
    age: "Age",
    agePlaceholder: "Enter your age",
    
    serviceDetails: "Service Details",
    serviceType: "Service Type",
    selectService: "Select your service",
    experience: "Years of Experience",
    experiencePlaceholder: "Enter years of experience",
    skills: "Skills & Specializations",
    skillsPlaceholder: "Describe your skills and specializations",
    
    locationInfo: "Location Information",
    city: "City",
    cityPlaceholder: "Enter your city",
    area: "Area/Locality",
    areaPlaceholder: "Enter your area or locality",
    pincode: "Pincode",
    pincodePlaceholder: "Enter your pincode",
    
    additionalInfo: "Additional Information",
    availability: "Availability",
    availabilityPlaceholder: "e.g., Monday to Saturday, 9 AM to 6 PM",
    priceRange: "Price Range",
    priceRangePlaceholder: "e.g., ₹500-1000 per service",
    description: "About Yourself",
    descriptionPlaceholder: "Tell us about yourself and your services",
    
    submitViaWhatsApp: "Submit via WhatsApp",
    callNowButton: "Call Now",
    noWhatsAppText: "Don't have WhatsApp? Call 8499090369 to register your service directly with our team.",
    
    // Form validation
    required: "This field is required",
    invalidEmail: "Please enter a valid email address",
    invalidPhone: "Please enter a valid phone number",
    invalidAge: "Please enter a valid age",
    
    // Languages
    english: "English",
    hindi: "हिन्दी",
    telugu: "తెలుగు"
  },
  
  hi: {
    // Navigation
    backToIntro: "परिचय पर वापस जाएं",
    exploreServices: "सेवाएं देखें",
    
    // Header
    allServicesAvailable: "सभी सेवाएं उपलब्ध",
    professionalServices: "भारत भर में आपके घर तक पेशेवर सेवाएं। हमारे विश्वसनीय सेवा प्रदाताओं की विस्तृत श्रृंखला से चुनें।",
    
    // Trust indicators
    rating: "4.8+ रेटिंग",
    verifiedProfessionals: "सत्यापित पेशेवर",
    responseTime: "30 मिनट प्रतिक्रिया",
    happyCustomers: "10K+ खुश ग्राहक",
    
    // Location
    selectLocation: "अपना स्थान चुनें",
    currentLocation: "वर्तमान स्थान",
    detectLocation: "मेरा स्थान खोजें",
    searchCity: "शहर खोजें...",
    
    // Services
    electrician: "इलेक्ट्रीशियन",
    plumber: "प्लंबर",
    carpenter: "बढ़ई",
    mechanic: "मैकेनिक",
    houseLabor: "घरेलू मजदूर",
    tvInstallation: "टीवी इंस्टॉलेशन",
    drainageCleaning: "नाली की सफाई",
    waterSupply: "पानी की आपूर्ति",
    ironWork: "लोहे का काम",
    construction: "निर्माण",
    porterServices: "पोर्टर सेवाएं",
    acRepair: "एसी रिपेयर",
    paintingServices: "पेंटिंग सेवाएं",
    cleaningServices: "सफाई सेवाएं",
    pestControl: "कीट नियंत्रण",
    securityServices: "सुरक्षा सेवाएं",
    gardeningServices: "बागवानी सेवाएं",
    applianceRepair: "उपकरण मरम्मत",
    
    // Service descriptions
    electricianDesc: "विद्युत स्थापना, मरम्मत और रखरखाव सेवाएं",
    plumberDesc: "प्लंबिंग स्थापना, मरम्मत और आपातकालीन सेवाएं",
    carpenterDesc: "फर्नीचर बनाना, मरम्मत और लकड़ी का काम",
    mechanicDesc: "वाहन मरम्मत, रखरखाव और ऑटोमोटिव सेवाएं",
    houseLaborDesc: "सामान्य घरेलू काम और रखरखाव सेवाएं",
    tvInstallationDesc: "टीवी माउंटिंग, सेटअप और स्थापना सेवाएं",
    drainageCleaningDesc: "नाली की सफाई, अनब्लॉकिंग और रखरखाव",
    waterSupplyDesc: "पानी कनेक्शन, पंप स्थापना और मरम्मत",
    ironWorkDesc: "धातु निर्माण, वेल्डिंग और लोहे का काम",
    constructionDesc: "भवन निर्माण, नवीनीकरण और सिविल कार्य",
    porterServicesDesc: "स्थानांतरण, पैकिंग और परिवहन सेवाएं",
    acRepairDesc: "एयर कंडीशनिंग स्थापना, मरम्मत और रखरखाव",
    paintingServicesDesc: "आंतरिक और बाहरी पेंटिंग सेवाएं",
    cleaningServicesDesc: "घर और कार्यालय की सफाई सेवाएं",
    pestControlDesc: "कीट उन्मूलन और रोकथाम सेवाएं",
    securityServicesDesc: "सुरक्षा गार्ड और निगरानी सेवाएं",
    gardeningServicesDesc: "बगीचे का रखरखाव और भूनिर्माण सेवाएं",
    applianceRepairDesc: "घरेलू उपकरण मरम्मत और रखरखाव",
    
    // Why Choose Section
    whyChooseTitle: "Need2Fix क्यों चुनें?",
    whyChooseSubtitle: "हम प्रौद्योगिकी, विश्वास और पारदर्शिता के साथ घरेलू सेवाओं में क्रांति ला रहे हैं",
    
    lightningFast: "बिजली तेज",
    lightningFastDesc: "30 मिनट से कम समय में सत्यापित पेशेवरों से जुड़ें",
    lightningFastStats: "30 मिनट औसत",
    
    verified: "100% सत्यापित",
    verifiedDesc: "सभी सेवा प्रदाता संपूर्ण पृष्ठभूमि सत्यापन से गुजरते हैं",
    verifiedStats: "पृष्ठभूमि जांची गई",
    
    qualityAssured: "गुणवत्ता आश्वासित",
    qualityAssuredDesc: "हजारों ग्राहकों द्वारा रेट किया गया संतुष्टि गारंटी के साथ",
    qualityAssuredStats: "4.8★ रेटिंग",
    
    expertNetwork: "विशेषज्ञ नेटवर्क",
    expertNetworkDesc: "कई सेवा श्रेणियों में कुशल पेशेवरों तक पहुंच",
    expertNetworkStats: "1000+ विशेषज्ञ",
    
    transparentPricing: "पारदर्शी मूल्य निर्धारण",
    transparentPricingDesc: "कोई छुपे हुए शुल्क नहीं, विस्तृत विवरण के साथ अग्रिम मूल्य निर्धारण",
    transparentPricingStats: "कोई छुपी फीस नहीं",
    
    growingNetwork: "बढ़ता नेटवर्क",
    growingNetworkDesc: "नए शहरों और सेवाओं के साथ भारत में विस्तार",
    growingNetworkStats: "100+ शहर",
    
    // Footer
    footerBrand: "Need2Fix",
    footerDescription: "आपको भारत भर में विश्वसनीय स्थानीय सेवा प्रदाताओं से जोड़ना। सभी घरेलू और पेशेवर सेवाओं के लिए आपका एक-स्टॉप समाधान।",
    availableAcrossIndia: "भारत भर में उपलब्ध",
    ourServices: "हमारी सेवाएं",
    andManyMore: "और भी बहुत कुछ...",
    contactUs: "संपर्क करें",
    whyNeed2Fix: "Need2Fix क्यों?",
    whyNeed2FixDesc: "हम उस सामान्य समस्या का समाधान करते हैं जब आपको तुरंत विश्वसनीय सेवा प्रदाता खोजने की जरूरत होती है। अब दोस्तों से संपर्क नंबर मांगने या विश्वास की चिंता करने की जरूरत नहीं - हम आपको तुरंत सत्यापित पेशेवरों से जोड़ते हैं।",
    madeWithLove: "प्रेम के साथ बनाया गया",
    forCommunities: "समुदायों को जोड़ने के लिए",
    developedBy: "G.Thangella द्वारा विकसित",
    copyrightText: "© 2024 Need2Fix। भारत में सेवा प्रदाताओं और ग्राहकों के बीच की दूरी को पाटना।",
    
    // Service Modal
    availableServiceProviders: "उपलब्ध सेवा प्रदाता",
    closeModal: "बंद करें",
    callNow: "अभी कॉल करें",
    whatsappContact: "व्हाट्सऐप",
    registerAsProvider: "सेवा प्रदाता के रूप में पंजीकरण करें",
    
    // Service Provider Registration
    registerTitle: "सेवा प्रदाता - यहां पंजीकरण करें",
    registerSubtitle: "विश्वसनीय पेशेवरों के हमारे नेटवर्क में शामिल हों और अपना व्यवसाय बढ़ाएं",
    personalInfo: "व्यक्तिगत जानकारी",
    fullName: "पूरा नाम",
    fullNamePlaceholder: "अपना पूरा नाम दर्ज करें",
    phoneNumber: "फोन नंबर",
    phoneNumberPlaceholder: "अपना फोन नंबर दर्ज करें",
    email: "ईमेल पता",
    emailPlaceholder: "अपना ईमेल पता दर्ज करें",
    age: "आयु",
    agePlaceholder: "अपनी आयु दर्ज करें",
    
    serviceDetails: "सेवा विवरण",
    serviceType: "सेवा प्रकार",
    selectService: "अपनी सेवा चुनें",
    experience: "अनुभव के वर्ष",
    experiencePlaceholder: "अनुभव के वर्ष दर्ज करें",
    skills: "कौशल और विशेषज्ञता",
    skillsPlaceholder: "अपने कौशल और विशेषज्ञताओं का वर्णन करें",
    
    locationInfo: "स्थान की जानकारी",
    city: "शहर",
    cityPlaceholder: "अपना शहर दर्ज करें",
    area: "क्षेत्र/इलाका",
    areaPlaceholder: "अपना क्षेत्र या इलाका दर्ज करें",
    pincode: "पिनकोड",
    pincodePlaceholder: "अपना पिनकोड दर्ज करें",
    
    additionalInfo: "अतिरिक्त जानकारी",
    availability: "उपलब्धता",
    availabilityPlaceholder: "जैसे, सोमवार से शनिवार, सुबह 9 से शाम 6 बजे तक",
    priceRange: "मूल्य सीमा",
    priceRangePlaceholder: "जैसे, ₹500-1000 प्रति सेवा",
    description: "अपने बारे में",
    descriptionPlaceholder: "अपने और अपनी सेवाओं के बारे में बताएं",
    
    submitViaWhatsApp: "व्हाट्सऐप के माध्यम से जमा करें",
    callNowButton: "अभी कॉल करें",
    noWhatsAppText: "व्हाट्सऐप नहीं है? हमारी टीम के साथ सीधे अपनी सेवा पंजीकृत करने के लिए 8499090369 पर कॉल करें।",
    
    // Form validation
    required: "यह फील्ड आवश्यक है",
    invalidEmail: "कृपया एक वैध ईमेल पता दर्ज करें",
    invalidPhone: "कृपया एक वैध फोन नंबर दर्ज करें",
    invalidAge: "कृपया एक वैध आयु दर्ज करें",
    
    // Languages
    english: "English",
    hindi: "हिन्दी",
    telugu: "తెలుగు"
  },
  
  te: {
    // Navigation
    backToIntro: "పరిచయానికి తిరిగి వెళ్లండి",
    exploreServices: "సేవలను అన్వేషించండి",
    
    // Header
    allServicesAvailable: "అన్ని సేవలు అందుబాటులో",
    professionalServices: "భారతదేశం అంతటా మీ ఇంటి వద్దకు వృత్తిపరమైన సేవలు. మా విశ్వసనీయ సేవా ప్రదాతల విస్తృత శ్రేణి నుండి ఎంచుకోండి.",
    
    // Trust indicators
    rating: "4.8+ రేటింగ్",
    verifiedProfessionals: "ధృవీకరించబడిన నిపుణులు",
    responseTime: "30 నిమిషాల ప్రతిస్పందన",
    happyCustomers: "10K+ సంతృప్త కస్టమర్లు",
    
    // Location
    selectLocation: "మీ స్థానాన్ని ఎంచుకోండి",
    currentLocation: "ప్రస్తుత స్థానం",
    detectLocation: "నా స్థానాన్ని గుర్తించండి",
    searchCity: "నగరం కోసం వెతకండి...",
    
    // Services
    electrician: "ఎలక్ట్రీషియన్",
    plumber: "ప్లంబర్",
    carpenter: "వడ్రంగి",
    mechanic: "మెకానిక్",
    houseLabor: "ఇంటి పని వాడు",
    tvInstallation: "టీవీ ఇన్‌స్టాలేషన్",
    drainageCleaning: "డ్రైనేజీ క్లీనింగ్",
    waterSupply: "నీటి సరఫరా",
    ironWork: "ఇనుప పని",
    construction: "నిర్మాణం",
    porterServices: "పోర్టర్ సేవలు",
    acRepair: "ఎసి రిపేర్",
    paintingServices: "పెయింటింగ్ సేవలు",
    cleaningServices: "శుభ్రపరచు సేవలు",
    pestControl: "చీడపీడల నియంత్రణ",
    securityServices: "భద్రతా సేవలు",
    gardeningServices: "తోటమాలి సేవలు",
    applianceRepair: "ఉపకరణాల మరమ్మత్తు",
    
    // Service descriptions
    electricianDesc: "విద్యుత్ ఇన్‌స్టాలేషన్లు, మరమ్మత్తులు మరియు నిర్వహణ సేవలు",
    plumberDesc: "ప్లంబింగ్ ఇన్‌స్టాలేషన్లు, మరమ్మత్తులు మరియు అత్యవసర సేవలు",
    carpenterDesc: "ఫర్నిచర్ తయారీ, మరమ్మత్తులు మరియు చెక్క పని సేవలు",
    mechanicDesc: "వాహనాల మరమ్మత్తు, నిర్వహణ మరియు ఆటోమోటివ్ సేవలు",
    houseLaborDesc: "సాధారణ గృహ పని మరియు నిర్వహణ సేవలు",
    tvInstallationDesc: "టీవీ మౌంటింగ్, సెటప్ మరియు ఇన్‌స్టాలేషన్ సేవలు",
    drainageCleaningDesc: "కాలువ శుభ్రపరచడం, అన్‌బ్లాకింగ్ మరియు నిర్వహణ",
    waterSupplyDesc: "నీటి కనెక్షన్, పంప్ ఇన్‌స్టాలేషన్ మరియు మరమ్మత్తులు",
    ironWorkDesc: "మెటల్ ఫాబ్రికేషన్, వెల్డింగ్ మరియు ఇనుప పని సేవలు",
    constructionDesc: "భవన నిర్మాణం, పునర్నిర్మాణం మరియు సివిల్ పని",
    porterServicesDesc: "తరలింపు, ప్యాకింగ్ మరియు రవాణా సేవలు",
    acRepairDesc: "ఎయిర్ కండిషనింగ్ ఇన్‌స్టాలేషన్, మరమ్మత్తు మరియు నిర్వహణ",
    paintingServicesDesc: "అంతర్గత మరియు బాహ్య పెయింటింగ్ సేవలు",
    cleaningServicesDesc: "ఇల్లు మరియు కార్యాలయ శుభ్రపరచు సేవలు",
    pestControlDesc: "చీడపీడల నిర్మూలన మరియు నివారణ సేవలు",
    securityServicesDesc: "భద్రతా గార్డు మరియు నిఘా సేవలు",
    gardeningServicesDesc: "తోట నిర్వహణ మరియు ల్యాండ్‌స్కేపింగ్ సేవలు",
    applianceRepairDesc: "గృహ ఉపకరణాల మరమ్మత్తు మరియు నిర్వహణ",
    
    // Why Choose Section
    whyChooseTitle: "Need2Fix ఎందుకు ఎంచుకోవాలి?",
    whyChooseSubtitle: "మేము సాంకేతికత, నమ్మకం మరియు పారదర్శకతతో గృహ సేవలలో విప్లవం చేస్తున్నాము",
    
    lightningFast: "మెరుపు వేగం",
    lightningFastDesc: "30 నిమిషాలలోపు ధృవీకరించబడిన నిపుణులతో కనెక్ట్ అవ్వండి",
    lightningFastStats: "30 నిమిషాల సగటు",
    
    verified: "100% ధృవీకరించబడింది",
    verifiedDesc: "అన్ని సేవా ప్రదాతలు పూర్తి నేపథ్య ధృవీకరణకు లోనవుతారు",
    verifiedStats: "నేపథ్యం తనిఖీ చేయబడింది",
    
    qualityAssured: "నాణ్యత హామీ",
    qualityAssuredDesc: "వేలాది కస్టమర్లచే రేట్ చేయబడింది సంతృప్తి హామీతో",
    qualityAssuredStats: "4.8★ రేటింగ్",
    
    expertNetwork: "నిపుణుల నెట్‌వర్క్",
    expertNetworkDesc: "బహుళ సేవా వర్గాలలో నైపుణ్యం కలిగిన నిపుణులకు ప్రాప్యత",
    expertNetworkStats: "1000+ నిపుణులు",
    
    transparentPricing: "పారదర్శక ధర",
    transparentPricingDesc: "దాచిన ఛార్జీలు లేవు, వివరణాత్మక విభజనతో ముందస్తు ధర",
    transparentPricingStats: "దాచిన ఫీజులు లేవు",
    
    growingNetwork: "పెరుగుతున్న నెట్‌వర్క్",
    growingNetworkDesc: "కొత్త నగరాలు మరియు సేవలతో భారతదేశంలో విస్తరిస్తోంది",
    growingNetworkStats: "100+ నగరాలు",
    
    // Footer
    footerBrand: "Need2Fix",
    footerDescription: "భారతదేశం అంతటా మిమ్మల్ని విశ్వసనీయ స్థానిక సేవా ప్రదాతలతో కనెక్ట్ చేయడం. అన్ని గృహ మరియు వృత్తిపరమైన సేవలకు మీ వన్-స్టాప్ సొల్యూషన్.",
    availableAcrossIndia: "భారతదేశం అంతటా అందుబాటులో",
    ourServices: "మా సేవలు",
    andManyMore: "ఇంకా చాలా ఎక్కువ...",
    contactUs: "మమ్మల్ని సంప్రదించండి",
    whyNeed2Fix: "Need2Fix ఎందుకు?",
    whyNeed2FixDesc: "మీకు అత్యవసరంగా విశ్వసనీయ సేవా ప్రదాతలను కనుగొనడంలో ఉన్న సాధారణ సమస్యను మేము పరిష్కరిస్తాము. ఇకపై స్నేహితులను కాంటాక్ట్ నంబర్లు అడగాల్సిన అవసరం లేదు లేదా నమ్మకం గురించి ఆందోళన చెందాల్సిన అవసరం లేదు - మేము మిమ్మల్ని తక్షణమే ధృవీకరించబడిన నిపుణులతో కనెక్ట్ చేస్తాము.",
    madeWithLove: "ప్రేమతో తయారు చేయబడింది",
    forCommunities: "కమ్యూనిటీలను కనెక్ట్ చేయడం కోసం",
    developedBy: "G.Thangella చేత అభివృద్ధి చేయబడింది",
    copyrightText: "© 2024 Need2Fix. భారతదేశంలో సేవా ప్రදాతలు మరియు కస్టమర్ల మధ్య అంతరాన్ని తగ్గించడం.",
    
    // Service Modal
    availableServiceProviders: "అందుబాటులో ఉన్న సేవా ప్రదాతలు",
    closeModal: "మూసివేయండి",
    callNow: "ఇప్పుడే కాల్ చేయండి",
    whatsappContact: "వాట్సాప్",
    registerAsProvider: "సేవా ప్రదాతగా నమోదు చేసుకోండి",
    
    // Service Provider Registration
    registerTitle: "సేవా ప్రదాత - ఇక్కడ నమోదు చేసుకోండి",
    registerSubtitle: "విశ్వసనీయ నిపుణుల మా నెట్‌వర్క్‌లో చేరండి మరియు మీ వ్యాపారాన్ని పెంచుకోండి",
    personalInfo: "వ్యక్తిగత సమాచారం",
    fullName: "పూర్తి పేరు",
    fullNamePlaceholder: "మీ పూర్తి పేరును నమోదు చేయండి",
    phoneNumber: "ఫోన్ నంబర్",
    phoneNumberPlaceholder: "మీ ఫోన్ నంబర్‌ను నమోదు చేయండి",
    email: "ఇమెయిల్ చిరునామా",
    emailPlaceholder: "మీ ఇమెయిల్ చిరునామాను నమోదు చేయండి",
    age: "వయస్సు",
    agePlaceholder: "మీ వయస్సును నమోదు చేయండి",
    
    serviceDetails: "సేవా వివరాలు",
    serviceType: "సేవా రకం",
    selectService: "మీ సేవను ఎంచుకోండి",
    experience: "అనుభవ సంవత్సరాలు",
    experiencePlaceholder: "అనుభవ సంవత్సరాలను నమోదు చేయండి",
    skills: "నైపుణ్యాలు & ప్రత్యేకతలు",
    skillsPlaceholder: "మీ నైపుణ్యాలు మరియు ప్రత్యేకతలను వివరించండి",
    
    locationInfo: "స్థాన సమాచారం",
    city: "నగరం",
    cityPlaceholder: "మీ నగరాన్ని నమోదు చేయండి",
    area: "ప్రాంతం/లొకేషన్",
    areaPlaceholder: "మీ ప్రాంతం లేదా లొకేషన్‌ను నమోదు చేయండి",
    pincode: "పిన్‌కోడ్",
    pincodePlaceholder: "మీ పిన్‌కోడ్‌ను నమోదు చేయండి",
    
    additionalInfo: "అదనపు సమాచారం",
    availability: "అందుబాటు",
    availabilityPlaceholder: "ఉదా., సోమవారం నుండి శనివారం, ఉదయం 9 నుండి సాయంత్రం 6 వరకు",
    priceRange: "ధర పరిధి",
    priceRangePlaceholder: "ఉదా., ₹500-1000 ఒక్కో సేవకు",
    description: "మీ గురించి",
    descriptionPlaceholder: "మీ గురించి మరియు మీ సేవల గురించి చెప్పండి",
    
    submitViaWhatsApp: "వాట్సాప్ ద్వారా సమర్పించండి",
    callNowButton: "ఇప్పుడే కాల్ చేయండి",
    noWhatsAppText: "వాట్సాప్ లేదా? మా టీమ్‌తో నేరుగా మీ సేవను నమోదు చేయడానికి 8499090369కి కాల్ చేయండి.",
    
    // Form validation
    required: "ఈ ఫీల్డ్ అవసరం",
    invalidEmail: "దయచేసి చెల్లుబాటు అయ్యే ఇమెయిల్ చిరునామాను నమోదు చేయండి",
    invalidPhone: "దయచేసి చెల్లుబాటు అయ్యే ఫోన్ నంబర్‌ను నమోదు చేయండి",
    invalidAge: "దయచేసి చెల్లుబాటు అయ్యే వయస్సును నమోదు చేయండి",
    
    // Languages
    english: "English",
    hindi: "हिन्दी",
    telugu: "తెలుగు"
  }
};

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'hi' | 'te'>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
