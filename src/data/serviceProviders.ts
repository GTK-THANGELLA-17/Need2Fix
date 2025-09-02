
// Re-export everything from the new modular structure
export type { ServiceProvider } from './types';
export { 
  serviceProviders, 
  getProvidersByServiceAndLocation, 
  getProvidersByService,
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
  waterPurifierServices
} from './providers';
