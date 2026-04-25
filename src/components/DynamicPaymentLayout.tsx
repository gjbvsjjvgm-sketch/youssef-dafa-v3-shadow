import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';
import { getBranding } from '@/lib/brandingSystem';

interface DynamicPaymentLayoutProps {
  children: React.ReactNode;
  companyKey?: string;
  amount?: string;
  hideHeader?: boolean;
}

const DynamicPaymentLayout: React.FC<DynamicPaymentLayoutProps> = ({ 
  children, 
  companyKey = 'sadad', 
  amount,
  hideHeader = false 
}) => {
  const branding = getBranding(companyKey);

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col" dir="rtl">
      {!hideHeader && (
        <header className="h-20 bg-transparent flex items-center justify-between px-6 md:px-20 border-b relative z-50">
          <div className="flex items-center gap-2">
            {/* Branding integrated into transparent header */}
            <div className="h-8 px-4 flex items-center justify-center">
               {branding.logoUrl ? (
                 <img src={branding.logoUrl} alt={branding.nameAr} className="h-full object-contain" />
               ) : (
                 <span className="font-black text-xl" style={{ color: branding.colors.primary }}>{branding.nameAr}</span>
               )}
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-widest">
            <Lock className="w-4 h-4" />
            <span>Secure Checkout</span>
          </div>
        </header>
      )}

      <main className="flex-1 flex flex-col">
        {children}
      </main>

      <footer className="py-8 bg-gray-50 border-t">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40 grayscale">
          <div className="flex items-center gap-6">
            <ShieldCheck className="w-10 h-10" />
            <div className="text-xs font-bold leading-tight">
              <p>خاضع لرقابة مؤسسة النقد</p>
              <p>نظام دفع آمن وموثوق 100%</p>
            </div>
          </div>
          <div className="flex gap-4 h-6">
            <img src="/assets/branding/visa.png" className="h-full" alt="visa" />
            <img src="/assets/branding/mastercard.png" className="h-full" alt="mastercard" />
            <img src="/assets/branding/mada.png" className="h-full" alt="mada" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DynamicPaymentLayout;
