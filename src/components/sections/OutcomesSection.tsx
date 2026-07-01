import AnimatedSection from '../ui/AnimatedSection'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import { outcomes } from '../../data'

export default function OutcomesSection() {
  return (
    <section id="outcomes" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]" style={{ background: 'radial-gradient(ellipse, rgba(230,57,70,0.05) 0%, transparent 65%)' }} /></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection><div className="flex flex-col items-center mb-10"><SectionHeading label="Outcomes" title="What You'll Walk Away With" highlight="Walk Away With" subtitle="Graduate with real Python skills that put you ahead of 99% of beginners." /></div></AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {outcomes.map((item, i) => (
            <AnimatedSection key={item.title} speed={i % 2 === 0 ? 'normal' : 'slow'}>
              <GlassCard glowOnHover className="p-6 flex flex-col gap-4 h-full group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(230,57,70,0.12), transparent 70%)' }} />
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110" style={{ background: 'rgba(230,57,70,0.1)', border: '1px solid rgba(230,57,70,0.2)' }}>{item.icon}</div>
                <div><h3 className="text-white font-bold text-base mb-1.5">{item.title}</h3><p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p></div>
                <div className="mt-auto h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full" style={{ background: 'linear-gradient(90deg, #e63946, #ff4d5a)' }} />
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection speed="slow">
          <div className="mt-10 glass rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{ value: '10', label: 'Days' }, { value: '20+', label: 'Hours of Content' }, { value: '1,200+', label: 'Students Enrolled' }, { value: '4.9★', label: 'Average Rating' }].map((stat) => (
              <div key={stat.label}><div className="text-2xl md:text-3xl font-black mb-1" style={{ color: '#e63946' }}>{stat.value}</div><div className="text-text-secondary text-xs">{stat.label}</div></div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
