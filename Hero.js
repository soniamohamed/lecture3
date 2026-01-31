import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-[#0f172a] min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 px-4">
      <div className="max-w-7xl mx-auto text-center z-10">
        {/* اللوجو هنا سيكون حجمه متناسق */}
        <div className="mb-8 animate-fade-in">
             <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white">
                LO3TA<span className="text-[#6366f1]">HUB</span>
             </h1>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-gray-300 mb-6 font-cairo leading-relaxed">
          منصتك الذكية لأقوى عروض <br/>
          <span className="text-[#6366f1]">الأفليت والتعليم الرقمي</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-10">
          <button className="bg-[#6366f1] text-white px-10 py-4 rounded-2xl font-bold text-xl hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/20">
            تصفح العروض <ArrowRight size={24} />
          </button>
          <button className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-4 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all flex items-center gap-2">
            التعليم الرقمي <Sparkles size={24} />
          </button>
        </div>
      </div>
      
      {/* دوائر ضوئية في الخلفية لإعطاء لمسة Senior */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-0"></div>
    </div>
  );
};

export default Hero;