export interface BrandColors {
  primary: string;
  secondary: string;
  accent?: string;
  background: string;
  surface: string;
  text: string;
  textLight: string;
  textOnPrimary: string;
  border: string;
}

export interface BrandFonts {
  primary: string;
  secondary: string;
  arabic: string;
}

export interface BrandGradients {
  primary: string;
  secondary: string;
  hero: string;
}

export interface BrandShadows {
  sm: string;
  md: string;
  lg: string;
}

export interface CompanyBranding {
  id: string;
  nameEn: string;
  nameAr: string;
  colors: BrandColors;
  fonts: BrandFonts;
  gradients: BrandGradients;
  shadows: BrandShadows;
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  };
  logoUrl?: string;
  heroBgUrl?: string;
  websiteUrl?: string;
  description: string;
  headerStyle?: 'full' | 'compact' | 'centered';
  layoutType?: 'standard' | 'cloned';
}

export const entityBranding: Record<string, CompanyBranding> = {
  fedex: {
    id: 'fedex',
    nameEn: 'FedEx',
    nameAr: 'فيديكس',
    colors: {
      primary: '#4D148C',
      secondary: '#FF6200',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#F8F8F8',
      text: '#333333',
      textLight: '#717171',
      textOnPrimary: '#FFFFFF',
      border: '#E1E1E1',
    },
    fonts: { primary: 'FedEx Sans, Roboto, sans-serif', secondary: 'Helvetica, sans-serif', arabic: 'Almarai, sans-serif' },
    gradients: { primary: 'none', secondary: 'none', hero: 'none' },
    shadows: { sm: '0 1px 3px rgba(0,0,0,0.1)', md: '0 4px 6px rgba(0,0,0,0.1)', lg: '0 10px 15px rgba(0,0,0,0.1)' },
    borderRadius: { sm: '0px', md: '0px', lg: '0px' },
    logoUrl: '/assets/clones/logos/logo-fedex.png',
    description: 'FedEx Visual Identity',
    layoutType: 'cloned'
  },
  dhl: {
    id: 'dhl',
    nameEn: 'DHL',
    nameAr: 'دي إتش إل',
    colors: {
      primary: '#D2002E',
      secondary: '#FFCC01',
      accent: '#000000',
      background: '#FFFFFF',
      surface: '#FFCC01',
      text: '#000000',
      textLight: '#1A1A1A',
      textOnPrimary: '#FFFFFF',
      border: '#D2002E',
    },
    fonts: { primary: 'DHL Sans, Arial Black, sans-serif', secondary: 'Helvetica, sans-serif', arabic: 'Almarai, sans-serif' },
    gradients: { primary: 'none', secondary: 'none', hero: 'none' },
    shadows: { sm: 'none', md: 'none', lg: 'none' },
    borderRadius: { sm: '0px', md: '0px', lg: '0px' },
    logoUrl: '/assets/clones/logos/logo-dhl.png',
    description: 'DHL Logistics official visual identity',
    layoutType: 'cloned'
  },
  aramex: {
    id: 'aramex',
    nameEn: 'Aramex',
    nameAr: 'أرامكس',
    colors: {
      primary: '#DC291E',
      secondary: '#FFFFFF',
      accent: '#000000',
      background: '#FFFFFF',
      surface: '#F9F9F9',
      text: '#333333',
      textLight: '#777777',
      textOnPrimary: '#FFFFFF',
      border: '#DC291E',
    },
    fonts: { primary: 'Aramex Font, Roboto, sans-serif', secondary: 'Helvetica, sans-serif', arabic: 'Almarai, sans-serif' },
    gradients: { primary: 'none', secondary: 'none', hero: 'none' },
    shadows: { sm: '0 1px 2px rgba(0,0,0,0.05)', md: '0 4px 6px rgba(0,0,0,0.1)', lg: '0 10px 15px rgba(0,0,0,0.1)' },
    borderRadius: { sm: '0px', md: '2px', lg: '4px' },
    logoUrl: '/assets/clones/logos/logo-aramex.png',
    description: 'Aramex official visual identity',
    layoutType: 'cloned'
  },
  alrajhi: {
    id: 'alrajhi',
    nameEn: 'Al Rajhi Bank',
    nameAr: 'مصرف الراجحي',
    colors: {
      primary: '#003D7A',
      secondary: '#F29100',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#F4F7FF',
      text: '#002E7A',
      textLight: '#6B82A7',
      textOnPrimary: '#FFFFFF',
      border: '#E1E9F5',
    },
    fonts: { primary: 'Inter, sans-serif', secondary: 'Helvetica, sans-serif', arabic: 'Almarai, sans-serif' },
    gradients: { primary: 'linear-gradient(135deg, #003D7A, #002E7A)', secondary: 'none', hero: 'none' },
    shadows: { sm: '0 2px 4px rgba(0,61,122,0.05)', md: '0 8px 16px rgba(0,61,122,0.1)', lg: '0 20px 40px rgba(0,61,122,0.15)' },
    borderRadius: { sm: '8px', md: '16px', lg: '24px' },
    logoUrl: '/assets/clones/logos/logo-alrajhi-com-sa.png',
    description: 'الهوية البصرية الجديدة لمصرف الراجحي',
    layoutType: 'cloned'
  },
  snb: {
    id: 'snb',
    nameEn: 'SNB',
    nameAr: 'البنك الأهلي السعودي',
    colors: {
      primary: '#00838C',
      secondary: '#FFFFFF',
      accent: '#000000',
      background: '#FFFFFF',
      surface: '#F0F4F4',
      text: '#212529',
      textLight: '#6C757D',
      textOnPrimary: '#FFFFFF',
      border: '#00838C',
    },
    fonts: { primary: 'Neo Sans Arabic, Roboto, sans-serif', secondary: 'Helvetica, sans-serif', arabic: 'Almarai, sans-serif' },
    gradients: { primary: 'none', secondary: 'none', hero: 'none' },
    shadows: { sm: '0 1px 3px rgba(0,0,0,0.1)', md: '0 4px 6px rgba(0,0,0,0.1)', lg: '0 10px 15px rgba(0,0,0,0.1)' },
    borderRadius: { sm: '4px', md: '8px', lg: '12px' },
    logoUrl: '/assets/clones/logos/logo-snb.png',
    description: 'SNB official visual identity',
    layoutType: 'cloned'
  }
};

export const getBranding = (id: string): CompanyBranding => {
  return entityBranding[id] || entityBranding['alrajhi'];
};

export const getBrandingByCompany = getBranding;
