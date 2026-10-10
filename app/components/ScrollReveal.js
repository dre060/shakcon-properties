// app/components/ScrollReveal.js
'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const SELECTORS = [
  'main section h2',
  'main section .grid > *',
  'main section .space-y-20 > *',
  'main section .card',
  'main section .flex-wrap > *',
  '[data-reveal]',
].join(',');

export default function ScrollReveal() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;
    document.documentElement.classList.add('reveal-ready');

    const els = Array.from(document.querySelectorAll(SELECTORS)).filter(
      (el) => !el.closest('.no-reveal')
    );
    els.forEach((el) => {
      el.classList.add('rv');
      const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
      const i = siblings.indexOf(el);
      el.style.transitionDelay = `${Math.min(i, 6) * 90}ms`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('rv-in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
      setShowTop(h.scrollTop > 600);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{`
        .reveal-ready .rv { opacity: 0; transform: translateY(60px) scale(.94); filter: blur(4px); transition: opacity .8s ease, transform .9s cubic-bezier(.2,.8,.2,1.1), filter .8s ease; }
        .reveal-ready .rv.rv-in { opacity: 1; transform: none; filter: none; }
        @keyframes kenburns { from { transform: scale(1); } to { transform: scale(1.12); } }
        .kenburns { animation: kenburns 18s ease-out forwards; }
        @keyframes shimmer { to { background-position: 200% center; } }
        .shimmer-text { background: linear-gradient(90deg, #facc15 0%, #fff4b0 25%, #facc15 50%, #fff4b0 75%, #facc15 100%); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; color: transparent; animation: shimmer 5s linear infinite; }
        @keyframes glow { 0%,100% { box-shadow: 0 0 0 0 rgba(250,204,21,.55); } 50% { box-shadow: 0 0 0 14px rgba(250,204,21,0); } }
        .pulse-glow { animation: glow 2.4s ease-in-out infinite; }
        @keyframes popIn { from { opacity: 0; transform: translateY(12px) scale(.9); } to { opacity: 1; transform: none; } }
        .badge-pop { opacity: 0; animation: popIn .6s cubic-bezier(.2,.8,.2,1.2) forwards; }
        @media (prefers-reduced-motion: reduce) {
          .kenburns, .shimmer-text, .pulse-glow { animation: none; }
          .badge-pop { opacity: 1; animation: none; }
        }
      `}</style>
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 h-1 bg-yellow-400 z-[100] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-[90] w-12 h-12 rounded-full bg-yellow-400 text-black text-xl font-bold shadow-lg hover:bg-yellow-500 hover:scale-110 transition-all duration-300 ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        ↑
      </button>
    </>
  );
}
