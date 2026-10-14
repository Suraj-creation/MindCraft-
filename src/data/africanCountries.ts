export interface AfricanCountry {
  name: string;
  code: string;
  region: 'East Africa' | 'West Africa' | 'Central Africa' | 'Southern Africa' | 'North Africa';
  regulatoryAgency?: string;
  majorHub?: boolean;
}

export interface AfricanRegionGroup {
  region: 'East Africa' | 'West Africa' | 'Central Africa' | 'Southern Africa' | 'North Africa';
  countries: AfricanCountry[];
}

/** Complete canonical list of all 54 sovereign African countries and jurisdictions */
export const ALL_AFRICAN_COUNTRIES: AfricanCountry[] = [
  // --- East Africa (11) ---
  { name: 'Burundi', code: 'BI', region: 'East Africa' },
  { name: 'Comoros', code: 'KM', region: 'East Africa' },
  { name: 'Djibouti', code: 'DJ', region: 'East Africa' },
  { name: 'Eritrea', code: 'ER', region: 'East Africa' },
  { name: 'Ethiopia', code: 'ET', region: 'East Africa', regulatoryAgency: 'EFDA', majorHub: true },
  { name: 'Kenya', code: 'KE', region: 'East Africa', regulatoryAgency: 'PPB (Pharmacy & Poisons Board)', majorHub: true },
  { name: 'Rwanda', code: 'RW', region: 'East Africa', regulatoryAgency: 'Rwanda FDA', majorHub: true },
  { name: 'Seychelles', code: 'SC', region: 'East Africa' },
  { name: 'Somalia', code: 'SO', region: 'East Africa' },
  { name: 'South Sudan', code: 'SS', region: 'East Africa' },
  { name: 'Tanzania', code: 'TZ', region: 'East Africa', regulatoryAgency: 'TMDA', majorHub: true },
  { name: 'Uganda', code: 'UG', region: 'East Africa', regulatoryAgency: 'NDA', majorHub: true },

  // --- West Africa (16) ---
  { name: 'Benin', code: 'BJ', region: 'West Africa', regulatoryAgency: 'ABMed' },
  { name: 'Burkina Faso', code: 'BF', region: 'West Africa', regulatoryAgency: 'ANRP' },
  { name: 'Cabo Verde', code: 'CV', region: 'West Africa', regulatoryAgency: 'ERIS' },
  { name: 'Côte d’Ivoire', code: 'CI', region: 'West Africa', regulatoryAgency: 'AIRP', majorHub: true },
  { name: 'Gambia', code: 'GM', region: 'West Africa', regulatoryAgency: 'MCA' },
  { name: 'Ghana', code: 'GH', region: 'West Africa', regulatoryAgency: 'Ghana FDA', majorHub: true },
  { name: 'Guinea', code: 'GN', region: 'West Africa', regulatoryAgency: 'DNPL' },
  { name: 'Guinea-Bissau', code: 'GW', region: 'West Africa' },
  { name: 'Liberia', code: 'LR', region: 'West Africa', regulatoryAgency: 'LMHRA' },
  { name: 'Mali', code: 'ML', region: 'West Africa', regulatoryAgency: 'DPM' },
  { name: 'Mauritania', code: 'MR', region: 'West Africa', regulatoryAgency: 'DPM' },
  { name: 'Niger', code: 'NE', region: 'West Africa', regulatoryAgency: 'DPH/L' },
  { name: 'Nigeria', code: 'NG', region: 'West Africa', regulatoryAgency: 'NAFDAC', majorHub: true },
  { name: 'Senegal', code: 'SN', region: 'West Africa', regulatoryAgency: 'ARP', majorHub: true },
  { name: 'Sierra Leone', code: 'SL', region: 'West Africa', regulatoryAgency: 'PBSL' },
  { name: 'Togo', code: 'TG', region: 'West Africa', regulatoryAgency: 'DPML' },

  // --- Central Africa (9) ---
  { name: 'Angola', code: 'AO', region: 'Central Africa', regulatoryAgency: 'ARMED', majorHub: true },
  { name: 'Cameroon', code: 'CM', region: 'Central Africa', regulatoryAgency: 'DPML', majorHub: true },
  { name: 'Central African Republic', code: 'CF', region: 'Central Africa', regulatoryAgency: 'DPL' },
  { name: 'Chad', code: 'TD', region: 'Central Africa', regulatoryAgency: 'DPML' },
  { name: 'Democratic Republic of the Congo', code: 'CD', region: 'Central Africa', regulatoryAgency: 'DPM / ACOREP', majorHub: true },
  { name: 'Equatorial Guinea', code: 'GQ', region: 'Central Africa' },
  { name: 'Gabon', code: 'GA', region: 'Central Africa', regulatoryAgency: 'DPM', majorHub: true },
  { name: 'Republic of the Congo', code: 'CG', region: 'Central Africa', regulatoryAgency: 'DPL' },
  { name: 'São Tomé and Príncipe', code: 'ST', region: 'Central Africa' },

  // --- Southern Africa (11) ---
  { name: 'Botswana', code: 'BW', region: 'Southern Africa', regulatoryAgency: 'BoMRA', majorHub: true },
  { name: 'Eswatini', code: 'SZ', region: 'Southern Africa' },
  { name: 'Lesotho', code: 'LS', region: 'Southern Africa' },
  { name: 'Madagascar', code: 'MG', region: 'Southern Africa', regulatoryAgency: 'AgMed' },
  { name: 'Malawi', code: 'MW', region: 'Southern Africa', regulatoryAgency: 'PMRA' },
  { name: 'Mauritius', code: 'MU', region: 'Southern Africa', regulatoryAgency: 'MOH', majorHub: true },
  { name: 'Mozambique', code: 'MZ', region: 'Southern Africa', regulatoryAgency: 'ANAM' },
  { name: 'Namibia', code: 'NA', region: 'Southern Africa', regulatoryAgency: 'NMRC', majorHub: true },
  { name: 'South Africa', code: 'ZA', region: 'Southern Africa', regulatoryAgency: 'SAHPRA', majorHub: true },
  { name: 'Zambia', code: 'ZM', region: 'Southern Africa', regulatoryAgency: 'ZAMRA', majorHub: true },
  { name: 'Zimbabwe', code: 'ZW', region: 'Southern Africa', regulatoryAgency: 'MCAZ', majorHub: true },

  // --- North Africa (7) ---
  { name: 'Algeria', code: 'DZ', region: 'North Africa', regulatoryAgency: 'ANPP', majorHub: true },
  { name: 'Egypt', code: 'EG', region: 'North Africa', regulatoryAgency: 'EDA (Egyptian Drug Authority)', majorHub: true },
  { name: 'Libya', code: 'LY', region: 'North Africa' },
  { name: 'Morocco', code: 'MA', region: 'North Africa', regulatoryAgency: 'DMP', majorHub: true },
  { name: 'Sudan', code: 'SD', region: 'North Africa', regulatoryAgency: 'NMPB' },
  { name: 'Tunisia', code: 'TN', region: 'North Africa', regulatoryAgency: 'DPM', majorHub: true }
];

export const AFRICAN_REGIONS: AfricanRegionGroup['region'][] = [
  'East Africa',
  'West Africa',
  'Central Africa',
  'Southern Africa',
  'North Africa'
];

export const AFRICAN_REGIONS_GROUPED: AfricanRegionGroup[] = AFRICAN_REGIONS.map(reg => ({
  region: reg,
  countries: ALL_AFRICAN_COUNTRIES.filter(c => c.region === reg)
}));

export const REGIONAL_PRESETS = [
  { label: 'East Africa (All 12)', region: 'East Africa' as const },
  { label: 'West Africa (All 16)', region: 'West Africa' as const },
  { label: 'Central Africa (All 9)', region: 'Central Africa' as const },
  { label: 'Southern Africa (All 11)', region: 'Southern Africa' as const },
  { label: 'North Africa (All 6)', region: 'North Africa' as const }
];

export const INTERNATIONAL_CORRIDORS = [
  'Europe-to-Africa Corridor (UK, Germany, France, Switzerland)',
  'United States & Global Multinationals Corridor',
  'Middle East & Asia-to-Africa Corridor (India, China, UAE)'
];
