import { ServiceProvider } from '../../types';
import { SERVICE_AREAS } from '../../constants/serviceAreas';
import { CONTACT_CONFIG } from '../../../config/contact';

export const laptopRepairServices: ServiceProvider[] = [
  {
    id: "laptop_mumbai_001",
    name: "TechFix Solutions",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["laptop-repair"],
    location: { 
      state: "Maharashtra", 
      city: "Mumbai", 
      area: "Andheri West",
      serviceAreas: SERVICE_AREAS.MUMBAI
    },
    rating: 4.7,
    experience: "8 years",
    specialties: ["Hardware repair", "Software installation", "Data recovery"],
    availability: "10 AM - 8 PM",
    pricing: "₹300-2000 per service"
  },
  // Hyderabad Laptop Repair
  {
    id: "laptop_hyderabad_001",
    name: "Digital Care Center",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["laptop-repair"],
    location: { 
      state: "Telangana", 
      city: "Hyderabad", 
      area: "Ameerpet",
      serviceAreas: ["Dilsukhnagar", "Kukatpally", "Madhapur", "Ameerpet", "Secunderabad"]
    },
    rating: 4.6,
    experience: "6 years",
    specialties: ["Screen replacement", "Motherboard repair", "Virus removal"],
    availability: "9 AM - 7 PM",
    pricing: "₹400-2500 per service"
  },
  // Delhi Laptop Repair
  {
    id: "laptop_delhi_001",
    name: "Laptop Clinic",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["laptop-repair"],
    location: { 
      state: "Delhi", 
      city: "Delhi", 
      area: "Karol Bagh",
      serviceAreas: SERVICE_AREAS.DELHI
    },
    rating: 4.8,
    experience: "10 years",
    specialties: ["All brands repair", "Hardware upgrade", "Performance optimization"],
    availability: "9 AM - 9 PM",
    pricing: "₹500-3000 per service"
  }
];

export const mobileRepairServices: ServiceProvider[] = [
  {
    id: "mobile_mumbai_001",
    name: "Mobile Doctor",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["mobile-repair"],
    location: { 
      state: "Maharashtra", 
      city: "Mumbai", 
      area: "Bandra",
      serviceAreas: SERVICE_AREAS.MUMBAI
    },
    rating: 4.5,
    experience: "5 years",
    specialties: ["Screen replacement", "Battery replacement", "Water damage repair"],
    availability: "10 AM - 8 PM",
    pricing: "₹200-1500 per service"
  },
  // Hyderabad Mobile Repair
  {
    id: "mobile_hyderabad_001",
    name: "Phone Fix Pro",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["mobile-repair"],
    location: { 
      state: "Telangana", 
      city: "Hyderabad", 
      area: "Kukatpally",
      serviceAreas: ["Dilsukhnagar", "Kukatpally", "Madhapur", "Ameerpet", "Secunderabad"]
    },
    rating: 4.7,
    experience: "7 years",
    specialties: ["All brands repair", "Software issues", "Hardware replacement"],
    availability: "9 AM - 8 PM",
    pricing: "₹250-2000 per service"
  },
  // Delhi Mobile Repair
  {
    id: "mobile_delhi_001",
    name: "Smart Repair Hub",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["mobile-repair"],
    location: { 
      state: "Delhi", 
      city: "Delhi", 
      area: "Lajpat Nagar",
      serviceAreas: SERVICE_AREAS.DELHI
    },
    rating: 4.6,
    experience: "6 years",
    specialties: ["iPhone repair", "Android repair", "Quick service"],
    availability: "10 AM - 9 PM",
    pricing: "₹300-2500 per service"
  }
];

export const tvInstallation: ServiceProvider[] = [
  {
    id: "tv_mumbai_001",
    name: "Anil Jain",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["tv-installation"],
    location: { 
      state: "Maharashtra", 
      city: "Mumbai", 
      area: "Bandra",
      serviceAreas: SERVICE_AREAS.MUMBAI
    },
    rating: 4.8,
    experience: "6 years",
    specialties: ["Wall mounting", "Setup & calibration", "Cable management"],
    availability: "10 AM - 8 PM",
    pricing: "₹800-2000 per installation"
  },
  {
    id: "tv_bangalore_001",
    name: "Sanjay Kumar",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["tv-installation"],
    location: { 
      state: "Karnataka", 
      city: "Bangalore", 
      area: "Koramangala",
      serviceAreas: SERVICE_AREAS.BANGALORE
    },
    rating: 4.7,
    experience: "5 years",
    specialties: ["Smart TV setup", "Home theater", "Sound system installation"],
    availability: "9 AM - 7 PM",
    pricing: "₹1000-2500 per installation"
  },
  {
    id: "tv_hyderabad_001",
    name: "Srinivas Reddy",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["tv-installation"],
    location: { 
      state: "Telangana", 
      city: "Hyderabad", 
      area: "Dilsukhnagar",
      serviceAreas: ["Dilsukhnagar", "Kukatpally", "Madhapur", "Ameerpet", "Secunderabad"]
    },
    rating: 4.6,
    experience: "4 years",
    specialties: ["LED TV mounting", "Cable management", "Audio setup"],
    availability: "9 AM - 8 PM",
    pricing: "₹700-1800 per installation"
  },
  {
    id: "tv_hyderabad_002",
    name: "Tech Vision Hyderabad",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["tv-installation"],
    location: { 
      state: "Telangana", 
      city: "Hyderabad", 
      area: "Kukatpally",
      serviceAreas: ["Dilsukhnagar", "Kukatpally", "Madhapur", "Ameerpet", "Secunderabad"]
    },
    rating: 4.7,
    experience: "6 years",
    specialties: ["Smart TV installation", "Home theater setup", "Projector mounting"],
    availability: "8 AM - 9 PM",
    pricing: "₹900-2200 per installation"
  }
];

