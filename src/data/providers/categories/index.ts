
// Home & Maintenance Services
export * from './homeServices';

// Technology Services
export * from './techServices';

// Automotive Services
export * from './automotiveServices';

// Health & Wellness Services
export * from './healthServices';

// Location-specific providers
export * from './hyderabadProviders';

// Service Categories for easy management
export const SERVICE_CATEGORIES = {
  HOME_SERVICES: {
    name: 'Home & Maintenance',
    services: ['electrician', 'plumber', 'carpenter', 'house-labor']
  },
  TECH_SERVICES: {
    name: 'Technology Services',
    services: ['laptop-repair', 'mobile-repair', 'tv-installation', 'wifi-installation', 'dish-installation', 'cctv-installation']
  },
  AUTOMOTIVE: {
    name: 'Automotive Services',
    services: ['mechanic', 'tyre-repair']
  },
  HEALTH_WELLNESS: {
    name: 'Health & Wellness',
    services: ['water-purifier-service']
  },
  APPLIANCE_SERVICES: {
    name: 'Appliance Services',
    services: ['appliance-repair']
  },
  MOVING_SERVICES: {
    name: 'Moving Services',
    services: ['movers-packers']
  }
} as const;
