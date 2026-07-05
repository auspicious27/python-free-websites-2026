import { motion } from 'framer-motion'
import Button from '../ui/Button'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Grid bg */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(230,57,70,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(230,57,70,0.05) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      {/* Center glow */}
      <div className="absolute z-0 pointer-events-none w-[900px] h-[900px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: 'radial-gradient(circle, rgba(230,57,70,0.12) 0%, rgba(230,57,70,0.03) 35%, transparent 65%)' }} />

      <motion.div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-14 lg:py-0" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/25 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-xs font-semibold tracking-[0.15em] uppercase">Python · AWS Cloud · Automation</span>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="block text-text-primary leading-tight">Your Future Starts With</span>
            <span className="block pb-2" style={{ background: 'linear-gradient(135deg, #e63946 0%, #ff4d5a 50%, #ffffff 80%, #e63946 100%)', backgroundSize: '300% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'shimmer 4s linear infinite', filter: 'drop-shadow(0 0 30px rgba(230,57,70,0.4))', lineHeight: '1.1' }}>
              Python + AWS Cloud
            </span>
          </h1>
        </div>

        {/* Subheadline */}
        <div className="text-center mb-10">
          <p className="text-text-secondary text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            Don't just learn Python — <span className="text-white font-semibold">build real AWS cloud applications that get you hired.</span>
            <br className="hidden sm:block" />
            <span className="text-text-secondary/70 text-base sm:text-lg">10 Days · 5+ AWS Projects · FREE Summer Internship</span>
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button variant="primary" size="lg" href="#enroll">Enroll Now — FREE Summer Internship <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></Button>
          <Button variant="secondary" size="lg" href="#curriculum">View Curriculum</Button>
        </div>

        {/* Start date banner */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-5 px-5 py-3 rounded-2xl" style={{ background: 'rgba(230,57,70,0.06)', border: '1px solid rgba(230,57,70,0.2)' }}>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span className="text-text-primary text-sm font-bold">Starts 13th July 2026</span>
            </div>
            <div className="w-px h-4 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-text-primary text-sm font-bold">4:15 PM – 6:30 PM IST</span>
            </div>
            <div className="w-px h-4 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-400 text-sm font-semibold">Enrollment Open</span>
            </div>
          </div>
        </div>

        {/* Architecture Visual — Input/Engine/Output Diagram */}
        <div className="relative">
          <div className="rounded-2xl p-px" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.6) 0%, rgba(184,32,45,0.2) 50%, rgba(230,57,70,0.1) 100%)', boxShadow: '0 0 60px rgba(230,57,70,0.15)' }}>
            <div className="rounded-2xl overflow-hidden bg-surface">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-text-secondary/50 text-xs font-mono">python_bootcamp.py</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-mono">LIVE</span>
                </div>
              </div>

              {/* Architecture Diagram */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:grid md:grid-cols-3 md:gap-4 md:items-center gap-4">
                  {/* Input Layer */}
                  <div className="flex flex-col gap-3">
                    <div className="text-text-secondary/50 text-xs font-mono uppercase tracking-widest mb-1 text-center md:text-left">Input Layer</div>
                    {['Python Core', 'Boto3 SDK', 'AWS CLI'].map(item => (
                      <div key={item} className="flex items-center justify-between gap-3 px-4 py-3 rounded-lg border transition-all duration-300 hover:scale-[1.02]" style={{ background: 'rgba(230,57,70,0.04)', borderColor: 'rgba(230,57,70,0.15)' }}>
                        <span className="text-white text-sm font-medium">{item}</span>
                        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#e63946' }} />
                      </div>
                    ))}
                  </div>

                  {/* Center — arrows on desktop, down arrows on mobile */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="hidden md:flex items-center justify-center w-full">
                      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(230,57,70,0.4))' }} />
                      <svg className="w-4 h-4 text-primary mx-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="w-full rounded-xl p-5 text-center" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.12), rgba(184,32,45,0.06))', border: '1.5px solid rgba(230,57,70,0.4)', boxShadow: '0 0 30px rgba(230,57,70,0.12)' }}>
                      <div className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">Core Engine</div>
                      <div className="text-white text-lg font-black mb-1">Python With AWS Cloud</div>
                      <div className="text-text-secondary text-xs mb-4">LinuxWorld Pvt. Ltd</div>
                      <div className="flex items-center justify-center gap-4 text-xs">
                        {[['10', 'Days'], ['20h+', 'Hands-On'], ['100%', 'Practical']].map(([v, l], i) => (
                          <div key={l} className="flex items-center gap-4">
                            {i > 0 && <div className="w-px h-6 bg-white/10" />}
                            <div className="text-center">
                              <div className="font-bold text-sm" style={{ color: '#e63946' }}>{v}</div>
                              <div className="text-text-secondary/60">{l}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center w-full">
                      <svg className="w-4 h-4 text-primary mx-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(230,57,70,0.4), transparent)' }} />
                    </div>
                  </div>

                  {/* Output Layer */}
                  <div className="flex flex-col gap-3">
                    <div className="text-text-secondary/50 text-xs font-mono uppercase tracking-widest mb-1 text-center md:text-right">Output Layer</div>
                    {['EC2 Automation', 'S3 & Lambda', 'AI Services'].map(item => (
                      <div key={item} className="flex items-center justify-between gap-3 px-4 py-3 rounded-lg border transition-all duration-300 hover:scale-[1.02]" style={{ background: 'rgba(230,57,70,0.04)', borderColor: 'rgba(230,57,70,0.15)' }}>
                        <span className="text-white text-sm font-medium">{item}</span>
                        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#e63946', animationDelay: '0.5s' }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status Bar */}
                <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    {[['Analyzing', true], ['Generating', true], ['Deploying', true], ['Monitoring', false]].map(([l, a]) => (
                      <div key={String(l)} className="flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${a ? 'animate-pulse' : 'opacity-30'}`} style={{ background: a ? '#e63946' : '#666' }} />
                        <span className={`text-xs font-mono ${a ? 'text-text-secondary' : 'text-text-secondary/40'}`}>{String(l)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-text-secondary/40 text-xs font-mono">tokens/s</span>
                    <span className="text-primary text-xs font-mono font-bold">2,847</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className="hidden sm:flex items-center justify-center gap-6 mt-10">
          <div className="flex -space-x-2">
            {['PK','SR','AM','RD','VK'].map(i => (<div key={i} className="w-8 h-8 rounded-full border-2 border-bg-base flex items-center justify-center text-xs font-bold text-white" style={{ background: 'linear-gradient(135deg,#e63946,#b8202d)' }}>{i}</div>))}
          </div>
          <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => (<svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div>
          <p className="text-text-secondary text-xs">1,200+ students enrolled</p>
        </div>
      </motion.div>
    </section>
  )
}
