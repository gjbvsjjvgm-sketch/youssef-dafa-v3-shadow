import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, Truck, FileText, Landmark, ShieldCheck, 
  ArrowRight, Activity, Package, Briefcase, Heart 
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const primaryServices = [
    { id: 'shipping', nameAr: 'شحن الطرود', icon: Truck, path: '/logistics-services', color: '#DC291E' },
    { id: 'invoices', nameAr: 'الفواتير الإلكترونية', icon: FileText, path: '/invoice-list', color: '#003D7A' },
    { id: 'government', nameAr: 'الخدمات الحكومية', icon: Landmark, path: '/government-payment', color: '#006847' },
    { id: 'contracts', nameAr: 'توثيق العقود', icon: ShieldCheck, path: '/contracts', color: '#8B1F41' },
  ];

  const subServices = [
    { id: 'health', nameAr: 'الخدمات الصحية', icon: Heart, path: '/health-services', color: '#E31837' },
    { id: 'chalets', nameAr: 'حجوزات الشاليهات', icon: Activity, path: '/chalet-payment', color: '#00A88C' },
    { id: 'local', nameAr: 'دفع محلي', icon: CreditCard, path: '/local-payment', color: '#4B2A7B' },
    { id: 'other', nameAr: 'خدمات أخرى', icon: Package, path: '/services', color: '#6C757D' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans" dir="rtl">
      {/* Redesigned Header: Transparent with no left logo */}
      <header className="absolute top-0 w-full z-50 bg-transparent h-20 flex items-center px-6 md:px-20 justify-end">
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white/80 font-bold">تسجيل الدخول</Button>
          <Button className="bg-white text-blue-900 rounded-full font-black px-8">ابدأ الآن</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-[#003D7A]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">منصة الدفع الآمن المتكاملة</h1>
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto font-medium">نظام دفع إلكتروني سريع وموثوق يدعم الشحن والفواتير والخدمات في دول الخليج</p>
        </div>
      </section>

      {/* Services Grid */}
      <main className="container mx-auto px-4 -mt-20 relative z-20 pb-20">
        <div className="grid gap-12">
          {/* List 1: Primary Services */}
          <section>
            <h2 className="text-2xl font-black text-gray-800 mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-blue-600 rounded-full" />
              الخدمات الأساسية
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {primaryServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => navigate(service.path)}
                  className="group bg-white p-8 rounded-[32px] shadow-xl hover:shadow-2xl transition-all border border-gray-100 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${service.color}10`, color: service.color }}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-black text-lg text-gray-800 mb-2">{service.nameAr}</h3>
                  <div className="text-blue-600 text-xs font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>عرض الخدمة</span>
                    <ArrowRight className="w-3 h-3 rotate-180" />
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* List 2: Sub Services */}
          <section>
            <h2 className="text-2xl font-black text-gray-800 mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-teal-500 rounded-full" />
              خدمات إضافية
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {subServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => navigate(service.path)}
                  className="group bg-white p-8 rounded-[32px] shadow-xl hover:shadow-2xl transition-all border border-gray-100 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${service.color}10`, color: service.color }}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-black text-lg text-gray-800 mb-2">{service.nameAr}</h3>
                  <div className="text-blue-600 text-xs font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>عرض الخدمة</span>
                    <ArrowRight className="w-3 h-3 rotate-180" />
                  </div>
                </button>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
