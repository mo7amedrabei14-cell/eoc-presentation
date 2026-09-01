// Style reminder: Arabic RTL, Edge-to-Edge Cinematic Presentation, Circular Radar Mask, Cover & Outro Slides, EOC Focused.
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { 
  Bell, BrainCircuit, CarFront, ChevronLeft, ChevronRight, 
  Clock3, Database, Gauge, Globe2, LockKeyhole, 
  MapPinned, Package, Radio, ShieldCheck, Sparkles, 
  TimerReset, Users, Activity, Server, Target, FileUp, Search, UserCog, Crosshair, CheckCircle2
} from "lucide-react";

// مسارات الصور (تأكد من وجودها في مجلد public بنفس الأسماء)
const images = {
  eocLogo: "/eoc-logo.png",           
  ercLogo: "/erc-logo.png",           
  dashboard: "/dashboard.jpg",        
  radar: "/radar.png",                
  field: "/field.png",                
  hr: "/hr.png",                      
  localNews: "/news.png",             
  earthquakes: "/earthquakes.png",    
  inventory: "/inventory.png",        
  audit: "/audit.png"                 
};

type Point = { title: string; text: string; icon: React.ElementType };
type Slide = { id: string; eyebrow?: string; title: string; intro?: string; icon?: React.ElementType; image?: string; points: Point[]; isCover?: boolean; isOutro?: boolean };

