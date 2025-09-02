import { ServiceProvider, serviceProviders } from '@/data/serviceProviders';

export interface MatchingResult {
  providers: ServiceProvider[];
  matchType: 'area' | 'city' | 'state' | 'none';
}

export const findMatchingProviders = (serviceId: string, state: string, city: string, address: string = ''): MatchingResult => {
  console.log(`🔍 Starting enhanced provider search:`);
  console.log(`Service: ${serviceId}`);
  console.log(`Location: ${city}, ${state}`);
  console.log(`Address: ${address}`);
  
  // Extract area/locality from address with enhanced logic
  const area = extractAreaFromAddress(address);
  console.log(`Extracted area: "${area}"`);
  
  // First, get all providers that match the service, city, and state
  const cityStateMatches = serviceProviders.filter(provider => 
    provider.services.includes(serviceId) &&
    provider.location.state.toLowerCase().trim() === state.toLowerCase().trim() &&
    provider.location.city.toLowerCase().trim() === city.toLowerCase().trim()
  );
  
  console.log(`📍 Found ${cityStateMatches.length} providers in ${city}, ${state} for service: ${serviceId}`);
  
  // Enhanced area-specific matching
  if (area && cityStateMatches.length > 0) {
    console.log(`🎯 Searching for area-specific matches for: "${area}"`);
    
    const areaMatches = cityStateMatches.filter(provider => {
      if (!provider.location.serviceAreas || provider.location.serviceAreas.length === 0) {
        // If no service areas defined, check if provider's area matches
        if (provider.location.area) {
          const providerArea = provider.location.area.toLowerCase().trim();
          const searchArea = area.toLowerCase().trim();
          const areaMatch = providerArea.includes(searchArea) || searchArea.includes(providerArea);
          console.log(`Provider ${provider.name} area "${providerArea}" vs search "${searchArea}": ${areaMatch}`);
          return areaMatch;
        }
        return false;
      }
      
      const searchArea = area.toLowerCase().trim();
      
      // Enhanced matching logic with multiple criteria
      const hasAreaMatch = provider.location.serviceAreas.some(serviceArea => {
        const providerArea = serviceArea.toLowerCase().trim();
        
        // Exact match
        if (providerArea === searchArea) {
          console.log(`✅ Exact match: "${providerArea}" === "${searchArea}"`);
          return true;
        }
        
        // Partial match (either direction)
        if (providerArea.includes(searchArea) || searchArea.includes(providerArea)) {
          console.log(`✅ Partial match: "${providerArea}" <-> "${searchArea}"`);
          return true;
        }
        
        // Fuzzy matching for common area name variations
        const fuzzyMatch = checkFuzzyAreaMatch(providerArea, searchArea);
        if (fuzzyMatch) {
          console.log(`✅ Fuzzy match: "${providerArea}" ≈ "${searchArea}"`);
          return true;
        }
        
        return false;
      });
      
      console.log(`Provider ${provider.name} serves area "${area}": ${hasAreaMatch}`);
      console.log(`Service areas: ${provider.location.serviceAreas?.join(', ')}`);
      return hasAreaMatch;
    });
    
    if (areaMatches.length > 0) {
      console.log(`✅ Found ${areaMatches.length} area-specific matches in "${area}"`);
      // Sort by rating for better results
      areaMatches.sort((a, b) => b.rating - a.rating);
      areaMatches.forEach(provider => 
        console.log(`- ${provider.name} (⭐${provider.rating}, serves: ${provider.location.serviceAreas?.join(', ')})`)
      );
      return {
        providers: areaMatches,
        matchType: 'area'
      };
    } else {
      console.log(`❌ No area-specific matches found for "${area}"`);
    }
  }
  
  // City-level matches with sorting
  if (cityStateMatches.length > 0) {
    console.log(`✅ Returning ${cityStateMatches.length} city-level matches for ${city}`);
    cityStateMatches.sort((a, b) => b.rating - a.rating);
    cityStateMatches.forEach(provider => 
      console.log(`- ${provider.name} (⭐${provider.rating}, ${provider.location.area || 'No specific area'})`)
    );
    return {
      providers: cityStateMatches,
      matchType: 'city'
    };
  }
  
  // State-wide match with sorting
  console.log(`🌍 Expanding search to entire state: ${state}`);
  const stateMatches = serviceProviders.filter(provider => 
    provider.services.includes(serviceId) &&
    provider.location.state.toLowerCase().trim() === state.toLowerCase().trim()
  );
  
  if (stateMatches.length > 0) {
    console.log(`✅ Found ${stateMatches.length} state-wide matches in ${state}`);
    stateMatches.sort((a, b) => b.rating - a.rating);
    stateMatches.forEach(provider => 
      console.log(`- ${provider.name} (⭐${provider.rating}, ${provider.location.city}, ${provider.location.area || 'No specific area'})`)
    );
    return {
      providers: stateMatches,
      matchType: 'state'
    };
  }
  
  console.log(`❌ No providers found for any location match`);
  return {
    providers: [],
    matchType: 'none'
  };
};

