import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'B.Tech CSE Student',
    text: "This bootcamp completely changed my perspective on programming. Building real projects every day made concepts stick. I now have a portfolio that impresses recruiters.",
    rating: 5,
    // Add image later: image: '/testimonials/rahul.jpg'
  },
  {
    name: 'Priya Patel',
    role: 'Working Professional',
    text: "As someone with zero coding background, I was nervous. But the step-by-step approach made it so easy. By Day 5, I was building apps on my own. The expense tracker project was my favorite!",
    rating: 5,
  },
  {
    name: 'Amit Kumar',
    role: 'BCA Student',
    text: "The best part was that every project solved a real business problem. File automation and API integration sessions were incredibly practical. I use these skills daily now.",
    rating: 5,
  },
  {
    name: 'Sneha Reddy',
    role: 'Career Switcher',
    text: "I switched from a non-tech background. This bootcamp gave me the confidence to apply for Python developer roles. The capstone billing project alone is worth more than any certificate.",
    rating: 5,
  },
  {
    name: 'Vikash Meena',
    role: 'Final Year MCA',
    text: "I've tried many online courses before but none were this hands-on. Building 8 real applications in 10 days — that's insane value. The OOP and API sessions were game-changers.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px]" style={{ background: 'radial-gradient(ellipse, rgba(230,57,70,0.05) 0%, transparent 65%)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center mb-12">
            <SectionHeading
              label="Testimonials"
              title="From Students Who Built With It"
              highlight="Students"
              subtitle="Real feedback from learners who completed the Python Bootcamp program."
            />
          </div>
        </AnimatedSection>

        {/* Top row — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {testimonials.slice(0, 3).map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 100}>
              <div className="glass rounded-2xl p-6 h-full flex flex-col gap-4 group hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(230,57,70,0.1)]">
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, si) => (
                    <svg key={si} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-text-secondary text-sm leading-relaxed flex-1">"{t.text}"</p>
                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                  {/* Placeholder avatar — replace with real image later */}
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: 'linear-gradient(135deg, #e63946, #b8202d)' }}>
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-text-secondary text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom row — 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {testimonials.slice(3, 5).map((t, i) => (
            <AnimatedSection key={t.name} delay={(i + 3) * 100}>
              <div className="glass rounded-2xl p-6 h-full flex flex-col gap-4 group hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(230,57,70,0.1)]">
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, si) => (
                    <svg key={si} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: 'linear-gradient(135deg, #e63946, #b8202d)' }}>
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-text-secondary text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* & many more with avatar circles */}
        <AnimatedSection>
          <div className="flex flex-col items-center mt-10 gap-4">
            <div className="flex -space-x-3">
              {['AS', 'MK', 'RP', 'VJ', 'NK'].map((initials, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-bg-base flex items-center justify-center text-xs font-bold text-white shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${i % 2 === 0 ? '#e63946' : '#ff4d5a'}, #b8202d)`, animationDelay: `${i * 0.1}s` }}
                >
                  {/* Replace these with real images later: <img src="/testimonials/avatar{i}.jpg" className="w-full h-full rounded-full object-cover" /> */}
                  {initials}
                </div>
              ))}
            </div>
            <p className="text-2xl sm:text-3xl font-black italic" style={{ background: 'linear-gradient(135deg, #e63946, #ff4d5a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              & many more
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
