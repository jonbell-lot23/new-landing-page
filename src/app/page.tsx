import { CallToAction } from '@/components/sections/CallToAction'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/sections/Hero'
import { DevTools } from '@/components/sections/DevTools'
import { TestSuites } from '@/components/sections/TestSuites'
import { Testimonials } from '@/components/Testimonials'
import { Pump } from '.basehub/react-pump'
import { draftMode } from 'next/headers'
import { landingPageFragment } from '@/lib/basehub-queries'
import { Header } from "@/components/Header";
import FAQ from '@/components/sections/FAQ'
import DynamicAnalysis from '@/components/sections/DynamicAnalysis'
import { TestSuiteCaseStudies } from '@/components/sections/TestSuiteCaseStudies'
import { Content } from '@/components/sections/Content'

export default function Home() {
  return (
    <Pump
      draft={draftMode().isEnabled}
      next={{ revalidate: 30 }} // or { tags: ["basehub"] }
      queries={[{ landingPage: landingPageFragment }]}
    >
      {async ([{ landingPage }]) => {
        'use server'
        return (
          <>
            <main>
              <Header />
              <Hero {...landingPage} />
              <TestSuiteCaseStudies />
              <DevTools {...landingPage} />
              <TestSuites {...landingPage} />
              <FAQ {...landingPage} />
              <DynamicAnalysis {...landingPage} />
              <CallToAction {...landingPage} />
              <Testimonials />
              <Content />
            </main>
            <Footer />
          </>
        )
      }}
    </Pump>
  )
}
