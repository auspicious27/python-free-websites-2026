import AnimatedSection from '../ui/AnimatedSection'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import { whyCourse } from '../../data'

export default function WhyCourseSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"><div className="absolute bottom-0 right-0 w-[500px] h-[500px]" style={{ background: 'radial-gradient(circle, rgba(230,57,70,0.05) 0%, transparent 70%)' }} /></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection><div className="flex flex-col items-center mb-10"><SectionHeading label="Why This Program" title="This Isn't Just Another Course" highlight="Another Course" subtitle="Most courses teach syntax. We teach you to think like a developer and build things companies actually pay for." /></div></AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {whyCourse.map((item, i) => (
            <AnimatedSection key={item.title} speed={i % 2 === 0 ? 'normal' : 'slow'}>
              <GlassCard glowOnHover className="p-6 flex items-start gap-5 h-full group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110" style={{ background: 'rgba(230,57,70,0.08)', border: '1px solid rgba(230,57,70,0.18)' }}><span className="text-xl">{item.icon}</span></div>
                <div><h3 className="text-white font-semibold text-base mb-1.5 group-hover:text-primary transition-colors">{item.title}</h3><p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p></div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
