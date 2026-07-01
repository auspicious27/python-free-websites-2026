import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import WhatYouBuildSection from './components/sections/WhatYouBuildSection'
import CurriculumSection from './components/sections/CurriculumSection'
import HowItWorksSection from './components/sections/HowItWorksSection'
import WhoIsItForSection from './components/sections/WhoIsItForSection'
import WhyCourseSection from './components/sections/WhyCourseSection'
import OutcomesSection from './components/sections/OutcomesSection'
import FinalCTASection from './components/sections/FinalCTASection'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary">
      <Navbar />
      <main id="main-content" className="relative z-10">
        <HeroSection />
        <WhatYouBuildSection />
        <CurriculumSection />
        <HowItWorksSection />
        <WhoIsItForSection />
        <WhyCourseSection />
        <OutcomesSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
