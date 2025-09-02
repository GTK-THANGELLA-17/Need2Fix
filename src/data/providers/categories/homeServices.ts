import { ServiceProvider } from '../../types';
import { SERVICE_AREAS } from '../../constants/serviceAreas';
import { CONTACT_CONFIG } from '../../../config/contact';

export const electricians: ServiceProvider[] = [
  {
    id: "elec_mumbai_001",
    name: "Rajesh Kumar",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["electrician"],
    location: { 
      state: "Maharashtra", 
      city: "Mumbai", 
      area: "Andheri West",
      serviceAreas: SERVICE_AREAS.MUMBAI
    },
    rating: 4.8,
    experience: "8 years",
    specialties: ["Home wiring", "Industrial electrical", "Emergency repairs"],
    availability: "24/7",
    pricing: "₹500-1500 per visit"
  },
  {
    id: "elec_mumbai_002",
    name: "Vikram Patil",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["electrician"],
    location: { 
      state: "Maharashtra", 
      city: "Mumbai", 
      area: "Bandra",
      serviceAreas: SERVICE_AREAS.MUMBAI
    },
    rating: 4.7,
    experience: "10 years",
    specialties: ["Smart home setup", "LED installations", "Power backup"],
    availability: "9 AM - 9 PM",
    pricing: "₹600-1800 per visit"
  },
  {
    id: "elec_mumbai_003",
    name: "PowerFix Mumbai",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["electrician"],
    location: { 
      state: "Maharashtra", 
      city: "Mumbai", 
      area: "Powai",
      serviceAreas: SERVICE_AREAS.MUMBAI
    },
    rating: 4.6,
    experience: "5 years",
    specialties: ["Quick repairs", "Safety installations", "Modern wiring"],
    availability: "8 AM - 10 PM",
    pricing: "₹450-1400 per visit"
  },
  // Hyderabad Electricians
  {
    id: "elec_hyderabad_001",
    name: "Ravi Kumar",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["electrician"],
    location: { 
      state: "Telangana", 
      city: "Hyderabad", 
      area: "Dilsukhnagar",
      serviceAreas: ["Dilsukhnagar", "Kukatpally", "Madhapur", "Ameerpet", "Secunderabad"]
    },
    rating: 4.9,
    experience: "12 years",
    specialties: ["Residential wiring", "Commercial electrical", "Solar installation"],
    availability: "24/7",
    pricing: "₹550-1600 per visit"
  },
  {
    id: "elec_hyderabad_002",
    name: "Suresh Reddy",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["electrician"],
    location: { 
      state: "Telangana", 
      city: "Hyderabad", 
      area: "Kukatpally",
      serviceAreas: ["Dilsukhnagar", "Kukatpally", "Madhapur", "Ameerpet", "Secunderabad"]
    },
    rating: 4.6,
    experience: "7 years",
    specialties: ["Home automation", "Switch repairs", "Fan installation"],
    availability: "8 AM - 8 PM",
    pricing: "₹450-1400 per visit"
  },
  {
    id: "elec_hyderabad_003",
    name: "ElectroTech Hyderabad",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["electrician"],
    location: { 
      state: "Telangana", 
      city: "Hyderabad", 
      area: "Madhapur",
      serviceAreas: ["Dilsukhnagar", "Kukatpally", "Madhapur", "Ameerpet", "Secunderabad"]
    },
    rating: 4.8,
    experience: "9 years",
    specialties: ["Industrial work", "Home automation", "LED solutions"],
    availability: "24/7",
    pricing: "₹600-1700 per visit"
  },
  // Bangalore Electricians
  {
    id: "elec_bangalore_001",
    name: "Suresh Reddy",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["electrician"],
    location: { 
      state: "Karnataka", 
      city: "Bangalore", 
      area: "Koramangala",
      serviceAreas: SERVICE_AREAS.BANGALORE
    },
    rating: 4.9,
    experience: "10 years",
    specialties: ["Smart home automation", "LED installations", "Circuit repairs"],
    availability: "24/7",
    pricing: "₹600-2000 per visit"
  },
  {
    id: "elec_bangalore_002",
    name: "Krishna Murthy",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["electrician"],
    location: { 
      state: "Karnataka", 
      city: "Bangalore", 
      area: "Whitefield",
      serviceAreas: SERVICE_AREAS.BANGALORE
    },
    rating: 4.8,
    experience: "9 years",
    specialties: ["Industrial wiring", "Emergency repairs", "Power solutions"],
    availability: "24/7",
    pricing: "₹700-2200 per visit"
  },
  {
    id: "elec_bangalore_003",
    name: "BangaloreElectric Pro",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["electrician"],
    location: { 
      state: "Karnataka", 
      city: "Bangalore", 
      area: "Indiranagar",
      serviceAreas: SERVICE_AREAS.BANGALORE
    },
    rating: 4.7,
    experience: "6 years",
    specialties: ["Smart switches", "Power backup", "Electrical upgrades"],
    availability: "9 AM - 9 PM",
    pricing: "₹550-1900 per visit"
  },
  // Chennai Electricians
  {
    id: "elec_chennai_001",
    name: "Muthu Raj",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["electrician"],
    location: { 
      state: "Tamil Nadu", 
      city: "Chennai", 
      area: "T Nagar",
      serviceAreas: SERVICE_AREAS.CHENNAI
    },
    rating: 4.7,
    experience: "11 years",
    specialties: ["Home electrical", "AC wiring", "Safety installations"],
    availability: "7 AM - 10 PM",
    pricing: "₹500-1700 per visit"
  },
  {
    id: "elec_chennai_002",
    name: "Selvam Kumar",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["electrician"],
    location: { 
      state: "Tamil Nadu", 
      city: "Chennai", 
      area: "Anna Nagar",
      serviceAreas: SERVICE_AREAS.CHENNAI
    },
    rating: 4.5,
    experience: "6 years",
    specialties: ["Residential repairs", "Lighting solutions", "Switch installation"],
    availability: "8 AM - 9 PM",
    pricing: "₹400-1300 per visit"
  },
  {
    id: "elec_chennai_003",
    name: "Chennai PowerPro",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["electrician"],
    location: { 
      state: "Tamil Nadu", 
      city: "Chennai", 
      area: "Velachery",
      serviceAreas: SERVICE_AREAS.CHENNAI
    },
    rating: 4.5,
    experience: "7 years",
    specialties: ["Coastal wiring", "Humidity-resistant work", "Solar integration"],
    availability: "7 AM - 9 PM",
    pricing: "₹500-1600 per visit"
  },
  // Delhi Electricians
  {
    id: "elec_delhi_001",
    name: "Amit Singh",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["electrician"],
    location: { 
      state: "Delhi", 
      city: "Delhi", 
      area: "Lajpat Nagar",
      serviceAreas: SERVICE_AREAS.DELHI
    },
    rating: 4.7,
    experience: "6 years",
    specialties: ["Residential wiring", "Switch installation", "Fan installation"],
    availability: "9 AM - 9 PM",
    pricing: "₹400-1200 per visit"
  }
];

