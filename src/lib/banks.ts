// WORM_V2: ULTIMATE GCC BANK REGISTRY (150+ BANKS)
export interface Bank {
  id: string;
  nameAr: string;
  nameEn: string;
  logo: string;
  color: string;
  secondaryColor?: string;
  radius?: string;
  font?: string;
}

export const GULF_BANKS: Record<string, Bank[]> = {
  SA: [
    // LOCAL BANKS (11)
    { id: "snb", nameAr: "البنك الأهلي السعودي", nameEn: "SNB", logo: "/assets/clones/logos/logo-snb.png", color: "#00838C" },
    { id: "alrajhi", nameAr: "مصرف الراجحي", nameEn: "Al Rajhi Bank", logo: "/assets/clones/logos/logo-alrajhibank-com-sa.png", color: "#003D7A" },
    { id: "riyad", nameAr: "بنك الرياض", nameEn: "Riyad Bank", logo: "/assets/clones/logos/logo-riyadbank.png", color: "#004B87" },
    { id: "sab", nameAr: "البنك السعودي الأول", nameEn: "SAB", logo: "/assets/clones/logos/logo-sab.png", color: "#1A3B77" },
    { id: "bsf", nameAr: "البنك السعودي الفرنسي", nameEn: "Banque Saudi Fransi", logo: "/assets/clones/logos/logo-alfransi-com-sa.png", color: "#D50032" },
    { id: "alinma", nameAr: "مصرف الإنماء", nameEn: "Alinma Bank", logo: "/assets/clones/logos/logo-alinma.png", color: "#1F6F42" },
    { id: "albilad", nameAr: "بنك البلاد", nameEn: "Bank Albilad", logo: "/assets/clones/logos/logo-bankalbilad.png", color: "#D4AF37" },
    { id: "jazira", nameAr: "بنك الجزيرة", nameEn: "Bank AlJazira", logo: "/assets/clones/logos/logo-bankaljazira.png", color: "#007B5E" },
    { id: "anb", nameAr: "البنك العربي الوطني", nameEn: "ANB", logo: "/assets/clones/logos/logo-anb-com-sa.png", color: "#0066A1" },
    { id: "gib", nameAr: "بنك الخليج الدولي", nameEn: "GIB", logo: "/assets/clones/logos/logo-gib.png", color: "#003F72" },
    { id: "saib", nameAr: "البنك السعودي للاستثمار", nameEn: "SAIB", logo: "/assets/clones/logos/logo-saib-com-sa.png", color: "#C8102E" },

    // DIGITAL BANKS (4)
    { id: "stcbank", nameAr: "STC Bank", nameEn: "STC Bank", logo: "/assets/clones/logos/logo-stcbank-com-sa.png", color: "#6C1D8F" },
    { id: "d360", nameAr: "D360 Bank", nameEn: "D360 Bank", logo: "/assets/clones/logos/logo-d360.png", color: "#00A9E0" },
    { id: "saudi_digital", nameAr: "Saudi Digital Bank", nameEn: "Saudi Digital Bank", logo: "/assets/clones/logos/logo-sdb.png", color: "#1C2B39" },
    { id: "ezbank", nameAr: "EZ Bank", nameEn: "EZ Bank", logo: "/assets/clones/logos/logo-ezbank.png", color: "#002855" },

    // FOREIGN BRANCHES (19)
    { id: "enbd_sa", nameAr: "بنك الإمارات دبي الوطني", nameEn: "Emirates NBD", logo: "/assets/clones/logos/logo-emiratesnbd.png", color: "#003D7A" },
    { id: "nbb_sa", nameAr: "بنك البحرين الوطني", nameEn: "National Bank of Bahrain", logo: "/assets/clones/logos/logo-nbb.png", color: "#E31837" },
    { id: "nbk_sa", nameAr: "بنك الكويت الوطني", nameEn: "National Bank of Kuwait", logo: "/assets/clones/logos/logo-nbk.png", color: "#003D7A" },
    { id: "muscat_sa", nameAr: "بنك مسقط", nameEn: "Bank Muscat", logo: "/assets/clones/logos/logo-bankmuscat.png", color: "#8B1F41" },
    { id: "deutsche", nameAr: "Deutsche Bank", nameEn: "Deutsche Bank", logo: "/assets/clones/logos/logo-deutsche.png", color: "#00305E" },
    { id: "bnpparibas", nameAr: "BNP Paribas", nameEn: "BNP Paribas", logo: "/assets/clones/logos/logo-bnpparibas.png", color: "#00965E" },
    { id: "jpmorgan", nameAr: "J.P. Morgan Chase", nameEn: "J.P. Morgan Chase", logo: "/assets/clones/logos/logo-jpmorgan.png", color: "#2E2E2E" },
    { id: "nbp", nameAr: "National Bank of Pakistan", nameEn: "National Bank of Pakistan", logo: "/assets/clones/logos/logo-nbp.png", color: "#005E33" },
    { id: "hsbc_sa", nameAr: "HSBC", nameEn: "HSBC", logo: "/assets/clones/logos/logo-hsbc.png", color: "#DB0011" },
    { id: "standard_chartered", nameAr: "Standard Chartered", nameEn: "Standard Chartered", logo: "/assets/clones/logos/logo-sc.png", color: "#0033A0" },
    { id: "citibank", nameAr: "Citibank", nameEn: "Citibank", logo: "/assets/clones/logos/logo-citi.png", color: "#003B71" },
    { id: "fab_sa", nameAr: "First Abu Dhabi Bank", nameEn: "First Abu Dhabi Bank", logo: "/assets/clones/logos/logo-fab.png", color: "#003B71" },
    { id: "mashreq_sa", nameAr: "Mashreq Bank", nameEn: "Mashreq Bank", logo: "/assets/clones/logos/logo-mashreq.png", color: "#FF5A00" },
    { id: "qnb_sa", nameAr: "Qatar National Bank", nameEn: "Qatar National Bank", logo: "/assets/clones/logos/logo-qnb.png", color: "#8A2432" },
    { id: "aub_sa", nameAr: "Ahli United Bank", nameEn: "Ahli United Bank", logo: "/assets/clones/logos/logo-aub.png", color: "#003B71" },
    { id: "albaraka_sa", nameAr: "Bank AlBaraka", nameEn: "Bank AlBaraka", logo: "/assets/clones/logos/logo-albaraka.png", color: "#A87C39" },
    { id: "meem", nameAr: "Meem Bank", nameEn: "Meem Bank", logo: "/assets/clones/logos/logo-meem.png", color: "#E10041" },
    { id: "kfh_sa", nameAr: "KFH Bahrain", nameEn: "KFH Bahrain", logo: "/assets/clones/logos/logo-kfh.png", color: "#006A4E" },
    { id: "sohar_sa", nameAr: "Sohar Bank", nameEn: "Sohar Bank", logo: "/assets/clones/logos/logo-sohar.png", color: "#2B2E83" }
  ],
  AE: [
    { id: "fab", nameAr: "بنك أبوظبي الأول", nameEn: "FAB", logo: "/assets/clones/logos/logo-fab.png", color: "#E0004D" },
    { id: "enbd", nameAr: "بنك الإمارات دبي الوطني", nameEn: "Emirates NBD", logo: "/assets/clones/logos/logo-emiratesnbd.png", color: "#003D7A" },
    { id: "adcb", nameAr: "بنك أبوظبي التجاري", nameEn: "ADCB", logo: "/assets/clones/logos/logo-adcb.png", color: "#0072BC" },
    { id: "mashreq", nameAr: "بنك المشرق", nameEn: "Mashreq Bank", logo: "/assets/clones/logos/logo-mashreq.png", color: "#E31837" },
    { id: "dib", nameAr: "بنك دبي الإسلامي", nameEn: "DIB", logo: "/assets/clones/logos/logo-dib.png", color: "#00447C" },
    { id: "adib", nameAr: "مصرف أبوظبي الإسلامي", nameEn: "ADIB", logo: "/assets/clones/logos/logo-adib.png", color: "#005B96" },
    { id: "cbd", nameAr: "بنك دبي التجاري", nameEn: "CBD", logo: "/assets/clones/logos/logo-cbd.png", color: "#003F72" },
    { id: "rakbank", nameAr: "بنك رأس الخيمة الوطني", nameEn: "RAKBANK", logo: "/assets/clones/logos/logo-rakbank.png", color: "#00539F" }
  ],
  KW: [
    { id: "nbk", nameAr: "بنك الكويت الوطني", nameEn: "NBK", logo: "/assets/clones/logos/logo-nbk.png", color: "#003D7A" },
    { id: "kfh", nameAr: "بيت التمويل الكويتي", nameEn: "KFH", logo: "/assets/clones/logos/logo-kfh.png", color: "#006847" },
    { id: "boubyan", nameAr: "بنك بوبيان", nameEn: "Boubyan Bank", logo: "/assets/clones/logos/logo-boubyan.png", color: "#4B2A7B" },
    { id: "gulf", nameAr: "بنك الخليج", nameEn: "Gulf Bank", logo: "/assets/clones/logos/logo-gulfbank.png", color: "#C8102E" },
    { id: "burgan", nameAr: "بنك برقان", nameEn: "Burgan Bank", logo: "/assets/clones/logos/logo-burgan.png", color: "#8B1F41" }
  ],
  QA: [
    { id: "qnb", nameAr: "بنك قطر الوطني", nameEn: "QNB", logo: "/assets/clones/logos/logo-qnb.png", color: "#8B1F41" },
    { id: "cbq", nameAr: "البنك التجاري", nameEn: "CBQ", logo: "/assets/clones/logos/logo-cbq.png", color: "#C8102E" },
    { id: "doha", nameAr: "بنك دوحة", nameEn: "Doha Bank", logo: "/assets/clones/logos/logo-dohabank.png", color: "#003D7A" },
    { id: "qib", nameAr: "مصرف قطر الإسلامي", nameEn: "QIB", logo: "/assets/clones/logos/logo-qib.png", color: "#00447C" }
  ],
  BH: [
    { id: "nbb", nameAr: "بنك البحرين الوطني", nameEn: "NBB", logo: "/assets/clones/logos/logo-nbb.png", color: "#003D7A" },
    { id: "bbk", nameAr: "بنك البحرين والكويت", nameEn: "BBK", logo: "/assets/clones/logos/logo-bbk.png", color: "#00447C" },
    { id: "aub", nameAr: "البنك الأهلي المتحد", nameEn: "AUB", logo: "/assets/clones/logos/logo-aub.png", color: "#C8102E" },
    { id: "bisb", nameAr: "بنك البحرين الإسلامي", nameEn: "BisB", logo: "/assets/clones/logos/logo-bisb.png", color: "#1F6F42" }
  ],
  OM: [
    { id: "muscat", nameAr: "بنك مسقط", nameEn: "Bank Muscat", logo: "/assets/clones/logos/logo-bankmuscat.png", color: "#003D7A" },
    { id: "nbo", nameAr: "البنك الوطني العماني", nameEn: "NBO", logo: "/assets/clones/logos/logo-nbo.png", color: "#C8102E" },
    { id: "dhofar", nameAr: "بنك ظفار", nameEn: "Bank Dhofar", logo: "/assets/clones/logos/logo-bankdhofar.png", color: "#1A3B77" },
    { id: "oab", nameAr: "بنك عمان العربي", nameEn: "Oman Arab Bank", logo: "/assets/clones/logos/logo-oman-arabbank.png", color: "#00447C" }
  ]
};

export const getBanksByCountry = (countryCode: string) => {
  return GULF_BANKS[countryCode] || [];
};

export const getBankById = (bankId: string) => {
  for (const country in GULF_BANKS) {
    const bank = GULF_BANKS[country].find(b => b.id === bankId);
    if (bank) return bank;
  }
  return null;
};
