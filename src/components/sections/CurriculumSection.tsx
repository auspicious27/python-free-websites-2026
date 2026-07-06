import { useState } from 'react'
import AnimatedSection from '../ui/AnimatedSection'
import { curriculum } from '../../data'

export default function CurriculumSection() {
  const [expanded, setExpanded] = useState<number | null>(null)
  const toggle = (id: number) => setExpanded(prev => (prev === id ? null : id))

  return (
    <section id="curriculum" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px]" style={{ background: 'radial-gradient(ellipse, rgba(230,57,70,0.06) 0%, transparent 65%)' }} /></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/5 mb-6"><span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /><span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">Full Program</span></div>
            <h2 className="font-black tracking-tight mb-4" style={{ lineHeight: 1 }}>
              <span className="block" style={{ background: 'linear-gradient(135deg, #e63946 0%, #ff4d5a 50%, #e63946 100%)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'shimmer 4s linear infinite', fontSize: 'clamp(4rem, 12vw, 9rem)', lineHeight: '1.05', paddingBottom: '0.05em' }}>10 Days</span>
              <span className="block text-text-primary mt-3" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>That Will Transform Your Career.</span>
            </h2>
            <p className="text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed mt-4">A carefully crafted journey from <span className="text-white font-medium">"I've never coded" to "I built 8 applications."</span></p>
            <div className="flex items-center gap-10 mt-10 pt-8 border-t border-white/10 w-full max-w-md justify-center">
              {[{ value: '20+', label: 'Hours' }, { value: '10', label: 'Days' }, { value: '100%', label: 'Hands-on' }].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-10">{i > 0 && <div className="w-px h-8 bg-white/10" />}<div className="text-center"><div className="text-2xl font-black" style={{ background: 'linear-gradient(135deg, #e63946, #ff4d5a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{stat.value}</div><div className="text-text-secondary text-xs mt-0.5">{stat.label}</div></div></div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Glowing animated timeline line */}
          <div className="absolute left-[28px] sm:left-[39px] top-0 bottom-0 w-[2px] rounded-full" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(230,57,70,0.5) 5%, rgba(230,57,70,0.5) 95%, transparent 100%)' }} />
          <div className="absolute left-[28px] sm:left-[39px] top-0 bottom-0 w-[2px] rounded-full animate-pulse" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(230,57,70,0.3) 20%, rgba(255,77,90,0.6) 50%, rgba(230,57,70,0.3) 80%, transparent 100%)', filter: 'blur(1px)' }} />
          <div className="flex flex-col gap-0">
            {curriculum.map((mod, i) => {
              const isOpen = expanded === mod.id
              return (
                <AnimatedSection key={mod.id} delay={i * 40}>
                  <div className="relative flex gap-3 sm:gap-6 pb-4 pl-16 sm:pl-24">
                    <div className="absolute left-0 flex-shrink-0 flex flex-col items-center" style={{ width: 56 }}>
                      <button onClick={() => toggle(mod.id)} className="relative z-10 w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 select-none group/badge" style={{ background: isOpen ? 'linear-gradient(135deg, #e63946, #b8202d)' : 'rgba(26,26,26,0.95)', border: isOpen ? '2px solid #e63946' : '2px solid rgba(230,57,70,0.3)', boxShadow: isOpen ? '0 0 0 4px rgba(230,57,70,0.15), 0 4px 16px rgba(230,57,70,0.3)' : '0 2px 8px rgba(0,0,0,0.4)', transform: isOpen ? 'scale(1.08)' : 'scale(1)' }}>
                        {/* Glow ring on hover */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500" style={{ boxShadow: '0 0 20px rgba(230,57,70,0.4), inset 0 0 10px rgba(230,57,70,0.1)' }} />
                        <span className="text-[10px] font-bold tracking-widest uppercase leading-none" style={{ color: isOpen ? 'rgba(255,255,255,0.8)' : '#666' }}>DAY</span>
                        <span className="text-base font-black leading-none mt-0.5" style={{ color: isOpen ? '#fff' : '#e63946', fontFamily: 'monospace' }}>{mod.module}</span>
                      </button>
                      {/* Connector dot */}
                      {i < curriculum.length - 1 && (
                        <div className="w-2 h-2 rounded-full mt-3" style={{ background: isOpen ? '#e63946' : 'rgba(230,57,70,0.3)', boxShadow: isOpen ? '0 0 8px rgba(230,57,70,0.5)' : 'none', transition: 'all 0.3s' }} />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <button onClick={() => toggle(mod.id)} className="w-full text-left group cursor-pointer">
                        <div className="rounded-2xl px-5 py-4 transition-all duration-300" style={{ background: isOpen ? 'rgba(230,57,70,0.08)' : 'rgba(26,26,26,0.9)', border: isOpen ? '1.5px solid rgba(230,57,70,0.45)' : '1.5px solid rgba(255,255,255,0.06)', boxShadow: isOpen ? '0 4px 24px rgba(230,57,70,0.12)' : '0 2px 8px rgba(0,0,0,0.3)' }}>
                          <div className="flex items-center justify-between gap-4">
                            <h3 className="text-base sm:text-lg font-bold leading-snug text-white">{mod.title}</h3>
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300" style={{ background: isOpen ? 'rgba(230,57,70,0.15)' : 'rgba(255,255,255,0.05)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: isOpen ? '#e63946' : '#666' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </div>
                          </div>
                        </div>
                      </button>
                      <div style={{ maxHeight: isOpen ? '600px' : '0px', overflow: 'hidden', transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                        <div className="mt-2 rounded-2xl px-5 py-5" style={{ background: 'rgba(26,26,26,0.75)', border: '1.5px solid rgba(230,57,70,0.15)' }}>
                          <div className="mb-5 h-px" style={{ background: 'linear-gradient(90deg, rgba(230,57,70,0.5), rgba(184,32,45,0.2), transparent)' }} />
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                            {mod.topics[0].points.map((point, pi) => (
                              <div key={pi} className="rounded-xl p-3 flex items-start gap-2.5" style={{ background: 'rgba(230,57,70,0.04)', border: '1px solid rgba(230,57,70,0.1)' }}>
                                <div className="mt-1 w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#e63946', boxShadow: '0 0 6px rgba(230,57,70,0.5)' }} />
                                <span className="text-text-secondary text-sm">{point}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
