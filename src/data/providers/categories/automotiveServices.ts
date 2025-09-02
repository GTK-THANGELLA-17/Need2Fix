import { ServiceProvider } from '../../types';
import { SERVICE_AREAS } from '../../constants/serviceAreas';
import { CONTACT_CONFIG } from '../../../config/contact';

export const mechanics: ServiceProvider[] = [
  {
    id: "mech_mumbai_001",
    name: "Deepak Patil",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["mechanic"],
    location: { 
      state: "Maharashtra", 
      city: "Mumbai", 
      area: "Andheri West",
      serviceAreas: SERVICE_AREAS.MUMBAI
    },
    rating: 4.5,
    experience: "10 years",
    specialties: ["Car servicing", "Bike repairs", "Engine diagnostics"],
    availability: "8 AM - 8 PM",
    pricing: "₹500-3000 per service"
  },
  {
    id: "mech_delhi_001",
    name: "Rohit Sharma",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["mechanic"],
    location: { 
      state: "Delhi", 
      city: "Delhi", 
      area: "Lajpat Nagar",
      serviceAreas: SERVICE_AREAS.DELHI
    },
    rating: 4.4,
    experience: "7 years",
    specialties: ["Auto repairs", "Battery replacement", "Tyre services"],
    availability: "9 AM - 7 PM",
    pricing: "₹400-2500 per service"
  },
  {
    id: "mech_kolkata_001",
    name: "Arjun Banerjee",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["mechanic"],
    location: {
      state: "West Bengal",
      city: "Kolkata",
      area: "Salt Lake",
      serviceAreas: SERVICE_AREAS.KOLKATA
    },
    rating: 4.3,
    experience: "8 years",
    specialties: ["Car servicing", "AC repairs", "Electrical diagnostics"],
    availability: "9 AM - 6 PM",
    pricing: "₹500-2500 per service"
  },
  {
    id: "mech_bengaluru_001",
    name: "Ravi Kumar",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["mechanic"],
    location: {
      state: "Karnataka",
      city: "Bengaluru",
      area: "Koramangala",
      serviceAreas: SERVICE_AREAS.BENGALURU
    },
    rating: 4.6,
    experience: "12 years",
    specialties: ["Bike repairs", "Engine diagnostics", "Oil change"],
    availability: "8 AM - 8 PM",
    pricing: "₹400-2800 per service"
  },
  {
    id: "mech_chennai_001",
    name: "Suresh Reddy",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["mechanic"],
    location: {
      state: "Tamil Nadu",
      city: "Chennai",
      area: "Adyar",
      serviceAreas: SERVICE_AREAS.CHENNAI
    },
    rating: 4.4,
    experience: "9 years",
    specialties: ["Tyre services", "Battery replacement", "Car servicing"],
    availability: "9 AM - 7 PM",
    pricing: "₹450-2600 per service"
  },
  {
    id: "mech_hyderabad_001",
    name: "Vikram Rao",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["mechanic"],
    location: {
      state: "Telangana",
      city: "Hyderabad",
      area: "Banjara Hills",
      serviceAreas: SERVICE_AREAS.HYDERABAD
    },
    rating: 4.5,
    experience: "10 years",
    specialties: ["Engine diagnostics", "AC repair", "Bike repairs"],
    availability: "8 AM - 8 PM",
    pricing: "₹500-3000 per service"
  },
  {
    id: "mech_ahmedabad_001",
    name: "Nikhil Patel",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["mechanic"],
    location: {
      state: "Gujarat",
      city: "Ahmedabad",
      area: "Navrangpura",
      serviceAreas: SERVICE_AREAS.AHMEDABAD
    },
    rating: 4.2,
    experience: "7 years",
    specialties: ["Car servicing", "Suspension repair", "Electrical diagnostics"],
    availability: "9 AM - 6 PM",
    pricing: "₹400-2400 per service"
  },
  {
    id: "mech_surat_001",
    name: "Manoj Desai",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["mechanic"],
    location: {
      state: "Gujarat",
      city: "Surat",
      area: "Adajan",
      serviceAreas: SERVICE_AREAS.SURAT
    },
    rating: 4.3,
    experience: "8 years",
    specialties: ["Tyre services", "Battery replacement", "Car servicing"],
    availability: "9 AM - 7 PM",
    pricing: "₹450-2500 per service"
  },
  {
    id: "mech_pune_001",
    name: "Sachin More",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["mechanic"],
    location: {
      state: "Maharashtra",
      city: "Pune",
      area: "Kalyani Nagar",
      serviceAreas: SERVICE_AREAS.PUNE
    },
    rating: 4.4,
    experience: "9 years",
    specialties: ["Bike repairs", "Engine diagnostics", "Oil change"],
    availability: "8 AM - 8 PM",
    pricing: "₹500-2800 per service"
  },
  {
    id: "mech_jaipur_001",
    name: "Ramesh Singh",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["mechanic"],
    location: {
      state: "Rajasthan",
      city: "Jaipur",
      area: "Vaishali Nagar",
      serviceAreas: SERVICE_AREAS.JAIPUR
    },
    rating: 4.1,
    experience: "6 years",
    specialties: ["Tyre services", "Battery replacement", "General servicing"],
    availability: "9 AM - 6 PM",
    pricing: "₹400-2300 per service"
  }
];
