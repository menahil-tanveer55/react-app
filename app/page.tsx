import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import Hero from '@/components/sections/Hero'
import CompanyPillars from '@/components/sections/CompanyPillars'
import HomeServices from '@/components/sections/HomeServices'
import FeaturedWorkProducts from '@/components/sections/FeaturedWorkProducts'
import WhatWeBuilding from '@/components/sections/WhatWeBuilding'
import LatestUpdates from '@/components/sections/LatestUpdates'
import PeopleSection from '@/components/sections/PeopleSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import AboutSection from '@/components/sections/AboutSection'
import CallToAction from '@/components/sections/CallToAction'

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyPillars />
      <HomeServices />
      <FeaturedWorkProducts />
      <WhatWeBuilding />
      <LatestUpdates />
      <PeopleSection />
      <TestimonialsSection />
      <AboutSection />
      <CallToAction />
    </>
  )
}
