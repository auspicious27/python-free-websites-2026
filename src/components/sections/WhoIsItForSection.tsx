import AnimatedSection from '../ui/AnimatedSection'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import { whoIsItFor } from '../../data'

export default function WhoIsItForSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px]" style={{ background: 'radial-gradient(ellipse, rgba(230,57,70,0.05) 0%, transparent 65%)' }} /></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection><div className="flex flex-col items-center mb-10"><SectionHeading label="Who This Is For" title="Built for Dreamers & Doers" highlight="Dreamers & Doers" subtitle="Whether you're a student or a professional, this program meets you where you are." /></div></AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whoIsItFor.map((item) => (
            <AnimatedSection key={item.title}>
              <GlassCard glowOnHover className="p-6 flex flex-col gap-4 h-full group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ background: 'rgba(230,57,70,0.1)', border: '1px solid rgba(230,57,70,0.22)' }}><span className="text-xl">{item.icon}</span></div>
                <div><h3 className="text-white font-semibold text-base mb-1.5 group-hover:text-primary transition-colors">{item.title}</h3><p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p></div>
                <div className="mt-auto h-px w-0 group-hover:w-full transition-all duration-500 rounded-full" style={{ background: 'linear-gradient(90deg, #e63946, #ff4d5a)' }} />
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