// Enhanced helper function to extract area/locality from address
const extractAreaFromAddress = (address: string): string => {
  if (!address || address.trim().length === 0) {
    console.log(`No address provided`);
    return '';
  }
  
  const cleanAddress = address.trim().toLowerCase();
  
  // Enhanced area extraction patterns for Indian addresses
  const areaPatterns = [
    // Direct area names (common Hyderabad areas)
    /\b(dilsukhnagar|malakpet|kothapet|saroornagar|lb nagar|vanasthalipuram|nagole|chaitanyapuri|gaddiannaram|uppal|habsiguda)\b/,
    // Other common patterns
    /\b(koramangala|indiranagar|whitefield|btm layout|electronic city)\b/, // Bangalore
    /\b(andheri|bandra|powai|borivali|thane|malad)\b/, // Mumbai
    /\b(t nagar|anna nagar|velachery|adyar|tambaram)\b/, // Chennai
    /\b(lajpat nagar|connaught place|karol bagh|dwarka|rohini)\b/ // Delhi
  ];
  
  // Check for known area patterns
  for (const pattern of areaPatterns) {
    const match = cleanAddress.match(pattern);
    if (match) {
      const area = match[1].split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      console.log(`Matched known area pattern: "${area}"`);
      return area;
    }
  }
  
  // Fallback to original logic
  const separators = /[,;.\n\r]/;
  const parts = cleanAddress.split(separators);
  
  const firstPart = parts[0]?.trim();
  if (!firstPart) {
    console.log(`No meaningful area found in address: "${address}"`);
    return '';
  }
  
  // Filter out invalid patterns
  const invalidPatterns = [
    /^\d+$/, // Only numbers
    /^\d+\/\d+$/, // Door numbers
    /^\d+\-\d+$/, // Ranges
    /^plot\s+\d+/i,
    /^house\s+no/i,
    /^h\.?\s*no/i,
    /^flat\s+\d+/i,
    /^apt\s+\d+/i,
    /^\d+\w*\s+floor/i
  ];
  
  const nearMatch = firstPart.match(/^near\s+(.+)/i);
  if (nearMatch) {
    const landmark = nearMatch[1].trim();
    if (landmark.length > 2) {
      console.log(`Extracted landmark from "near": "${landmark}"`);
      return landmark.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
    }
  }
  
  const isInvalid = invalidPatterns.some(pattern => pattern.test(firstPart));
  
  if (isInvalid && parts.length > 1) {
    const secondPart = parts[1]?.trim();
    if (secondPart && secondPart.length > 2 && !invalidPatterns.some(pattern => pattern.test(secondPart))) {
      console.log(`Using second part as area: "${secondPart}"`);
      return secondPart.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
    }
  }
  
  if (!isInvalid && firstPart.length > 2) {
    console.log(`Extracted area: "${firstPart}"`);
    return firstPart.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }
  
  console.log(`No valid area extracted from: "${address}"`);
  return '';
};

// Fuzzy matching for area names
const checkFuzzyAreaMatch = (area1: string, area2: string): boolean => {
  // Remove common suffixes/prefixes
  const clean1 = area1.replace(/\s+(area|nagar|colony|road|street|layout)$/i, '').trim();
  const clean2 = area2.replace(/\s+(area|nagar|colony|road|street|layout)$/i, '').trim();
  
  // Check if one contains the other after cleaning
  return clean1.includes(clean2) || clean2.includes(clean1);
};

export const formatProviderDetailsForWhatsApp = (
  providers: ServiceProvider[], 
  matchType: 'area' | 'city' | 'state' | 'none',
  serviceName: string,
  requestLocation: string
): string => {
  if (providers.length === 0) {
    return `Sorry, no ${serviceName} providers are currently available in ${requestLocation}. Please try again later or contact us directly at +91 8499090369.`;
  }
  
  let message = `🔧 *${serviceName} Service Providers*\n\n`;
  
  // Add match type context with more descriptive messages
  switch (matchType) {
    case 'area':
      message += `✅ *Available in your specific area:*\n\n`;
      break;
    case 'city':
      message += `✅ *Available in your city:*\n\n`;
      break;
    case 'state':
      message += `✅ *Available in your state:*\n(Expanded search results)\n\n`;
      break;
    default:
      message += `✅ *Available providers:*\n\n`;
  }
  
  providers.forEach((provider, index) => {
    message += `👨‍🔧 *${provider.name}*\n`;
    message += `📱 WhatsApp: ${provider.whatsappNumber}\n`;
    
    // Show location with area if available
    const locationStr = provider.location.area 
      ? `${provider.location.area}, ${provider.location.city}, ${provider.location.state}`
      : `${provider.location.city}, ${provider.location.state}`;
    message += `📍 Location: ${locationStr}\n`;
    
    // Show service areas if available
    if (provider.location.serviceAreas && provider.location.serviceAreas.length > 0) {
      message += `🗺️ Service Areas: ${provider.location.serviceAreas.join(', ')}\n`;
    }
    
    message += `⭐ Rating: ${provider.rating}/5.0\n`;
    message += `💼 Experience: ${provider.experience}\n`;
    message += `🛠️ Specialties: ${provider.specialties.join(', ')}\n`;
    message += `🕒 Availability: ${provider.availability}\n`;
    message += `💰 Pricing: ${provider.pricing}\n`;
    
    if (index < providers.length - 1) {
      message += `\n${'─'.repeat(30)}\n\n`;
    }
  });
  
  message += `\n\n📞 *Contact any provider directly via WhatsApp for quick service!*`;
  message += `\n\n🌟 *Need2Fix* - Connecting you with trusted professionals across India`;
  
  return message;
};
