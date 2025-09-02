
import { ServiceProvider } from '../types';
import {
  electricians,
  plumbers,
  carpenters,
  houseLabor,
  laptopRepairServices,
  mobileRepairServices,
  tvInstallation,
  wifiInstallation,
  dishInstallation,
  mechanics,
  waterPurifierServices,
  hyderabadProviders
} from './categories';

// Combine all service providers
export const serviceProviders: ServiceProvider[] = [
  ...electricians,
  ...plumbers,
  ...carpenters,
  ...houseLabor,
  ...mechanics,
  ...tvInstallation,
  ...wifiInstallation,
  ...dishInstallation,
  ...laptopRepairServices,
  ...mobileRepairServices,
  ...waterPurifierServices,
  ...hyderabadProviders
];

// Helper function to get providers by service and location
export const getProvidersByServiceAndLocation = (serviceId: string, state: string, city: string): ServiceProvider[] => {
  return serviceProviders.filter(provider => 
    provider.services.includes(serviceId) &&
    provider.location.state.toLowerCase() === state.toLowerCase() &&
    provider.location.city.toLowerCase() === city.toLowerCase()
  );
};

// Helper function to get all providers by service (if no city match found)
export const getProvidersByService = (serviceId: string): ServiceProvider[] => {
  return serviceProviders.filter(provider => provider.services.includes(serviceId));
};

// Export individual service arrays for specific use cases
export {
  electricians,
  plumbers,
  carpenters,
  houseLabor,
  mechanics,
  tvInstallation,
  wifiInstallation,
  dishInstallation,
  laptopRepairServices,
  mobileRepairServices,
  waterPurifierServices,
  hyderabadProviders
};

// Export types
export type { ServiceProvider } from '../types';
