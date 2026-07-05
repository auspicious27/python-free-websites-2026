import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'
import TypewriterCode from '../ui/TypewriterCode'
import { whatYouBuild } from '../../data'

const codeLines = [
  { text: 'import boto3' },
  { text: '' },
  { text: 'ec2 = boto3.client("ec2")' },
  { text: '' },
  { text: 'def launch_instance(ami, type):' },
  { text: '    response = ec2.run_instances(' },
  { text: '        ImageId=ami,' },
  { text: '        InstanceType=type,' },
  { text: '        MinCount=1, MaxCount=1)' },
  { text: '    return response["Instances"][0]' },
]

export default function WhatYouBuildSection() {
  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px]" style={{ background: 'radial-gradient(ellipse, rgba(230,57,70,0.06) 0%, transparent 65%)' }} />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <SectionHeading label="What You Will Build" title="Real Apps. Real Career Impact." highlight="Real Career Impact." subtitle="Every single day you build something real. Your portfolio will speak louder than any degree." align="left" />
            <ul className="mt-8 flex flex-col gap-4">
              {whatYouBuild.map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-text-secondary text-base leading-relaxed group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection speed="slow">
            <div className="glass rounded-2xl shadow-card overflow-hidden">
              {/* Code Panel Header */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-text-secondary text-xs ml-2 font-mono">aws_automation.py</span>
              </div>

              {/* Typing Code */}
              <div className="p-6 min-h-[260px]">
                <TypewriterCode lines={codeLines} typingSpeed={30} lineDelay={350} />
              </div>

              {/* Footer */}
              <div className="px-5 py-3 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-medium">EC2 Launched</span>
                </div>
                <span className="text-text-secondary text-xs font-mono">boto3 + ec2 active</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
