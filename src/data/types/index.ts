
export interface ServiceProvider {
  id: string;
  name: string;
  whatsappNumber: string;
  services: string[];
  location: {
    state: string;
    city: string;
    area?: string;
    serviceAreas?: readonly string[];
  };
  rating: number;
  experience: string;
  specialties: string[];
  availability: string;
  pricing: string;
}