export const plumbers: ServiceProvider[] = [
  // Mumbai Plumbers
  {
    id: "plumb_mumbai_001",
    name: "Prakash Sharma",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["plumber"],
    location: { 
      state: "Maharashtra", 
      city: "Mumbai", 
      area: "Borivali",
      serviceAreas: SERVICE_AREAS.MUMBAI
    },
    rating: 4.6,
    experience: "7 years",
    specialties: ["Pipe repairs", "Bathroom fittings", "Water heater installation"],
    availability: "8 AM - 8 PM",
    pricing: "₹300-1000 per visit"
  },
  {
    id: "plumb_mumbai_002",
    name: "Ganesh Yadav",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["plumber"],
    location: { 
      state: "Maharashtra", 
      city: "Mumbai", 
      area: "Thane",
      serviceAreas: SERVICE_AREAS.MUMBAI
    },
    rating: 4.8,
    experience: "9 years",
    specialties: ["Emergency repairs", "Drain cleaning", "Modern fittings"],
    availability: "24/7",
    pricing: "₹400-1200 per visit"
  },
  {
    id: "plumb_mumbai_003",
    name: "PlumbTech Mumbai",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["plumber"],
    location: { 
      state: "Maharashtra", 
      city: "Mumbai", 
      area: "Malad",
      serviceAreas: SERVICE_AREAS.MUMBAI
    },
    rating: 4.7,
    experience: "6 years",
    specialties: ["High-rise plumbing", "Pressure systems", "Modern fixtures"],
    availability: "8 AM - 9 PM",
    pricing: "₹450-1300 per visit"
  },
  // Hyderabad Plumbers
  {
    id: "plumb_hyderabad_001",
    name: "Narasimha Rao",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["plumber"],
    location: { 
      state: "Telangana", 
      city: "Hyderabad", 
      area: "Dilsukhnagar",
      serviceAreas: ["Dilsukhnagar", "Kukatpally", "Madhapur", "Ameerpet", "Secunderabad"]
    },
    rating: 4.7,
    experience: "8 years",
    specialties: ["Bathroom renovation", "Pipe installation", "Water supply"],
    availability: "7 AM - 9 PM",
    pricing: "₹350-1100 per visit"
  },
  {
    id: "plumb_hyderabad_002",
    name: "Venkat Reddy",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["plumber"],
    location: { 
      state: "Telangana", 
      city: "Hyderabad", 
      area: "Kukatpally",
      serviceAreas: ["Dilsukhnagar", "Kukatpally", "Madhapur", "Ameerpet", "Secunderabad"]
    },
    rating: 4.5,
    experience: "6 years",
    specialties: ["Leak repairs", "Tap installation", "Drainage solutions"],
    availability: "8 AM - 8 PM",
    pricing: "₹300-950 per visit"
  },
  {
    id: "plumb_hyderabad_003",
    name: "HydroFix Hyderabad",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["plumber"],
    location: { 
      state: "Telangana", 
      city: "Hyderabad", 
      area: "Madhapur",
      serviceAreas: ["Dilsukhnagar", "Kukatpally", "Madhapur", "Ameerpet", "Secunderabad"]
    },
    rating: 4.6,
    experience: "5 years",
    specialties: ["Smart plumbing", "Water filtration", "Eco-friendly solutions"],
    availability: "7 AM - 8 PM",
    pricing: "₹400-1100 per visit"
  },
  // Bangalore Plumbers
  {
    id: "plumb_bangalore_001",
    name: "Manoj Kumar",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["plumber"],
    location: { 
      state: "Karnataka", 
      city: "Bangalore", 
      area: "Koramangala",
      serviceAreas: SERVICE_AREAS.BANGALORE
    },
    rating: 4.8,
    experience: "9 years",
    specialties: ["Modern plumbing", "Bathroom renovation", "Emergency repairs"],
    availability: "24/7",
    pricing: "₹500-1500 per visit"
  },
  {
    id: "plumb_bangalore_002",
    name: "Ravi Shankar",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["plumber"],
    location: { 
      state: "Karnataka", 
      city: "Bangalore", 
      area: "Whitefield",
      serviceAreas: SERVICE_AREAS.BANGALORE
    },
    rating: 4.6,
    experience: "7 years",
    specialties: ["Water heater repair", "Pipe fitting", "Bathroom fittings"],
    availability: "8 AM - 9 PM",
    pricing: "₹450-1350 per visit"
  },
  {
    id: "plumb_bangalore_003",
    name: "AquaTech Bangalore",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["plumber"],
    location: { 
      state: "Karnataka", 
      city: "Bangalore", 
      area: "Indiranagar",
      serviceAreas: SERVICE_AREAS.BANGALORE
    },
    rating: 4.8,
    experience: "8 years",
    specialties: ["Tech park plumbing", "Commercial work", "Advanced fittings"],
    availability: "24/7",
    pricing: "₹600-1600 per visit"
  },
  // Chennai Plumbers
  {
    id: "plumb_chennai_001",
    name: "Senthil Kumar",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["plumber"],
    location: { 
      state: "Tamil Nadu", 
      city: "Chennai", 
      area: "T Nagar",
      serviceAreas: SERVICE_AREAS.CHENNAI
    },
    rating: 4.7,
    experience: "10 years",
    specialties: ["Coastal plumbing", "Salt water solutions", "Modern fittings"],
    availability: "7 AM - 8 PM",
    pricing: "₹400-1200 per visit"
  },
  {
    id: "plumb_chennai_002",
    name: "Murugan Raja",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["plumber"],
    location: { 
      state: "Tamil Nadu", 
      city: "Chennai", 
      area: "Anna Nagar",
      serviceAreas: SERVICE_AREAS.CHENNAI
    },
    rating: 4.4,
    experience: "5 years",
    specialties: ["Emergency repairs", "Drain cleaning", "Water supply"],
    availability: "24/7",
    pricing: "₹350-1050 per visit"
  },
  {
    id: "plumb_chennai_003",
    name: "Chennai WaterWorks",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["plumber"],
    location: { 
      state: "Tamil Nadu", 
      city: "Chennai", 
      area: "Velachery",
      serviceAreas: SERVICE_AREAS.CHENNAI
    },
    rating: 4.4,
    experience: "4 years",
    specialties: ["Desalination systems", "Coastal plumbing", "Water treatment"],
    availability: "8 AM - 8 PM",
    pricing: "₹400-1250 per visit"
  },
  // Delhi Plumbers
  {
    id: "plumb_delhi_001",
    name: "Vinod Gupta",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["plumber"],
    location: { 
      state: "Delhi", 
      city: "Delhi", 
      area: "Lajpat Nagar",
      serviceAreas: SERVICE_AREAS.DELHI
    },
    rating: 4.5,
    experience: "5 years",
    specialties: ["Leak repairs", "Drain cleaning", "Tap installation"],
    availability: "24/7",
    pricing: "₹400-1200 per visit"
  }
];

