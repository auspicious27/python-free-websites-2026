import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

const steps = [
  { number: '01', title: 'Concept Learning', desc: 'Understand new Python concepts through simple explanations and live demonstrations.', detail: 'Build the mental model first — clear, simple, no jargon.', color: '#e63946' },
  { number: '02', title: 'Hands-On Coding', desc: 'Practice each concept immediately with guided coding exercises. Type every line yourself.', detail: 'Muscle memory is how real programmers learn.', color: '#ff4d5a' },
  { number: '03', title: 'Daily Project', desc: 'Build one complete application using only the concepts covered so far.', detail: 'Ship a working app every single day. That\'s the goal.', color: '#e63946' },
]

export default function HowItWorksSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px]" style={{ background: 'radial-gradient(ellipse, rgba(230,57,70,0.05) 0%, transparent 65%)' }} /></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center mb-16 text-center">
            <SectionHeading label="How It Works" title="Learn. Code. Build. Repeat." highlight="Build." subtitle="Three phases every day that take you from concept to working application." />
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 100}>
              <div className="relative flex flex-col h-full rounded-2xl p-7 transition-all duration-300 group hover:scale-[1.02]" style={{ background: 'rgba(26,26,26,0.9)', border: '1.5px solid rgba(255,255,255,0.06)', boxShadow: '0 2px 16px rgba(0,0,0,0.4)' }}>
                <div className="absolute top-5 right-5 text-xs font-black tracking-widest font-mono" style={{ color: `${step.color}60` }}>{step.number}</div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110" style={{ background: `${step.color}15`, border: `1.5px solid ${step.color}30`, color: step.color }}>
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-lg font-black text-white mb-3">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">{step.desc}</p>
                <div className="rounded-xl px-4 py-3 text-xs leading-relaxed font-medium" style={{ color: step.color, background: `${step.color}0D`, border: `1px solid ${step.color}25` }}>{step.detail}</div>
                <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
