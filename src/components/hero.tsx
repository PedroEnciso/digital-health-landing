import { ContactUsButton } from './contact-us-button'
import Services from './services'

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative pt-32 pb-20 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1e4cd7] to-[#2561ea] z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#2561ea] via-[#2561ea] to-[#1f3fae] bg-[length:92%_100%] bg-[position:0_15%] rotate-[8deg] origin-bottom-left scale-110 z-10"></div>
      <div className="relative z-20 container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="max-w-2xl">
          <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-6 text-left">
            Digital Health
            <span className="block italic font-normal mt-2 font-serif">design</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/80 text-left">
            We provide products and services with compliance, accessibility and equity in mind from the start -- helping you help others
          </p>
          <div className="flex justify-start">
            <ContactUsButton />
          </div>
        </div>

        <div className="mt-24">
          <Services />
        </div>
      </div>
    </section>
  )
}