export const carpenters: ServiceProvider[] = [
  // Mumbai Carpenters
  {
    id: "carp_mumbai_001",
    name: "Raman Verma",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["carpenter"],
    location: { 
      state: "Maharashtra", 
      city: "Mumbai", 
      area: "Andheri West",
      serviceAreas: SERVICE_AREAS.MUMBAI
    },
    rating: 4.7,
    experience: "12 years",
    specialties: ["Furniture repair", "Custom cabinets", "Door installation"],
    availability: "9 AM - 6 PM",
    pricing: "₹500-2000 per day"
  },
  {
    id: "carp_mumbai_002",
    name: "Shyam Jadhav",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["carpenter"],
    location: { 
      state: "Maharashtra", 
      city: "Mumbai", 
      area: "Bandra",
      serviceAreas: SERVICE_AREAS.MUMBAI
    },
    rating: 4.9,
    experience: "15 years",
    specialties: ["Modular kitchen", "Wardrobes", "Interior work"],
    availability: "8 AM - 7 PM",
    pricing: "₹800-2500 per day"
  },
  // Hyderabad Carpenters
  {
    id: "carp_hyderabad_001",
    name: "Ramesh Goud",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["carpenter"],
    location: { 
      state: "Telangana", 
      city: "Hyderabad", 
      area: "Dilsukhnagar",
      serviceAreas: ["Dilsukhnagar", "Kukatpally", "Madhapur", "Ameerpet", "Secunderabad"]
    },
    rating: 4.8,
    experience: "11 years",
    specialties: ["Custom furniture", "Wood polishing", "Door frames"],
    availability: "8 AM - 6 PM",
    pricing: "₹600-2200 per day"
  },
  {
    id: "carp_hyderabad_002",
    name: "Krishna Rao",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["carpenter"],
    location: { 
      state: "Telangana", 
      city: "Hyderabad", 
      area: "Kukatpally",
      serviceAreas: ["Dilsukhnagar", "Kukatpally", "Madhapur", "Ameerpet", "Secunderabad"]
    },
    rating: 4.6,
    experience: "9 years",
    specialties: ["Furniture assembly", "Repair work", "Cabinet installation"],
    availability: "9 AM - 7 PM",
    pricing: "₹550-1900 per day"
  },
  // Bangalore Carpenters
  {
    id: "carp_bangalore_001",
    name: "Krishna Murthy",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["carpenter"],
    location: { 
      state: "Karnataka", 
      city: "Bangalore", 
      area: "Koramangala",
      serviceAreas: SERVICE_AREAS.BANGALORE
    },
    rating: 4.9,
    experience: "15 years",
    specialties: ["Modular furniture", "Interior woodwork", "Custom designs"],
    availability: "9 AM - 6 PM",
    pricing: "₹800-2500 per day"
  },
  {
    id: "carp_bangalore_002",
    name: "Ravi Kumar",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["carpenter"],
    location: { 
      state: "Karnataka", 
      city: "Bangalore", 
      area: "Whitefield",
      serviceAreas: SERVICE_AREAS.BANGALORE
    },
    rating: 4.7,
    experience: "10 years",
    specialties: ["Office furniture", "Home renovation", "Wood finishing"],
    availability: "8 AM - 6 PM",
    pricing: "₹700-2300 per day"
  },
  // Chennai Carpenters
  {
    id: "carp_chennai_001",
    name: "Kamal Hassan",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["carpenter"],
    location: { 
      state: "Tamil Nadu", 
      city: "Chennai", 
      area: "T Nagar",
      serviceAreas: SERVICE_AREAS.CHENNAI
    },
    rating: 4.8,
    experience: "13 years",
    specialties: ["Teak furniture", "Traditional woodwork", "Modern designs"],
    availability: "8 AM - 6 PM",
    pricing: "₹700-2400 per day"
  },
  {
    id: "carp_chennai_002",
    name: "Suresh Babu",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["carpenter"],
    location: { 
      state: "Tamil Nadu", 
      city: "Chennai", 
      area: "Anna Nagar",
      serviceAreas: SERVICE_AREAS.CHENNAI
    },
    rating: 4.5,
    experience: "8 years",
    specialties: ["Furniture repair", "Door installation", "Custom cabinets"],
    availability: "9 AM - 6 PM",
    pricing: "₹500-1800 per day"
  },
  // Delhi Carpenters
  {
    id: "carp_delhi_001",
    name: "Sandeep Joshi",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["carpenter"],
    location: { 
      state: "Delhi", 
      city: "Delhi", 
      area: "Lajpat Nagar",
      serviceAreas: SERVICE_AREAS.DELHI
    },
    rating: 4.6,
    experience: "8 years",
    specialties: ["Wood polishing", "Furniture assembly", "Repair work"],
    availability: "8 AM - 7 PM",
    pricing: "₹600-1800 per day"
  }
];

