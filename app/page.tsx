import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import Hero from '@/components/sections/Hero'
import HomeServices from '@/components/sections/HomeServices'
import WhatWeBuild from '@/components/sections/WhatWeBuild'
import Process from '@/components/sections/Process'
import WhyUs from '@/components/sections/WhyUs'
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
      <HomeServices />
      <WhatWeBuild />
      <Process />
      <WhyUs />
      <AboutSection />
      <CallToAction />
    </>
  )
}