// المحتوى السيادي المخصص بالكامل لـ (مركز عمليات الطوارئ)
const slides: Slide[] = [
  {
    id: "cover",
    title: "EMERGENCY OPERATIONS CENTRE SYSTEM",
    points: [],
    isCover: true 
  },
  { 
    id: "intro", 
    eyebrow: "العقيدة التشغيلية · 01", 
    title: "البنية التحتية (C4ISR Ecosystem)", 
    intro: "نحن لا نعرض تطبيقاً برمجياً، بل نستعرض (عقلاً سيبرانياً) صُمم ليكون العصب المركزي لمركز عمليات الطوارئ (EOC). بنية تحتية سحابية جبارة تتحمل ضغط الاستخدام المستمر دون أي اختناقات (Bottlenecks). السيرفرات محصنة بأعلى درجات التشفير وتعمل بتناغم مطلق لتوجيه الجمهورية بأكملها من هذه الشاشة.", 
    icon: Server, 
    image: images.dashboard, 
    points: [
      { title: "قدرة حوسبية لا تُقهر", text: "استيعاب ملايين السجلات اللحظية والعمليات المتزامنة بسلاسة مطلقة وبدون توقف.", icon: Server }, 
      { title: "عزل جغرافي وتشفير تام", text: "تشفير (Argon2id) وقواعد بيانات محمية تمنع أي تجاوز، لضمان سرية المركز.", icon: ShieldCheck }, 
      { title: "تحديثات حية (Zero-Downtime)", text: "تلقي التحديثات والترقيات البرمجية دون إيقاف نبض العمليات الميدانية لثانية واحدة.", icon: Database }
    ] 
  },
  { 
    id: "dashboard", 
    eyebrow: "الوعي الظرفي · 02", 
    title: "موجز العمليات المجمّع والإشعارات المحيطية", 
    intro: "لوحة القيادة هنا ليست للعرض، بل هي (Dashboard يومية ومجمعة) تتيح متابعة كل صغيرة وكبيرة لحظة بلحظة. الأهم هو 'شبكة الإنذار المحيطية'؛ الإشعارات لا تقتصر على لوحة القيادة، بل تخترق النظام بالكامل (App-Wide) لتصل لمتخذ القرار أينما كان، مدعومة بمحركات بحث فائقة السرعة.", 
    icon: Activity, 
    image: images.dashboard, 
    points: [
      { title: "إنذار يخترق كل الشاشات", text: "تنبيهات لحظية (Push Notifications) تظهر في أي مكان داخل النظام فور وقوع الحدث.", icon: Bell }, 
      { title: "انعكاس هولوجرامي للأحداث", text: "صورة عملياتية (COP) تدمج مهام كافة الأقاليم على خريطة انتشار تفاعلية.", icon: MapPinned }, 
      { title: "استجواب وبحث لا-تزامني", text: "أشرطة بحث متقدمة لفلترة آلاف المهام والوصول للمعلومة الجراحية في أجزاء من الثانية.", icon: Search }
    ] 
  },
  { 
    id: "radar", 
    eyebrow: "الإنذار المبكر · 03", 
    title: "روبوت الاستخبارات الاصطناعي (AI Max-Mode)", 
    intro: "الذراع الاستخباراتي المستقل للمركز. هذا المحرك يهاجم البيانات؛ يمسح أكثر من 50 شبكة إخبارية وموقعاً كل 5 دقائق بتقنية (Multi-threading). البوت لا يكتفي بالقراءة؛ بل يحلل سياق الخبر، يستخلص الإحداثيات الجغرافية، ويحدد 'درجة الخطورة' آلياً ليوجه الغرفة للتحرك السريع.", 
    icon: BrainCircuit, 
    image: images.radar, 
    points: [
      { title: "مسح مكثف (50+ موقع)", text: "دورة فحص كل 300 ثانية لمراقبة المواقع الإخبارية والتقاط الحدث قبل الإبلاغ الرسمي.", icon: Radio }, 
      { title: "تجريد استدلالي للبيانات", text: "يقرأ الـ AI النص، يستخرج الإحداثيات، نوع الحادث، ويسقطها فوراً على خريطة الرصد.", icon: BrainCircuit }, 
      { title: "تحديد درجة الخطورة آلياً", text: "منح الحدث تقييم رقمي (Severity Score من 1 لـ 10) يُبنى عليه حجم التدخل اللوجستي.", icon: Target }
    ] 
  },
  { 
    id: "field", 
    eyebrow: "العمليات الميدانية · 04", 
    title: "السيطرة الميدانية المطلقة والإبادة للأخطاء", 
    intro: "شاشة المهام الميدانية تقضي على العشوائية التشغيلية تماماً. المنظومة تراقب كل فرع وإقليم وكل تفصيلة دقيقة؛ من انطلاق المهمة حتى الانتهاء. النظام يسرّع العمل ويزيد الدقة عبر تفعيل خوارزميات تمنع الأخطاء البشرية وتقصي ازدواجية التكليف أو تضارب المواعيد.", 
    icon: LockKeyhole, 
    image: images.field, 
    points: [
      { title: "تتبع المسار من الصفر للنهاية", text: "مراقبة دورة حياة المهمة بالكامل لضمان عدم وجود أي ثغرات إدارية أو ميدانية.", icon: CarFront }, 
      { title: "الإبادة التامة للأخطاء البشرية", text: "قيود برمجية تمنع تكليف المتطوع بمهام متعارضة زمنياً للحفاظ على سلامة النظام.", icon: ShieldCheck }, 
      { title: "شفافية وتصفية الأقاليم", text: "فلاتر حية لفرز المهام وعزل كل إقليم لمتابعة أدائه التشغيلي بدقة وبدون تداخل.", icon: MapPinned }
    ] 
  },
  { 
    id: "people", 
    eyebrow: "القوة البشرية · 05", 
    title: "القياس البايومتري الدقيق للكوادر", 
    intro: "تُدار الأفراد بصرامة رقمية. يطبق المركز حوسبة دقيقة يتم فيها استخراج بيانات المشاركين من المهام بدون أي تكرار. نحسب إجمالي 'عدد المهام' لكل متطوع، ونترجم مجهوده لمعادلات زمنية تنتج 'ساعات تشغيلية فعلية' موثقة، لتكون التقييمات عادلة ومبنية على أرقام مطلقة.", 
    icon: Users, 
    image: images.hr, 
    points: [
      { title: "السجل العملياتي التراكمي", text: "رصد فوري لعدد المهام الميدانية التي شارك فيها المتطوع، بتجريد تام للتكرار.", icon: Database }, 
      { title: "حوسبة الساعات المطلقة", text: "معادلات زمنية تطرح العودة من الانطلاق لتحويل فترات التكليف إلى ساعات عمل فعلية.", icon: Clock3 }, 
      { title: "بصمة تشغيلية غير قابلة للاستنساخ", text: "استخدام المعرفات ورقم العضوية لضمان عدم تكرار المتطوعين في النظام.", icon: Users }
    ] 
  },
  { 
    id: "response", 
    eyebrow: "تحليل البيانات · 06", 
    title: "تحليل الاستجابات واستخراج الـ (KPIs)", 
    intro: "نحن نحول دماء الميدان وحوادث الأخبار إلى بيانات. كل تحرك ميداني يخضع لتحليل مركزي عميق (Data Analysis). يدرس النظام المسافة، الزمن، والفجوة بين الإبلاغ والتحرك والوصول. من هذه المعطيات، يولد المركز مؤشرات قياس أداء (KPIs) حاسمة تقيم كافة استجابات الفروع.", 
    icon: TimerReset, 
    image: images.localNews, 
    points: [
      { title: "توليد الـ KPIs آلياً", text: "حساب نقاط الاستجابة لتقييم كفاءة الفرع بناءً على سرعة رد الفعل الموثق.", icon: Activity }, 
      { title: "هندسة عكسية لزمن الاستجابة", text: "تشريح الزمن المستغرق لمعالجة الفجوة بين وقوع الحادث والتدخل الفعلي.", icon: BrainCircuit }, 
      { title: "التحليل الاستراتيجي للحوادث", text: "ربط الحوادث المتكررة بالنطاق الجغرافي للاستعداد المسبق وبناء خطط مستقبلية.", icon: TimerReset }
    ] 
  },
  { 
    id: "disasters", 
    eyebrow: "الكوارث والزلازل · 07", 
    title: "مصفوفة التهديدات واستيراد البيانات (Data Import)", 
    intro: "مرصد سيادي متطور. يوفر النظام قدرة على استيراد ملفات البيانات الخارجية. فور الرفع، تخضع الملفات لـ (Data Cleaning) وتنظيف آلي، وتُسقط فوراً كطبقات تفاعلية لتحديد أماكن التمركزات. يتزامن هذا مع مرصد مدمج يعرض زلازل مصر والعالم لحظة بلحظة لمركز العمليات.", 
    icon: Globe2, 
    image: images.earthquakes, 
    points: [
      { title: "استرداد وتنظيف آلي للبيانات", text: "معالجة الملفات الخارجية (Data Cleaning) وتحويلها لبيانات مقروءة على الفور.", icon: FileUp }, 
      { title: "الإسقاط الجغرافي الفوري", text: "تسميع البيانات المستوردة مباشرة على الخريطة لتوجيه عمليات المركز بكفاءة.", icon: MapPinned }, 
      { title: "تكامل مع المراصد العالمية", text: "تتبع حي للزلازل بمصر والعالم مع قراءات لدرجة القوة والعمق وتوقع التسونامي.", icon: Globe2 }
    ] 
  },
  { 
    id: "inventory", 
    eyebrow: "الإمداد التكتيكي · 08", 
    title: "التعبئة الاستراتيجية وإعادة التوجيه (Mobilization)", 
    intro: "شبكة عصبية تربط كافة المستودعات التابعة. تتيح الواجهة حصر الأصول الاستراتيجية (مركبات، خيام، مخزون طبي، طواقم) بشكل لحظي عبر شريط البحث. عند إعلان بؤرة كارثية، تُجري غرفة العمليات مسحاً جغرافياً لتحديد نقاط الدعم، وتوجيه الإمدادات من القطاعات الآمنة في ثوانٍ.", 
    icon: Package, 
    image: images.inventory, 
    points: [
      { title: "تفريغ وشحن بقرار خوارزمي", text: "حصر لحظي للقوة الميكانيكية والتموينية الجاهزة للاشتباك الميداني المباشر.", icon: Package }, 
      { title: "المسح الجغرافي العكسي", text: "الاستعلام الآلي عن أقرب القطاعات الجاهزة المحيطة ببؤرة الكارثة.", icon: Target }, 
      { title: "مناورة لوجستية حية", text: "نقل الإمدادات من الخطوط الخلفية الآمنة لخط المواجهة بضغطة زر سيادية.", icon: CarFront }
    ] 
  },
  { 
    id: "audit", 
    eyebrow: "الحوكمة والصلاحيات · 09", 
    title: "مصفوفة الصلاحيات (Sovereign RBAC)", 
    intro: "أمن المعلومات لا يقبل التسوية. يُطبق المركز مصفوفة أدوار دقيقة تضمن السرية المطلقة: (مستخدم الإقليم ➔ الجوكر ➔ المشرف ➔ المدير ➔ المالك/الأونر). كل نقرة، كل تعديل، يتم توثيقه في (سجل الإجراءات الرقابية)؛ الصندوق الأسود الذي يضمن حوكمة مطلقة لا يمكن التلاعب بها.", 
    icon: UserCog, 
    image: images.audit, 
    points: [
      { title: "صلاحيات جراحية (الإقليم والجوكر)", text: "تقييد رؤية وتعديل البيانات لتنحصر فقط في النطاق الجغرافي والوظيفي المصرح به.", icon: MapPinned }, 
      { title: "الرقابة العليا (المشرف والمدير)", text: "صلاحيات إدارية استراتيجية تمكن القيادة من مراجعة المهام والتقييم والاعتماد.", icon: ShieldCheck }, 
      { title: "الصندوق الأسود السيادي (المالك)", text: "وصول مطلق لبيانات الجمهورية، مدعوماً بسجل دقيق لا يُمحى لكل حركات النظام.", icon: LockKeyhole }
    ] 
  },
  {
    id: "outro",
    title: "That concludes the project briefing",
    points: [],
    isOutro: true // شاشة الختام (Thank you)
  },
];