export const wifiInstallation: ServiceProvider[] = [
  {
    id: "wifi_mumbai_001",
    name: "Rahul Tech Solutions",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["wifi-installation"],
    location: { 
      state: "Maharashtra", 
      city: "Mumbai", 
      area: "Bandra",
      serviceAreas: SERVICE_AREAS.MUMBAI
    },
    rating: 4.8,
    experience: "6 years",
    specialties: ["Router setup", "Network security", "WiFi optimization"],
    availability: "9 AM - 8 PM",
    pricing: "₹800-2500 per installation"
  },
  {
    id: "wifi_mumbai_002",
    name: "Mumbai WiFi Experts",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["wifi-installation"],
    location: { 
      state: "Maharashtra", 
      city: "Mumbai", 
      area: "Malad",
      serviceAreas: SERVICE_AREAS.MUMBAI
    },
    rating: 4.6,
    experience: "4 years",
    specialties: ["Home networking", "Range extenders", "Smart home setup"],
    availability: "8 AM - 7 PM",
    pricing: "₹600-2000 per installation"
  },
  {
    id: "wifi_hyderabad_001",
    name: "Hyderabad Net Solutions",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["wifi-installation"],
    location: { 
      state: "Telangana", 
      city: "Hyderabad", 
      area: "Dilsukhnagar",
      serviceAreas: ["Dilsukhnagar", "Kukatpally", "Madhapur", "Ameerpet", "Secunderabad"]
    },
    rating: 4.7,
    experience: "5 years",
    specialties: ["Fiber installation", "Network troubleshooting", "WiFi boosters"],
    availability: "9 AM - 9 PM",
    pricing: "₹700-2200 per installation"
  },
  {
    id: "wifi_hyderabad_002",
    name: "TechConnect Hyderabad",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["wifi-installation"],
    location: { 
      state: "Telangana", 
      city: "Hyderabad", 
      area: "Kukatpally",
      serviceAreas: ["Dilsukhnagar", "Kukatpally", "Madhapur", "Ameerpet", "Secunderabad"]
    },
    rating: 4.5,
    experience: "3 years",
    specialties: ["Home WiFi setup", "Business networking", "Router configuration"],
    availability: "8 AM - 8 PM",
    pricing: "₹500-1800 per installation"
  },
  {
    id: "wifi_bangalore_001",
    name: "Bangalore WiFi Pro",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["wifi-installation"],
    location: { 
      state: "Karnataka", 
      city: "Bangalore", 
      area: "Koramangala",
      serviceAreas: SERVICE_AREAS.BANGALORE
    },
    rating: 4.9,
    experience: "7 years",
    specialties: ["Enterprise WiFi", "Mesh networks", "High-speed setup"],
    availability: "24/7",
    pricing: "₹1000-3000 per installation"
  },
  {
    id: "wifi_bangalore_002",
    name: "NetFix Bangalore",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["wifi-installation"],
    location: { 
      state: "Karnataka", 
      city: "Bangalore", 
      area: "Whitefield",
      serviceAreas: SERVICE_AREAS.BANGALORE
    },
    rating: 4.6,
    experience: "4 years",
    specialties: ["Home automation", "Smart WiFi", "Network security"],
    availability: "9 AM - 8 PM",
    pricing: "₹800-2400 per installation"
  },
  {
    id: "wifi_chennai_001",
    name: "Chennai Net Masters",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["wifi-installation"],
    location: { 
      state: "Tamil Nadu", 
      city: "Chennai", 
      area: "T Nagar",
      serviceAreas: SERVICE_AREAS.CHENNAI
    },
    rating: 4.7,
    experience: "6 years",
    specialties: ["Coastal networking", "Weather-resistant setup", "High-speed WiFi"],
    availability: "8 AM - 9 PM",
    pricing: "₹700-2300 per installation"
  },
  {
    id: "wifi_chennai_002",
    name: "TechWave Chennai",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["wifi-installation"],
    location: { 
      state: "Tamil Nadu", 
      city: "Chennai", 
      area: "Anna Nagar",
      serviceAreas: SERVICE_AREAS.CHENNAI
    },
    rating: 4.4,
    experience: "3 years",
    specialties: ["Home networking", "WiFi troubleshooting", "Router repair"],
    availability: "9 AM - 7 PM",
    pricing: "₹600-2000 per installation"
  }
];

