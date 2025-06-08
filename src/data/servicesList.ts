
import { 
  Zap, 
  Wrench, 
  Hammer, 
  Car, 
  HardHat, 
  Settings,
  Tv,
  Droplet,
  Truck,
  House,
  Users
} from "lucide-react";

export interface Service {
  id: string;
  name: string;
  icon: any;
  description: string;
  gradient: string;
  requiresManpower?: boolean;
  maxPeople?: number;
}

export const services: Service[] = [
  {
    id: "electrician",
    name: "Electrician",
    icon: Zap,
    description: "Electrical repairs, wiring, and installations",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    id: "plumber",
    name: "Plumber", 
    icon: Wrench,
    description: "Plumbing repairs, pipe fixing, and water issues",
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    id: "carpenter",
    name: "Carpenter",
    icon: Hammer,
    description: "Furniture repair, woodwork, and carpentry",
    gradient: "from-amber-400 to-orange-600"
  },
  {
    id: "tyre-repair",
    name: "Tyre Repair",
    icon: Car,
    description: "Puncture repair, tyre replacement, and roadside assistance",
    gradient: "from-gray-400 to-gray-600"
  },
  {
    id: "house-labor",
    name: "House Labor",
    icon: HardHat,
    description: "General house work, cleaning, and maintenance",
    gradient: "from-green-400 to-emerald-500",
    requiresManpower: true,
    maxPeople: 10
  },
  {
    id: "mechanic",
    name: "Mechanic",
    icon: Settings,
    description: "Vehicle repair, maintenance, and automotive services",
    gradient: "from-red-400 to-pink-500"
  },
  {
    id: "tv-installation",
    name: "TV Installation",
    icon: Tv,
    description: "TV mounting, setup, and cable installation services",
    gradient: "from-purple-400 to-indigo-500"
  },
  {
    id: "drainage-cleaning",
    name: "Drainage Cleaning",
    icon: Droplet,
    description: "Drain unblocking, sewer cleaning, and pipe maintenance",
    gradient: "from-teal-400 to-blue-500"
  },
  {
    id: "water-supply",
    name: "Water Supply",
    icon: Truck,
    description: "Drinking water delivery and water tanker services",
    gradient: "from-cyan-400 to-blue-600"
  },
  {
    id: "iron-work",
    name: "Iron Work",
    icon: Settings,
    description: "Welding, iron fabrication, and metalwork services",
    gradient: "from-gray-500 to-slate-600"
  },
  {
    id: "house-building",
    name: "House Building Workers",
    icon: House,
    description: "Construction workers, masons, and building contractors",
    gradient: "from-orange-400 to-red-500",
    requiresManpower: true,
    maxPeople: 20
  },
  {
    id: "porter-services",
    name: "Porter Services",
    icon: Users,
    description: "Moving assistance, loading/unloading, and transportation help",
    gradient: "from-violet-400 to-purple-500",
    requiresManpower: true,
    maxPeople: 8
  }
];
