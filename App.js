import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Globe, Cpu, BookOpen, Layers, Mail, Copy, ExternalLink, CheckCircle2 } from 'lucide-react';

// --- مصفوفة البيانات (تقدري تغيريها كل يومين) ---
const products = {
  noon: [
    { id: 1, name: "Air Fryer", price: "$49.99", code: "LO3TA10", link: "#" },
    { id: 2, name: "iPhone 15", price: "$999", code: "LO3TA15", link: "#" }
  ],
  ai: [
    { id: 3, name: "Jasper AI", tag: "Write Content 10X Faster", link: "https://jasper.ai" },
    { id: 4, name: "InVideo", tag: "AI Video Editor", link: "https://invideo.io" }
  ]
};

function App() {
  const [view, setView] = useState('home');
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, [view]);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // --- الهيدر الاحترافي (Glassmorphism) ---
  const Navbar = () => (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/50 backdrop-blur-xl border-b border-white/10 py-5 px-8 flex justify-between items-center">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
        <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg shadow-lg shadow-cyan-500/20"></div>
        <h1 className="text-xl font-black text-white tracking-tighter uppercase">Lo3ta.Hub</h1>
      </div>
      <div className="hidden md:flex space-x-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
        {['Home', 'Privacy', 'Contact'].map(link => (
          <button key={link} onClick={() => setView(link.toLowerCase())} className="hover:text-cyan-400 transition-colors">{link}</button>
        ))}
      </div>
      <div className="bg-white/5 border border-white/10 p-2 rounded-full"><Cpu size={16} className="text-cyan-400" /></div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-slate-300 font-sans selection:bg-cyan-500/30">
      <Navbar />

      <AnimatePresence mode="wait">
        {view === 'home' && (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            
            {/* Hero Section - الهوية البصرية */}
            <header className="relative pt-48 pb-32 px-6 text-center overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
              <motion.div initial={{ y: 20 }} animate={{ y: 0 }} className="relative z-10">
                <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none">
                  LO3TA.<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">HUB</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto mb-12">
                  Your Gateway to Smart Digital Products & AI Business Insights
                </p>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest bg-white/5 inline-block px-6 py-2 rounded-full border border-white/10">
                  Saturday, January 31, 2026
                </div>
              </motion.div>
            </header>

            {/* Grid - القائمة الرئيسية (زي الصورة بالظبط) */}
            <main className="max-w-6xl mx-auto py-20 px-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  { id: 'noon', name: 'Noon Offers', color: 'bg-yellow-400', icon: ShoppingBag },
                  { id: 'coursera', name: 'Coursera', color: 'bg-sky-500', icon: Globe },
                  { id: 'amazon', name: 'Amazon Deals', color: 'bg-orange-500', icon: ShoppingBag },
                  { id: 'udemy', name: 'Udemy', color: 'bg-purple-600', icon: BookOpen },
                  { id: 'ai', name: 'AI & SAAS', color: 'bg-slate-800', icon: Layers },
                ].map((cat) => (
                  <motion.div 
                    key={cat.id} 
                    whileHover={{ scale: 1.05, y: -5 }}
                    onClick={() => setView(cat.id)}
                    className="cursor-pointer bg-white/5 border border-white/10 p-8 rounded-[2rem] flex flex-col items-center justify-center gap-4 group hover:bg-white/10 transition-all"
                  >
                    <div className={`${cat.color} w-12 h-12 rounded-2xl shadow-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform`}>
                      <cat.icon size={24} />
                    </div>
                    <span className="text-sm font-bold text-white tracking-tight">{cat.name}</span>
                  </motion.div>
                ))}
              </div>
            </main>
          </motion.div>
        )}

        {/* صفحة هبوط نون (مثال لصفحات الهبوط الجانبية في الصورة) */}
        {view === 'noon' && (
          <motion.div key="noon" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="pt-40 pb-20 px-6 max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-10 flex items-center gap-4">
              <span className="w-2 h-10 bg-yellow-400 rounded-full"></span> Noon Deals
            </h2>
            <div className="grid gap-6">
              {products.noon.map(item => (
                <div key={item.id} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center group">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-cyan-400 font-black">{item.price}</p>
                  </div>
                  <div className="flex gap-4 mt-6 md:mt-0">
                    <button 
                      onClick={() => copyCode(item.code, item.id)}
                      className="bg-white/5 text-slate-300 px-6 py-4 rounded-2xl font-bold flex items-center gap-2 border border-white/10 hover:bg-white/10"
                    >
                      {copiedId === item.id ? <CheckCircle2 size={18} className="text-green-400" /> : <Copy size={18} />}
                      {copiedId === item.id ? 'Copied' : item.code}
                    </button>
                    <a href={item.link} className="bg-cyan-500 text-slate-900 px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-cyan-400">
                      Shop <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => setView('home')} className="mt-20 text-slate-500 font-bold hover:text-white underline">Back Home</button>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-20 text-center border-t border-white/5 opacity-40 text-[10px] font-black uppercase tracking-widest">
        &copy; 2026 Lo3ta Hub . Sonia Design . All Rights Reserved
      </footer>
    </div>
  );
}

export default App;