export const dishInstallation: ServiceProvider[] = [
  {
    id: "dish_mumbai_001",
    name: "Mumbai Dish Pro",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["dish-installation"],
    location: { 
      state: "Maharashtra", 
      city: "Mumbai", 
      area: "Bandra",
      serviceAreas: SERVICE_AREAS.MUMBAI
    },
    rating: 4.8,
    experience: "8 years",
    specialties: ["DTH installation", "Satellite alignment", "Multi-room setup"],
    availability: "8 AM - 8 PM",
    pricing: "₹500-1500 per installation"
  },
  {
    id: "dish_mumbai_002",
    name: "SatTech Mumbai",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["dish-installation"],
    location: { 
      state: "Maharashtra", 
      city: "Mumbai", 
      area: "Malad",
      serviceAreas: SERVICE_AREAS.MUMBAI
    },
    rating: 4.6,
    experience: "5 years",
    specialties: ["HD dish setup", "Signal optimization", "Cable management"],
    availability: "9 AM - 7 PM",
    pricing: "₹400-1200 per installation"
  },
  {
    id: "dish_hyderabad_001",
    name: "Hyderabad Satellite",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["dish-installation"],
    location: { 
      state: "Telangana", 
      city: "Hyderabad", 
      area: "Dilsukhnagar",
      serviceAreas: ["Dilsukhnagar", "Kukatpally", "Madhapur", "Ameerpet", "Secunderabad"]
    },
    rating: 4.7,
    experience: "7 years",
    specialties: ["Professional mounting", "4K setup", "Weather protection"],
    availability: "7 AM - 9 PM",
    pricing: "₹600-1600 per installation"
  },
  {
    id: "dish_hyderabad_002",
    name: "DishFix Hyderabad",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["dish-installation"],
    location: { 
      state: "Telangana", 
      city: "Hyderabad", 
      area: "Kukatpally",
      serviceAreas: ["Dilsukhnagar", "Kukatpally", "Madhapur", "Ameerpet", "Secunderabad"]
    },
    rating: 4.5,
    experience: "4 years",
    specialties: ["Quick installation", "Signal boosting", "Maintenance"],
    availability: "8 AM - 8 PM",
    pricing: "₹450-1300 per installation"
  },
  {
    id: "dish_bangalore_001",
    name: "Bangalore Dish Masters",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["dish-installation"],
    location: { 
      state: "Karnataka", 
      city: "Bangalore", 
      area: "Koramangala",
      serviceAreas: SERVICE_AREAS.BANGALORE
    },
    rating: 4.9,
    experience: "9 years",
    specialties: ["High-rise installation", "Premium setup", "Tech support"],
    availability: "24/7",
    pricing: "₹800-2000 per installation"
  },
  {
    id: "dish_bangalore_002",
    name: "SkyConnect Bangalore",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["dish-installation"],
    location: { 
      state: "Karnataka", 
      city: "Bangalore", 
      area: "Whitefield",
      serviceAreas: SERVICE_AREAS.BANGALORE
    },
    rating: 4.6,
    experience: "6 years",
    specialties: ["Smart TV integration", "Multiple connections", "HD channels"],
    availability: "8 AM - 9 PM",
    pricing: "₹700-1800 per installation"
  },
  {
    id: "dish_chennai_001",
    name: "Chennai Satellite Pro",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["dish-installation"],
    location: { 
      state: "Tamil Nadu", 
      city: "Chennai", 
      area: "T Nagar",
      serviceAreas: SERVICE_AREAS.CHENNAI
    },
    rating: 4.7,
    experience: "8 years",
    specialties: ["Coastal installation", "Storm-resistant mounting", "Digital setup"],
    availability: "7 AM - 8 PM",
    pricing: "₹600-1700 per installation"
  },
  {
    id: "dish_chennai_002",
    name: "DigiDish Chennai",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["dish-installation"],
    location: { 
      state: "Tamil Nadu", 
      city: "Chennai", 
      area: "Anna Nagar",
      serviceAreas: SERVICE_AREAS.CHENNAI
    },
    rating: 4.4,
    experience: "4 years",
    specialties: ["Budget installation", "Quick service", "Local channels"],
    availability: "8 AM - 7 PM",
    pricing: "₹400-1200 per installation"
  }
];
