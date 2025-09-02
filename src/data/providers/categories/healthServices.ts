import { ServiceProvider } from '../../types';
import { SERVICE_AREAS } from '../../constants/serviceAreas';
import { CONTACT_CONFIG } from '../../../config/contact';

export const waterPurifierServices: ServiceProvider[] = [
  // Mumbai
  {
    id: "purifier_mumbai_001",
    name: "AquaCare Services",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["water-purifier-service"],
    location: { 
      state: "Maharashtra", 
      city: "Mumbai", 
      area: "Juhu",
      serviceAreas: SERVICE_AREAS.MUMBAI
    },
    rating: 4.8,
    experience: "12 years",
    specialties: ["RO installation", "Filter replacement", "Annual maintenance"],
    availability: "8 AM - 7 PM",
    pricing: "₹300-1500 per service"
  },

  // Hyderabad
  {
    id: "purifier_hyderabad_001",
    name: "Pure Water Solutions",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["water-purifier-service"],
    location: { 
      state: "Telangana", 
      city: "Hyderabad", 
      area: "Madhapur",
      serviceAreas: ["Dilsukhnagar", "Kukatpally", "Madhapur", "Ameerpet", "Secunderabad"]
    },
    rating: 4.7,
    experience: "9 years",
    specialties: ["All brands service", "Water testing", "Installation"],
    availability: "9 AM - 6 PM",
    pricing: "₹400-1800 per service"
  },

  // Delhi
  {
    id: "purifier_delhi_001",
    name: "H2O Care Center",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["water-purifier-service"],
    location: { 
      state: "Delhi", 
      city: "Delhi", 
      area: "Janakpuri",
      serviceAreas: SERVICE_AREAS.DELHI
    },
    rating: 4.9,
    experience: "15 years",
    specialties: ["RO/UV/UF service", "Emergency repair", "Home visits"],
    availability: "8 AM - 8 PM",
    pricing: "₹350-2000 per service"
  },

  // Bengaluru
  {
    id: "purifier_bengaluru_001",
    name: "Crystal Clear Tech",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["water-purifier-service"],
    location: {
      state: "Karnataka",
      city: "Bengaluru",
      area: "Whitefield",
      serviceAreas: SERVICE_AREAS.BENGALURU
    },
    rating: 4.6,
    experience: "10 years",
    specialties: ["RO installation", "Cartridge cleaning", "AMC services"],
    availability: "9 AM - 7 PM",
    pricing: "₹350-1700 per service"
  },

  // Chennai
  {
    id: "purifier_chennai_001",
    name: "Aqua Fresh Experts",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["water-purifier-service"],
    location: {
      state: "Tamil Nadu",
      city: "Chennai",
      area: "T. Nagar",
      serviceAreas: SERVICE_AREAS.CHENNAI
    },
    rating: 4.7,
    experience: "11 years",
    specialties: ["Filter changes", "New installations", "TDS adjustments"],
    availability: "8 AM - 6 PM",
    pricing: "₹300-1600 per service"
  },

  // Kolkata
  {
    id: "purifier_kolkata_001",
    name: "Ganga RO Services",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["water-purifier-service"],
    location: {
      state: "West Bengal",
      city: "Kolkata",
      area: "Behala",
      serviceAreas: SERVICE_AREAS.KOLKATA
    },
    rating: 4.5,
    experience: "8 years",
    specialties: ["RO/UV filter service", "Pipe fitting", "Emergency visits"],
    availability: "9 AM - 6 PM",
    pricing: "₹400-1800 per service"
  },

  // Ahmedabad
  {
    id: "purifier_ahmedabad_001",
    name: "Shuddh Jal Solutions",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["water-purifier-service"],
    location: {
      state: "Gujarat",
      city: "Ahmedabad",
      area: "Satellite",
      serviceAreas: SERVICE_AREAS.AHMEDABAD
    },
    rating: 4.6,
    experience: "10 years",
    specialties: ["RO servicing", "Mineral filter installation", "Leakage fix"],
    availability: "8 AM - 6 PM",
    pricing: "₹350-1600 per service"
  },

  // Pune
  {
    id: "purifier_pune_001",
    name: "PureDrop Technicians",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["water-purifier-service"],
    location: {
      state: "Maharashtra",
      city: "Pune",
      area: "Baner",
      serviceAreas: SERVICE_AREAS.PUNE
    },
    rating: 4.7,
    experience: "9 years",
    specialties: ["All-brand purifier service", "RO motor replacement", "Free TDS check"],
    availability: "9 AM - 7 PM",
    pricing: "₹300-1700 per service"
  }
];
