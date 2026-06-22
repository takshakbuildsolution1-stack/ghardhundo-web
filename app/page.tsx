import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { ActivityTicker } from '@/components/ActivityTicker'
import { DeveloperLogos } from '@/components/DeveloperLogos'
import { HowItWorks } from '@/components/HowItWorks'
import { FeaturedProjects } from '@/components/FeaturedProjects'
import { SavingsCalculator } from '@/components/SavingsCalculator'
import { PuneMap } from '@/components/PuneMap'
import { ComparisonTable } from '@/components/ComparisonTable'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { FooterCTA } from '@/components/FooterCTA'
import { Footer } from '@/components/Footer'
import { MobileCTA } from '@/components/MobileCTA'
import { NeuralCanvas } from '@/components/ui/NeuralCanvas'
import { ScanLine } from '@/components/ui/ScanLine'
import { fetchPublicProjects } from '@/lib/data/projects'

export default async function Home() {
  const projects = await fetchPublicProjects()

  const developers = Array.from(
    new Set(projects.map(p => p.developer_name))
  ).slice(0, 8)

  return (
    <>
      <NeuralCanvas />
      <div className="grid-overlay" />
      <ScanLine />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <Nav />
      <main>
        <Hero projects={projects} />
        <ActivityTicker />
        <DeveloperLogos developers={developers} />
        <HowItWorks />
        <FeaturedProjects projects={projects} />
        <SavingsCalculator />
        <PuneMap projects={projects} />
        <ComparisonTable />
        <Testimonials />
        <FAQ />
        <FooterCTA />
        <Footer />
      </main>
      <MobileCTA />
    </>
  )
}
