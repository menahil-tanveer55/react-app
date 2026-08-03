import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import Hero from '@/components/sections/Hero'
import TrustStrip from '@/components/sections/TrustStrip'
import FeaturedProducts from '@/components/sections/FeaturedProducts'
import WhyRocketio from '@/components/sections/WhyRocketio'
import Capabilities from '@/components/sections/Capabilities'
import Process from '@/components/sections/Process'
import FeaturedWork from '@/components/sections/FeaturedWork'
import TechStack from '@/components/sections/TechStack'
import Testimonials from '@/components/sections/Testimonials'
import BlogPreview from '@/components/sections/BlogPreview'
import CallToAction from '@/components/sections/CallToAction'

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FeaturedProducts />
      <WhyRocketio />
      <Capabilities />
      <Process />
      <FeaturedWork />
      <TechStack />
      <Testimonials />
      <BlogPreview />
      <CallToAction />
    </>
  )
}
