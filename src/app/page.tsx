import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import Technology from '@/components/Technology'
import CTA from '@/components/CTA'

export const metadata = {
  title: 'JuraChain - Legal Blockchain Innovation',
  description: 'Enterprise-grade blockchain technology designed for compliance, transparency, and security.',
  keywords: ['blockchain', 'Web3', 'legal', 'compliance', 'cryptocurrency'],
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Features />
      <Technology />
      <CTA />
    </main>
  )
}
