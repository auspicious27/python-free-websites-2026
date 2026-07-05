import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

const row1 = [
  'Python Fundamentals', 'AWS Cloud Computing', 'Amazon EC2 Automation',
  'Boto3 SDK', 'IAM Users & Roles', 'Cloud Infrastructure',
  'Serverless Lambda', 'Amazon S3 Storage', 'DynamoDB NoSQL',
  'API Integration', 'CloudWatch Monitoring', 'AWS Free Tier',
  'Object-Oriented Programming', 'File Handling & CSV',
]
const row2 = [
  'Amazon SNS Notifications', 'Amazon SES Email', 'AWS CLI Configuration',
  'Security Groups', 'Elastic IP', 'Instance Types',
  'Key Pairs & AMI', 'Event-Driven Architecture', 'Cloud Cost Optimization',
  'Python Automation Scripts', 'JSON Processing', 'REST APIs',
  'Exception Handling', 'Production Deployment',
]
const row3 = [
  'Amazon Bedrock AI', 'Amazon Rekognition', 'Amazon Translate',
  'Generative AI on AWS', 'Cloud Resource Management', 'Infrastructure Automation',
  'Serverless File Processing', 'Health Monitoring Systems', 'Automated Backup',
  'Cloud Inventory Reports', 'CSV Export', 'Real-Time Alerts',
  'Python + AWS Portfolio', 'Summer Internship Certificate', 'Industry-Ready Skills',
]

const repeat = (arr: string[], times = 5) => Array.from({ length: times }, () => arr).flat()

interface MarqueeRowProps {
  items: string[]
  direction: 'left' | 'right'
  speed?: number
  scrollX?: MotionValue<number>
}

function MarqueeRow({ items, direction, speed = 35, scrollX }: MarqueeRowProps) {
  const repeated = repeat(items, 5)
  const dur = repeated.length * (speed / items.length)

  return (
    <motion.div className="flex items-center gap-0 overflow-hidden w-full" style={scrollX ? { x: scrollX } : {}}>
      <motion.div
        className="flex items-center gap-0 flex-shrink-0"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: dur, ease: 'linear', repeat: Infinity }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center flex-shrink-0">
            <span
              className="text-sm sm:text-base font-semibold tracking-wide whitespace-nowrap px-5 py-1"
              style={{ color: i % 3 === 0 ? '#e63946' : i % 3 === 1 ? '#ffffff' : '#666666' }}
            >
              {item}
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: i % 2 === 0 ? 'rgba(230,57,70,0.6)' : 'rgba(255,255,255,0.2)' }}
            />
          </span>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default function TechStackSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const xRow1 = useTransform(scrollYProgress, [0, 1], [0, -60])
  const xRow2 = useTransform(scrollYProgress, [0, 1], [0, 60])
  const xRow3 = useTransform(scrollYProgress, [0, 1], [0, -40])

  return (
    <section ref={ref} className="py-12 overflow-hidden relative">
      {/* Fades */}
      <div className="absolute top-0 left-0 right-0 h-8 z-10 pointer-events-none" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, transparent 100%)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-8 z-10 pointer-events-none" style={{ background: 'linear-gradient(0deg, #0a0a0a 0%, transparent 100%)' }} />
      <div className="absolute top-0 left-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, #0a0a0a 0%, transparent 100%)' }} />
      <div className="absolute top-0 right-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(270deg, #0a0a0a 0%, transparent 100%)' }} />

      <div className="flex flex-col gap-4">
        <MarqueeRow items={row1} direction="left" speed={40} scrollX={xRow1} />
        <MarqueeRow items={row2} direction="right" speed={50} scrollX={xRow2} />
        <MarqueeRow items={row3} direction="left" speed={45} scrollX={xRow3} />
      </div>
    </section>
  )
}