export const houseLabor: ServiceProvider[] = [
  // Mumbai House Labor
  {
    id: "labor_mumbai_001",
    name: "Ganesh Yadav",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["house-labor"],
    location: { 
      state: "Maharashtra", 
      city: "Mumbai", 
      area: "Bandra",
      serviceAreas: SERVICE_AREAS.MUMBAI
    },
    rating: 4.6,
    experience: "8 years",
    specialties: ["House cleaning", "Painting assistance", "Moving help"],
    availability: "7 AM - 7 PM",
    pricing: "₹300-800 per person per day"
  },
  // Hyderabad House Labor
  {
    id: "labor_hyderabad_001",
    name: "Ramesh Kumar",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["house-labor"],
    location: { 
      state: "Telangana", 
      city: "Hyderabad", 
      area: "Dilsukhnagar",
      serviceAreas: ["Dilsukhnagar", "Kukatpally", "Madhapur", "Ameerpet", "Secunderabad"]
    },
    rating: 4.4,
    experience: "6 years",
    specialties: ["General maintenance", "Garden work", "Loading/unloading"],
    availability: "6 AM - 6 PM",
    pricing: "₹400-900 per person per day"
  },
  {
    id: "labor_hyderabad_002",
    name: "Venkat Rao",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["house-labor"],
    location: { 
      state: "Telangana", 
      city: "Hyderabad", 
      area: "Kukatpally",
      serviceAreas: ["Dilsukhnagar", "Kukatpally", "Madhapur", "Ameerpet", "Secunderabad"]
    },
    rating: 4.5,
    experience: "7 years",
    specialties: ["House cleaning", "Painting work", "Moving assistance"],
    availability: "7 AM - 7 PM",
    pricing: "₹350-850 per person per day"
  },
  // Delhi House Labor
  {
    id: "labor_delhi_001",
    name: "Ramesh Kumar",
    whatsappNumber: CONTACT_CONFIG.whatsappNumber,
    services: ["house-labor"],
    location: { 
      state: "Delhi", 
      city: "Delhi", 
      area: "Lajpat Nagar",
      serviceAreas: SERVICE_AREAS.DELHI
    },
    rating: 4.4,
    experience: "6 years",
    specialties: ["General maintenance", "Garden work", "Loading/unloading"],
    availability: "6 AM - 6 PM",
    pricing: "₹400-900 per person per day"
  }
];
