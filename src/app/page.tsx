"use client"
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f8fafc] via-[#dbeafe] to-[#c7d2fe] dark:from-gray-900 dark:via-slate-900 dark:to-slate-800">
      {/* Header/Nav */}
      <header className="flex items-center justify-between px-8 py-6 shadow-sm z-20 relative">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-blue-700 dark:text-blue-300 tracking-tight">AllCompiler</span>
        </div>
        <nav className="hidden md:flex gap-8 text-base font-medium">
          <Link href="/js-compiler" className="hover:text-blue-600 transition-colors">JS</Link>
          <Link href="/python-compiler" className="hover:text-green-600 transition-colors">Python</Link>
          <Link href="/java-compiler" className="hover:text-yellow-500 transition-colors">Java</Link>
        </nav>
        <a href="#get-started" className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow transition-colors">Get Started</a>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-20 py-20 md:py-32 relative">
        <div className="flex-1 flex flex-col gap-8 z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight drop-shadow-xl">
            <span className="bg-gradient-to-r from-blue-600 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent">AllCompiler</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl font-medium">
            The <span className="font-bold text-blue-600 dark:text-blue-400">Pro</span> online playground for <span className="font-bold text-blue-600">JS</span>, <span className="font-bold text-green-600">Python</span>, <span className="font-bold text-yellow-500">Java</span> & more.<br/>
            <span className="text-fuchsia-600 font-semibold">Instant. Collaborative. Beautiful.</span>
          </p>
          <div className="flex gap-4 mt-2">
            <Link href="/js-compiler">
              <span className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold text-lg shadow-xl hover:from-blue-700 hover:to-blue-500 transition-all hover:scale-105 border-2 border-blue-100 dark:border-blue-800">JS Playground</span>
            </Link>
            <Link href="/python-compiler">
              <span className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-green-400 text-white font-bold text-lg shadow-xl hover:from-green-700 hover:to-green-500 transition-all hover:scale-105 border-2 border-green-100 dark:border-green-800">Python Playground</span>
            </Link>
            <Link href="/java-compiler">
              <span className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-300 text-white font-bold text-lg shadow-xl hover:from-yellow-600 hover:to-yellow-400 transition-all hover:scale-105 border-2 border-yellow-100 dark:border-yellow-800">Java Playground</span>
            </Link>
          </div>
          <div className="flex gap-4 mt-8">
            <a href="#features" className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-white/80 dark:bg-slate-900/70 shadow border border-blue-200 dark:border-slate-800 text-blue-700 dark:text-blue-300 font-semibold text-base hover:bg-blue-50 dark:hover:bg-slate-800 transition-all">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="#3b82f6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Explore Features
            </a>
            <a href="#community" className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-white/80 dark:bg-slate-900/70 shadow border border-fuchsia-200 dark:border-fuchsia-800 text-fuchsia-700 dark:text-fuchsia-300 font-semibold text-base hover:bg-fuchsia-50 dark:hover:bg-fuchsia-900 transition-all">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M7 8V6a5 5 0 0 1 10 0v2" stroke="#d946ef" strokeWidth="2.2" strokeLinecap="round"/><rect x="3" y="8" width="18" height="13" rx="4" stroke="#d946ef" strokeWidth="2.2"/></svg>
              Join Community
            </a>
          </div>
        </div>
        {/* Enhanced SVG Illustration */}
        <div className="flex-1 flex justify-center items-center z-10 animate-fade-in delay-200">
          <div className="w-[360px] h-[360px] md:w-[480px] md:h-[480px] flex items-center justify-center relative">
            <svg width="100%" height="100%" viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="bg1" cx="50%" cy="50%" r="80%" fx="50%" fy="50%" gradientTransform="rotate(15)">
                  <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
                </radialGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="16" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <radialGradient id="orb1" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#f472b6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="orb2" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="shine" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#fff" stopOpacity="0.9" />
                  <stop offset="1" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Background Glow Orbs */}
              <circle cx="130" cy="90" r="56" fill="url(#orb1)" opacity="0.7" />
              <circle cx="350" cy="130" r="44" fill="url(#orb2)" opacity="0.5" />
              {/* Main Ellipse & Card */}
              <ellipse cx="240" cy="240" rx="210" ry="140" fill="url(#bg1)" />
              <rect x="100" y="120" width="280" height="230" rx="40" fill="#fff" fillOpacity="0.98" filter="url(#glow)" />
              {/* Code Bars */}
              <rect x="140" y="160" width="200" height="36" rx="12" fill="#6366f1" fillOpacity="0.92" />
              <rect x="140" y="210" width="200" height="20" rx="8" fill="#dbeafe" />
              <rect x="140" y="240" width="120" height="20" rx="8" fill="#fbbf24" />
              <rect x="270" y="240" width="70" height="20" rx="8" fill="#10b981" />
              <rect x="140" y="270" width="200" height="20" rx="8" fill="#f472b6" />
              <rect x="140" y="300" width="100" height="20" rx="8" fill="#f87171" />
              <rect x="250" y="300" width="90" height="20" rx="8" fill="#38bdf8" />
              {/* Animated Code Brackets with Shine */}
              <g className="animate-pulse">
                <text x="240" y="200" textAnchor="middle" fill="#fff" fontSize="44" fontWeight="bold" dy=".3em" opacity="0.88">{'<'}</text>
                <rect x="195" y="185" width="90" height="10" rx="5" fill="url(#shine)" opacity="0.25" />
              </g>
              <g className="animate-pulse">
                <text x="240" y="310" textAnchor="middle" fill="#fff" fontSize="44" fontWeight="bold" dy=".3em" opacity="0.88">{'/>'}</text>
                <rect x="195" y="295" width="90" height="10" rx="5" fill="url(#shine)" opacity="0.25" />
              </g>
              {/* Central Title */}
              <text x="240" y="140" textAnchor="middle" fill="#6366f1" fontSize="32" fontWeight="bold" dy=".3em" style={{textShadow:'0 2px 16px #a5b4fc'}}>Code Playground</text>
              {/* Floating Language Orbs with Glow and Drop Shadow */}
              <g className="animate-float-slow">
                <circle cx="90" cy="90" r="32" fill="#fbbf24" filter="url(#glow)" />
                <text x="90" y="99" textAnchor="middle" fill="#fff" fontSize="26" fontWeight="bold" style={{textShadow:'0 2px 8px #fbbf24'}}>JS</text>
              </g>
              <g className="animate-float-medium">
                <circle cx="390" cy="140" r="32" fill="#10b981" filter="url(#glow)" />
                <text x="390" y="149" textAnchor="middle" fill="#fff" fontSize="26" fontWeight="bold" style={{textShadow:'0 2px 8px #10b981'}}>Py</text>
              </g>
              <g className="animate-float-fast">
                <circle cx="140" cy="390" r="32" fill="#6366f1" filter="url(#glow)" />
                <text x="140" y="399" textAnchor="middle" fill="#fff" fontSize="26" fontWeight="bold" style={{textShadow:'0 2px 8px #6366f1'}}>Java</text>
              </g>
              {/* Animated Dots for Activity */}
              <circle cx="240" cy="370" r="7" fill="#fbbf24" opacity="0.7" className="animate-float-fast" />
              <circle cx="285" cy="380" r="5" fill="#38bdf8" opacity="0.7" className="animate-float-slow" />
              <circle cx="200" cy="335" r="4" fill="#f472b6" opacity="0.7" className="animate-float-medium" />
            </svg>
          </div>
        </div>
        {/* Decorative Blobs */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-3xl z-0"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-fuchsia-400 opacity-20 rounded-full blur-3xl z-0"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-3 gap-12">
        <div className="bg-white/90 dark:bg-slate-900/80 rounded-2xl shadow-2xl p-10 flex flex-col gap-5 items-center border-t-4 border-blue-400 hover:scale-105 hover:shadow-blue-200 dark:hover:shadow-blue-900 transition-transform">
          <svg width="54" height="54" viewBox="0 0 48 48" fill="none"><path d="M26 4L10 28H24L22 44L38 20H24L26 4Z" fill="#3b82f6"/></svg>
          <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300">Instant Execution</h3>
          <p className="text-gray-700 dark:text-gray-300 text-center text-lg">Run your code in real-time with blazing fast compilers and zero setup.</p>
        </div>
        <div className="bg-white/90 dark:bg-slate-900/80 rounded-2xl shadow-2xl p-10 flex flex-col gap-5 items-center border-t-4 border-green-400 hover:scale-105 hover:shadow-green-200 dark:hover:shadow-green-900 transition-transform">
          <svg width="54" height="54" viewBox="0 0 48 48" fill="none"><circle cx="36" cy="12" r="6" fill="#10b981"/><circle cx="12" cy="24" r="6" fill="#6366f1"/><circle cx="36" cy="36" r="6" fill="#fbbf24"/><path d="M18 26L30 34" stroke="#6366f1" strokeWidth="3" strokeLinecap="round"/><path d="M18 22L30 14" stroke="#10b981" strokeWidth="3" strokeLinecap="round"/></svg>
          <h3 className="text-2xl font-bold text-green-700 dark:text-green-300">Share & Collaborate</h3>
          <p className="text-gray-700 dark:text-gray-300 text-center text-lg">Share code snippets or playground links with friends, students, or colleagues.</p>
        </div>
        <div className="bg-white/90 dark:bg-slate-900/80 rounded-2xl shadow-2xl p-10 flex flex-col gap-5 items-center border-t-4 border-fuchsia-400 hover:scale-105 hover:shadow-fuchsia-200 dark:hover:shadow-fuchsia-900 transition-transform">
          <svg width="54" height="54" viewBox="0 0 48 48" fill="none"><ellipse cx="24" cy="28" rx="20" ry="16" fill="#f472b6"/><circle cx="16" cy="26" r="3" fill="#fff"/><circle cx="24" cy="20" r="3" fill="#fbbf24"/><circle cx="32" cy="26" r="3" fill="#10b981"/><circle cx="24" cy="34" r="3" fill="#6366f1"/></svg>
          <h3 className="text-2xl font-bold text-fuchsia-700 dark:text-fuchsia-300">Beautiful Output</h3>
          <p className="text-gray-700 dark:text-gray-300 text-center text-lg">Enjoy a distraction-free, visually stunning coding and output experience.</p>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="max-w-5xl mx-auto py-16 px-6 flex flex-col items-center gap-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white text-center">Join the AllCompiler Community</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl">Get tips, share code, and connect with developers worldwide. <span className="font-bold text-blue-600">Coming soon!</span></p>
        <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white font-bold text-lg shadow-xl hover:from-fuchsia-600 hover:to-blue-600 transition-all">Sign Up for Early Access</button>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 text-center text-gray-500 dark:text-gray-400 text-base border-t border-blue-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur">
        Built with Next.js 15, Tailwind CSS, and ❤️ by AllCompiler
      </footer>

      {/* Animations (add in globals.css) */}
      <style jsx global>{`
        @keyframes float-slow { 0% { transform: translateY(0); } 50% { transform: translateY(-12px); } 100% { transform: translateY(0); } }
        @keyframes float-medium { 0% { transform: translateY(0); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0); } }
        @keyframes float-fast { 0% { transform: translateY(0); } 50% { transform: translateY(-32px); } 100% { transform: translateY(0); } }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 3s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 2s ease-in-out infinite; }
        .animate-fade-in { animation: fadeInUp 1s cubic-bezier(.4,0,.2,1) both; }
        .animate-fade-in.delay-100 { animation-delay: .1s; }
        .animate-fade-in.delay-200 { animation-delay: .2s; }
        .animate-fade-in.delay-300 { animation-delay: .3s; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-pulse { animation: pulse 1.5s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 0.8; } 50% { opacity: 1; } }
      `}</style>
    </div>
  );
}
