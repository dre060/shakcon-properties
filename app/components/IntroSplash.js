// app/components/IntroSplash.js
// Full-screen intro shown on page load, plus logo + hero animation styles.

const CSS = `
/* ---------- Intro splash ---------- */
.intro-splash { position: fixed; inset: 0; z-index: 200; pointer-events: none; animation: splashHide 0s linear 2.7s forwards; }
.intro-panel { position: absolute; left: 0; right: 0; height: 50.5%; background: radial-gradient(ellipse at center, #1f1f1f 0%, #050505 75%); }
.intro-panel.top { top: 0; animation: panelUp .75s cubic-bezier(.77,0,.18,1) 1.95s forwards; }
.intro-panel.bottom { bottom: 0; animation: panelDown .75s cubic-bezier(.77,0,.18,1) 1.95s forwards; }
.intro-panel.top::after { content: ''; position: absolute; bottom: 0; left: 50%; height: 2px; width: 0; background: #facc15; box-shadow: 0 0 18px #facc15; transform: translateX(-50%); animation: seam 1s ease 1s forwards; }
.intro-content { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; color: #fff; animation: contentOut .45s ease-in 1.8s forwards; }
.intro-logo-wrap { position: relative; width: 150px; height: 150px; margin-bottom: 28px; opacity: 0; animation: logoDrop .9s cubic-bezier(.2,1.4,.4,1) .1s forwards; }
.intro-logo-wrap::before { content: ''; position: absolute; inset: -10px; border-radius: 50%; background: conic-gradient(from 0deg, #facc15, transparent 30%, #facc15 50%, transparent 80%, #facc15); animation: ringSpin 1.2s linear infinite; }
.intro-logo-wrap::after { content: ''; position: absolute; inset: -4px; border-radius: 50%; background: #0b0b0b; }
.intro-logo { position: relative; z-index: 1; width: 150px; height: 150px; border-radius: 50%; object-fit: cover; box-shadow: 0 0 40px rgba(250,204,21,.55); }
.intro-title { font-size: clamp(1.6rem, 5vw, 3rem); font-weight: 800; letter-spacing: 1.2em; opacity: 0; margin: 0; animation: titleIn .9s cubic-bezier(.2,.8,.2,1) .55s forwards; }
.intro-title span { color: #facc15; }
.intro-tag { margin-top: 14px; font-size: clamp(.75rem, 2.2vw, 1rem); letter-spacing: .25em; text-transform: uppercase; color: #d1d5db; opacity: 0; animation: fadeUp .6s ease 1.1s forwards; }
@keyframes logoDrop { 0% { opacity: 0; transform: scale(0) rotate(-270deg); } 70% { opacity: 1; transform: scale(1.12) rotate(10deg); } 100% { opacity: 1; transform: scale(1) rotate(0); } }
@keyframes ringSpin { to { transform: rotate(360deg); } }
@keyframes titleIn { from { opacity: 0; letter-spacing: 1.2em; filter: blur(8px); } to { opacity: 1; letter-spacing: .12em; filter: blur(0); } }
@keyframes fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
@keyframes seam { to { width: 100%; } }
@keyframes contentOut { to { opacity: 0; transform: scale(1.25); filter: blur(6px); } }
@keyframes panelUp { to { transform: translateY(-101%); } }
@keyframes panelDown { to { transform: translateY(101%); } }
@keyframes splashHide { to { visibility: hidden; } }

/* ---------- Navbar logo ---------- */
nav img[alt="Shakcon Logo"] { animation: navLogoIn 1.1s cubic-bezier(.2,1.3,.4,1) .2s both, navLogoGlow 2.8s ease-in-out 1.5s infinite, navLogoFlip 9s ease-in-out 4s infinite; }
html.intro nav img[alt="Shakcon Logo"] { animation-delay: 2.4s, 3.6s, 7s; }
@keyframes navLogoIn { 0% { opacity: 0; transform: perspective(400px) rotateY(-720deg) scale(.2); } 100% { opacity: 1; transform: perspective(400px) rotateY(0) scale(1); } }
@keyframes navLogoGlow { 0%,100% { box-shadow: 0 0 0 0 rgba(250,204,21,.7), 0 4px 10px rgba(0,0,0,.15); } 50% { box-shadow: 0 0 0 8px rgba(250,204,21,0), 0 0 22px 4px rgba(250,204,21,.55); } }
@keyframes navLogoFlip { 0%, 88% { transform: perspective(400px) rotateY(0); } 100% { transform: perspective(400px) rotateY(360deg); } }

/* ---------- Hero ---------- */
.hero-anim { opacity: 0; animation: var(--anim, heroUp) .9s cubic-bezier(.2,.9,.25,1) both; animation-delay: var(--d, 0s); }
html.intro .hero-anim { animation-delay: calc(var(--d, 0s) + 2.2s); }
.hero-letter { display: inline-block; --anim: letterDrop; }
.hero-word { --anim: wordZoom; }
.hero-card { --anim: cardIn; }
@keyframes heroUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: none; } }
@keyframes letterDrop { 0% { opacity: 0; transform: perspective(600px) translateY(-80px) rotateX(90deg); } 60% { opacity: 1; transform: perspective(600px) translateY(10px) rotateX(-15deg); } 100% { opacity: 1; transform: none; } }
@keyframes wordZoom { from { opacity: 0; transform: scale(2.2); filter: blur(12px); } to { opacity: 1; transform: none; filter: blur(0); } }
@keyframes cardIn { from { opacity: 0; transform: scale(.85); } to { opacity: 1; transform: none; } }
.hero-sweep { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.hero-sweep::after { content: ''; position: absolute; top: 0; bottom: 0; width: 40%; left: -60%; background: linear-gradient(100deg, transparent, rgba(255,255,255,.25), transparent); transform: skewX(-20deg); animation: sweep 6s ease-in-out 1.6s infinite; }
html.intro .hero-sweep::after { animation-delay: 3.8s; }
@keyframes sweep { 0% { left: -60%; } 25%, 100% { left: 130%; } }
.hero-particle { position: absolute; bottom: -20px; border-radius: 50%; background: #facc15; opacity: 0; box-shadow: 0 0 10px #facc15; animation: rise linear infinite; z-index: 15; pointer-events: none; }
@keyframes rise { 0% { opacity: 0; transform: translateY(0) scale(.6); } 15% { opacity: .8; } 100% { opacity: 0; transform: translateY(-110vh) scale(1.2); } }

@media (prefers-reduced-motion: reduce) {
  .intro-splash { display: none; }
  nav img[alt="Shakcon Logo"], .hero-anim, .hero-sweep::after, .hero-particle { animation: none !important; opacity: 1; }
  .hero-particle { display: none; }
}
`;

export default function IntroSplash() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html:
            "document.documentElement.classList.add('intro');setTimeout(function(){document.documentElement.classList.remove('intro')},4500);",
        }}
      />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="intro-splash" aria-hidden="true">
        <div className="intro-panel top" />
        <div className="intro-panel bottom" />
        <div className="intro-content">
          <div className="intro-logo-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpg" alt="" className="intro-logo" />
          </div>
          <h2 className="intro-title">SHAKCON <span>PROPERTIES</span></h2>
          <p className="intro-tag">Restoration • Mitigation • Reconstruction</p>
        </div>
      </div>
    </>
  );
}
