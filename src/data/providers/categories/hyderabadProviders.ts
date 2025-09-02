
import { ServiceProvider } from '../../types';

export const hyderabadProviders: ServiceProvider[] = [
  // Electricians in Dilsukhnagar
  {
    id: 'elec-hyd-001',
    name: 'Ravi Kumar Electricals',
    whatsappNumber: '+91 9876543210',
    services: ['electrician'],
    location: {
      state: 'Telangana',
      city: 'Hyderabad',
      area: 'Dilsukhnagar',
      serviceAreas: ['Dilsukhnagar', 'Malakpet', 'Kothapet', 'Saroornagar', 'LB Nagar', 'Vanasthalipuram', 'Nagole']
    },
    rating: 4.8,
    experience: '8+ years',
    specialties: ['House Wiring', 'Ceiling Fan Installation', 'LED Lights', 'Switch Board Repair', 'Power Outlets'],
    availability: 'Mon-Sun: 8:00 AM - 8:00 PM',
    pricing: '₹300-500 per visit + materials'
  },
  {
    id: 'elec-hyd-002',
    name: 'Suresh Electrical Services',
    whatsappNumber: '+91 9123456789',
    services: ['electrician'],
    location: {
      state: 'Telangana',
      city: 'Hyderabad',
      area: 'Dilsukhnagar',
      serviceAreas: ['Dilsukhnagar', 'Chaitanyapuri', 'Gaddiannaram', 'Kothapet', 'Saroornagar']
    },
    rating: 4.6,
    experience: '5+ years',
    specialties: ['Emergency Repairs', 'AC Wiring', 'Home Automation', 'Solar Installation'],
    availability: 'Mon-Sat: 9:00 AM - 7:00 PM',
    pricing: '₹250-400 per visit + materials'
  },

  // Plumbers in Dilsukhnagar
  {
    id: 'plumb-hyd-001',
    name: 'Krishna Plumbing Works',
    whatsappNumber: '+91 9988776655',
    services: ['plumber'],
    location: {
      state: 'Telangana',
      city: 'Hyderabad',
      area: 'Dilsukhnagar',
      serviceAreas: ['Dilsukhnagar', 'Malakpet', 'Kothapet', 'Saroornagar', 'LB Nagar', 'Vanasthalipuram']
    },
    rating: 4.7,
    experience: '10+ years',
    specialties: ['Pipe Leak Repair', 'Bathroom Fitting', 'Kitchen Plumbing', 'Water Tank Installation', 'Drainage'],
    availability: 'Mon-Sun: 7:00 AM - 9:00 PM',
    pricing: '₹200-400 per visit + materials'
  },
  {
    id: 'plumb-hyd-002',
    name: 'Rajesh Pipe Solutions',
    whatsappNumber: '+91 9876512345',
    services: ['plumber'],
    location: {
      state: 'Telangana',
      city: 'Hyderabad',
      area: 'Dilsukhnagar',
      serviceAreas: ['Dilsukhnagar', 'Chaitanyapuri', 'Gaddiannaram', 'Kothapet']
    },
    rating: 4.5,
    experience: '7+ years',
    specialties: ['Emergency Plumbing', 'Bore Well', 'Water Heater', 'Toilet Repair'],
    availability: 'Mon-Sat: 8:00 AM - 8:00 PM',
    pricing: '₹300-500 per visit + materials'
  },

  // Carpenters in Dilsukhnagar
  {
    id: 'carp-hyd-001',
    name: 'Mahesh Carpentry Works',
    whatsappNumber: '+91 9123987654',
    services: ['carpenter'],
    location: {
      state: 'Telangana',
      city: 'Hyderabad',
      area: 'Dilsukhnagar',
      serviceAreas: ['Dilsukhnagar', 'Malakpet', 'Kothapet', 'Saroornagar', 'LB Nagar']
    },
    rating: 4.8,
    experience: '12+ years',
    specialties: ['Custom Furniture', 'Door/Window Repair', 'Kitchen Cabinets', 'Wardrobe', 'Wood Polishing'],
    availability: 'Mon-Sat: 9:00 AM - 6:00 PM',
    pricing: '₹500-800 per day + materials'
  },

  // CCTV Installation in Dilsukhnagar
  {
    id: 'cctv-hyd-001',
    name: 'SecureVision CCTV Solutions',
    whatsappNumber: '+91 9876123456',
    services: ['cctv-installation'],
    location: {
      state: 'Telangana',
      city: 'Hyderabad',
      area: 'Dilsukhnagar',
      serviceAreas: ['Dilsukhnagar', 'Malakpet', 'Kothapet', 'Saroornagar', 'LB Nagar', 'Vanasthalipuram', 'Nagole', 'Chaitanyapuri']
    },
    rating: 4.9,
    experience: '6+ years',
    specialties: ['HD CCTV Installation', 'IP Cameras', 'DVR Setup', 'Remote Monitoring', 'Night Vision'],
    availability: 'Mon-Sun: 9:00 AM - 7:00 PM',
    pricing: '₹1500-3000 per camera + installation'
  },

  // Appliance Repair in Dilsukhnagar
  {
    id: 'appl-hyd-001',
    name: 'TechFix Appliance Repair',
    whatsappNumber: '+91 9988123456',
    services: ['appliance-repair'],
    location: {
      state: 'Telangana',
      city: 'Hyderabad',
      area: 'Dilsukhnagar',
      serviceAreas: ['Dilsukhnagar', 'Malakpet', 'Kothapet', 'Saroornagar', 'LB Nagar', 'Vanasthalipuram']
    },
    rating: 4.7,
    experience: '8+ years',
    specialties: ['AC Repair', 'Refrigerator Repair', 'Washing Machine', 'Microwave', 'Water Purifier'],
    availability: 'Mon-Sun: 8:00 AM - 8:00 PM',
    pricing: '₹200-500 visit charge + parts'
  },

  // Movers & Packers in Dilsukhnagar
  {
    id: 'move-hyd-001',
    name: 'Swift Movers & Packers',
    whatsappNumber: '+91 9876987654',
    services: ['movers-packers'],
    location: {
      state: 'Telangana',
      city: 'Hyderabad',
      area: 'Dilsukhnagar',
      serviceAreas: ['Dilsukhnagar', 'Malakpet', 'Kothapet', 'Saroornagar', 'LB Nagar', 'Vanasthalipuram', 'Nagole', 'Uppal', 'Habsiguda']
    },
    rating: 4.6,
    experience: '5+ years',
    specialties: ['Home Shifting', 'Office Relocation', 'Packing Materials', 'Loading/Unloading', 'Local/Interstate'],
    availability: 'Mon-Sun: 6:00 AM - 10:00 PM',
    pricing: '₹3000-8000 per shift (local)'
  }
];