const animationConfig: any = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 90, damping: 15 } }
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStep, setCurrentStep] = useState(0); 

  const slide = slides[currentSlide];
  const maxSteps = slide.points?.length || 0;

  // منطق (الكليك) التقدمي
  const nextStep = () => {
    if (slide.isCover || slide.isOutro) {
      if (currentSlide < slides.length - 1) {
        setCurrentSlide(s => s + 1);
        setCurrentStep(0);
      }
    } else {
      if (currentStep < maxSteps) {
        setCurrentStep(s => s + 1);
      } else if (currentSlide < slides.length - 1) {
        setCurrentSlide(s => s + 1);
        setCurrentStep(0);
      }
    }
  };

  const prevStep = () => {
    if (slide.isCover) return; 
    
    if (currentStep > 0) {
      setCurrentStep(s => s - 1);
    } else if (currentSlide > 0) {
      setCurrentSlide(s => s - 1);
      setCurrentStep(slides[currentSlide - 1].points?.length || 0);
    }
  };

  // التحكم بالكيبورد
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowDown" || e.key === " " || e.key === "Enter") {
        e.preventDefault();
        nextStep();
      }
      if (e.key === "ArrowRight" || e.key === "ArrowUp") {
        e.preventDefault();
        prevStep();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, currentStep]);

  return (
    <main 
      className="w-screen h-screen overflow-hidden bg-[#020202] text-white font-['Cairo'] relative select-none" 
      dir="rtl"
      onClick={nextStep}
    >
      {/* 🌐 خلفية سيادية */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)]" />

      {/* 🚀 Header - يختفي في شاشة الغلاف والختام */}
      {!slide.isCover && !slide.isOutro && (
        <motion.header 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-8 pointer-events-none"
        >
          {/* يمين الشاشة - لوجو واسم المركز */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center p-1 shadow-[0_0_20px_rgba(199,0,0,0.5)] border-2 border-[#c70000]">
              <img src={images.eocLogo} alt="EOC Logo" className="w-full h-full object-contain rounded-full" onError={(e) => (e.currentTarget.style.display = 'none')} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black tracking-wider text-white drop-shadow-lg">مركز عمليات الطوارئ <b className="text-[#c70000] font-['IBM_Plex_Mono']">C4ISR</b></span>
              <span className="text-[10px] md:text-xs text-gray-500 tracking-[0.3em] uppercase mt-1">Emergency Operations Center · Sovereign System</span>
            </div>
          </div>
          
          {/* شمال الشاشة - لوجو الهلال والاتصال */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-3 bg-black/60 border border-[#22c55e]/20 px-6 py-2.5 rounded-full backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_12px_#22c55e] animate-ping" /> 
              <span className="text-xs font-bold text-green-400 tracking-widest uppercase">EOC Encrypted Link</span>
            </div>
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center p-1 shadow-[0_0_20px_rgba(199,0,0,0.5)] border-2 border-[#c70000]">
              <img src={images.ercLogo} alt="ERC Logo" className="w-full h-full object-contain rounded-full" onError={(e) => (e.currentTarget.style.display = 'none')} />
            </div>
          </div>
        </motion.header>
      )}

      {/* 🎬 المسرح المركزي الممتد */}
      <div className="relative w-full h-full flex items-center px-8 md:px-16 lg:px-24 pt-20">
        <AnimatePresence mode="wait">
          
          {/* شاشة الانتظار (Cover Slide) */}
          {slide.isCover ? (
            <motion.div
              key="cover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
              exit={{ opacity: 0, y: -50, filter: "blur(10px)", transition: { duration: 0.5 } }}
              className="w-full h-full flex flex-col items-center justify-center text-center relative"
            >
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 60, ease: "linear" }} className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                 <div className="w-[800px] h-[800px] rounded-full border border-[#c70000]/50 border-dashed" />
                 <div className="absolute w-[600px] h-[600px] rounded-full border border-[#c70000]/30" />
              </motion.div>

              <div className="w-40 h-40 rounded-full bg-white mb-8 shadow-[0_0_80px_rgba(199,0,0,0.8)] border-4 border-[#c70000] p-2 z-10">
                 <img src={images.eocLogo} alt="EOC Logo" className="w-full h-full object-contain rounded-full" onError={(e) => (e.currentTarget.style.display = 'none')} />
              </div>
              <h2 className="text-[#c70000] tracking-[0.4em] text-sm md:text-xl font-bold mb-4 uppercase z-10 drop-shadow-[0_0_10px_#c70000]">
                مركز عمليات الطوارئ (EOC)
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-[80px] font-black text-white leading-tight uppercase tracking-widest drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] z-10">
                EMERGENCY OPERATIONS<br />CENTRE SYSTEM
              </h1>
              <p className="mt-8 text-lg text-gray-500 tracking-[0.4em] font-mono z-10 uppercase">
                Sovereign C4ISR Ecosystem
              </p>
              
              <motion.div 
                animate={{ opacity: [0, 1, 0] }} 
                transition={{ repeat: Infinity, duration: 2 }} 
                className="absolute bottom-16 text-gray-600 font-mono text-sm tracking-widest z-10 flex items-center gap-3"
              >
                <Crosshair size={16} className="text-[#c70000]" />
                CLICK ANYWHERE TO INITIATE SYSTEM
              </motion.div>
            </motion.div>
          
          ) : slide.isOutro ? (
            
            /* شاشة الختام (Thank You Slide) */
            <motion.div
              key="outro"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
              exit={{ opacity: 0, y: -50, filter: "blur(10px)", transition: { duration: 0.5 } }}
              className="w-full h-full flex flex-col items-center justify-center text-center relative"
            >
              <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 60, ease: "linear" }} className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                 <div className="w-[800px] h-[800px] rounded-full border border-green-500/50 border-dashed" />
                 <div className="absolute w-[600px] h-[600px] rounded-full border border-green-500/30" />
              </motion.div>

              <div className="w-40 h-40 rounded-full bg-white mb-8 shadow-[0_0_80px_rgba(34,197,94,0.6)] border-4 border-green-500 p-2 z-10">
                 <img src={images.eocLogo} alt="EOC Logo" className="w-full h-full object-contain rounded-full" onError={(e) => (e.currentTarget.style.display = 'none')} />
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-[80px] font-black text-white leading-tight uppercase tracking-widest drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] z-10">
                That concludes the project briefing
              </h1>
              
              <div className="mt-8 flex items-center gap-4 bg-green-500/10 border border-green-500/30 px-8 py-3 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.3)] z-10">
                <CheckCircle2 size={24} className="text-green-400" />
                <h2 className="text-green-400 tracking-[0.2em] text-lg md:text-xl font-bold uppercase">
                  الجاهزية التشغيلية للمركز: 100%
                </h2>
              </div>

              <p className="mt-8 text-xl text-gray-400 font-bold z-10">
                شكراً لوقتكم.. منظومة الـ C4ISR جاهزة لتلقي البلاغات .
              </p>
            </motion.div>

          ) : (

            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }}
              exit={{ opacity: 0, x: 100, transition: { duration: 0.4 } }}
              className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
            >
              
              {/* 📝 منطقة النصوص الممتدة */}
              <div className="flex-1 w-full z-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-16 h-1 rounded bg-[#c70000] shadow-[0_0_20px_#c70000]" />
                  <span className="text-base font-bold text-[#c70000] tracking-widest">{slide.eyebrow}</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-8 drop-shadow-2xl">
                  {slide.title}
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl border-r-4 border-[#c70000] pr-6 mb-12 drop-shadow-md">
                  {slide.intro}
                </p>
                
                {/* النقط الفرعية (تظهر كليك بكليك) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                  {slide.points.map((pt, idx) => (
                    <AnimatePresence key={idx}>
                      {currentStep > idx && (
                        <motion.div 
                          variants={animationConfig}
                          initial="hidden"
                          animate="visible"
                          className="bg-black/60 border border-white/10 p-6 rounded-2xl backdrop-blur-md shadow-2xl relative overflow-hidden group"
                        >
                          <div className="absolute top-0 left-0 w-full h-1 bg-[#c70000] opacity-0 group-hover:opacity-100 transition-opacity" />
                          {pt.icon && <pt.icon size={36} className="text-[#c70000] mb-5 drop-shadow-[0_0_15px_rgba(199,0,0,0.6)]" />}
                          <h3 className="text-xl font-bold text-white mb-3">{pt.title}</h3>
                          <p className="text-sm md:text-base text-gray-400 leading-relaxed">{pt.text}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  ))}
                </div>
              </div>

              {/* 🖼️ العدسة الرادارية الدائرية */}
              <AnimatePresence>
                {currentStep === maxSteps && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 60 } }}
                    className="hidden lg:flex flex-1 max-w-3xl relative aspect-square items-center justify-center pointer-events-none"
                  >
                    {slide.image ? (
                      <div className="relative w-full h-full rounded-full border border-white/10 shadow-[0_0_100px_rgba(199,0,0,0.15)] flex items-center justify-center p-8">
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }} className="absolute inset-0 border-[2px] border-dashed border-[#c70000]/30 rounded-full" />
                        <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 60, ease: "linear" }} className="absolute inset-8 border-[1px] border-[#c70000]/20 rounded-full" />
                        
                        <div className="relative w-full h-full rounded-full overflow-hidden mask-image-radial bg-[#0a0a0a]">
                          <img 
                            src={slide.image} 
                            alt={slide.title} 
                            className="w-full h-full object-cover mix-blend-luminosity opacity-70 scale-110" 
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />
                        </div>
                        
                        <div className="absolute top-1/4 -right-8 bg-black/80 border border-[#c70000]/30 px-5 py-3 rounded-lg backdrop-blur-md shadow-2xl flex items-center gap-4">
                          <Crosshair size={20} className="text-[#c70000] animate-spin-slow" />
                          <span className="font-mono text-sm text-white font-bold">EOC_NODE_LOCKED</span>
                        </div>
                        <div className="absolute bottom-1/3 -left-8 bg-black/80 border border-green-500/30 px-5 py-3 rounded-lg backdrop-blur-md shadow-2xl flex items-center gap-4">
                          <Database size={20} className="text-green-500" />
                          <span className="font-mono text-sm text-white font-bold">DB_SYNC: 100%</span>
                        </div>
                      </div>
                    ) : (
                      <div className="relative z-10 text-[#c70000] opacity-80">
                        {slide.icon && <slide.icon size={350} strokeWidth={0.5} className="drop-shadow-[0_0_80px_rgba(199,0,0,0.4)]" />}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 📊 مؤشر التقدم السفلي */}
      {!slide.isCover && !slide.isOutro && (
        <footer className="absolute bottom-0 left-0 right-0 z-50 p-8 flex items-center justify-between pointer-events-none">
          <div className="flex gap-3">
            {slides.filter(s => !s.isCover && !s.isOutro).map((_, idx) => (
              <div key={idx} className={`h-2 rounded-full transition-all duration-500 ${idx === currentSlide - 1 ? "w-16 bg-[#c70000] shadow-[0_0_15px_#c70000]" : "w-4 bg-white/20"}`} />
            ))}
          </div>
          
          <div className="flex items-center gap-4 bg-black/50 px-6 py-2 rounded-full border border-white/10 backdrop-blur-md">
            <span className="text-gray-400 font-bold text-sm">SLIDE {currentSlide} / {slides.length - 2}</span>
            <span className="w-px h-4 bg-white/20" />
            <span className="text-[#c70000] font-mono text-sm font-bold">STEP {currentStep} / {maxSteps}</span>
            <span className="text-gray-600 font-mono text-xs ml-4 hidden md:block">CLICK ANYWHERE TO ADVANCE</span>
          </div>
        </footer>
      )}

      {/* ستايلات الـ Mask والدوران */}
      <style>{`
        .mask-image-radial {
          mask-image: radial-gradient(circle, black 60%, transparent 100%);
          -webkit-mask-image: radial-gradient(circle, black 60%, transparent 100%);
        }
        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }
      `}</style>
    </main>
  );
}