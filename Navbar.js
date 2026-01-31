import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X, User, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // تأثير عند التمرير لجعل الخلفية تظهر بوضوح
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* الروابط والأيقونات لجهة اليسار (Desktop) */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse" dir="rtl">
            <div className="flex items-center gap-5 text-gray-700">
              <div className="relative cursor-pointer hover:text-blue-600 transition-colors">
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">3</span>
              </div>
              <Heart size={24} className="cursor-pointer hover:text-red-500 transition-colors" />
              <User size={24} className="cursor-pointer hover:text-blue-600 transition-colors" />
            </div>
            
            <div className="h-6 w-[1px] bg-gray-200 mx-2"></div>
            
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">الرئيسية</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">العروض</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">التصنيفات</a>
          </div>

          {/* محرك البحث (وسط) */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="ابحث عن منتج..." 
                className="w-full bg-gray-100 border-none rounded-full py-2 pr-10 pl-4 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-right"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>

          {/* اللوجو (يمين) */}
         <div className="flex-shrink-0 flex items-center group cursor-pointer">
  <div className="flex flex-col items-end leading-none">
    <span className="text-2xl font-black tracking-tighter text-blue-600 group-hover:text-primary transition-colors font-cairo">
      لُـقـطَـة
    </span>
    <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
      LO3TA HUB
    </span>
  </div>
  {/* أيقونة صغيرة بجانب الاسم تعبر عن "اللقطة" أو الخصم */}
  <div className="ml-2 w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform">
    <span className="text-white font-bold text-xl">%</span>
  </div>
</div>

          {/* زر الموبايل */}
          <div className="md:hidden flex items-center gap-4">
             <div className="relative">
                <ShoppingCart size={22} />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">3</span>
             </div>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* قائمة الموبايل (تنفتح عند الضغط) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 text-right" dir="rtl">
            <a href="#" className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg">الرئيسية</a>
            <a href="#" className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg">العروض اليومية</a>
            <a href="#" className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg">تصنيفات المنتجات</a>
            <div className="p-3">
               <div className="relative w-full">
                <input type="text" placeholder="بحث..." className="w-full bg-gray-100 rounded-lg py-3 pr-10 pl-4 text-right" />
                <Search className="absolute right-3 top-3.5 text-gray-400" size={18} />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;