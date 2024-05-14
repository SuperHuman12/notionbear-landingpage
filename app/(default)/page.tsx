export const metadata = {
  title: 'NotionBear : Notion to Blog, Notion to Helpdesk, Notion to marketplace and Notion to Company Wiki',
  description: 'Write your content on Notion and automatically publish it to your SEO-friendly blog, helpdesk, or marketplace with a single click. No coding or design skills required.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import AboutMe from '@/components/aboutme'
import Showcases from '@/components/showcase'
import Newsletter from '@/components/newsletter'


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Showcases />
      <Testimonials />
      <AboutMe />
      <Newsletter />
    </>
  )
}
