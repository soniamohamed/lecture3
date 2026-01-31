const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-right" dir="rtl">
        <div>
          <h3 className="text-2xl font-black text-blue-400 mb-6">LO3TA<span className="text-white">.</span></h3>
          <p className="text-gray-400 leading-relaxed">
            منصتك الأولى للحصول على أفضل صفقات الأفليت من أكبر المتاجر العالمية بلمسة واحدة.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6">روابط سريعة</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-blue-400 cursor-pointer transition-colors">عن لقطة</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">سياسة الخصوصية</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">الشروط والأحكام</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6">تواصل معنا</h4>
          <p className="text-gray-400 mb-4 font-mono">support@lo3ta.com</p>
          <div className="flex justify-end gap-4 mt-4">
             {/* أيقونات سوشيال ميديا هنا */}
             <div className="w-10 h-10 bg-white/10 rounded-full hover:bg-blue-600 transition-all cursor-pointer"></div>
             <div className="w-10 h-10 bg-white/10 rounded-full hover:bg-blue-600 transition-all cursor-pointer"></div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-sm">
        © 2026 Lo3ta Hub. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};