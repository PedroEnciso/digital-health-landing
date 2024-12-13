import { ContactUsButton } from './contact-us-button'

export default function CTA() {
  return (
    <section aria-labelledby="cta-heading" className="relative py-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#3c80f5] via-[#2561ea] to-[#1e4cd7]"></div>
      <div className="relative container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-left mb-6 md:mb-0 md:mr-8">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-2 text-white">
              Get help helping others
            </h2>
            <p className="text-xl md:text-2xl italic font-normal text-white/80">
              <span className="text-lg md:text-xl">via</span> <span className="font-serif">digital health design</span>
            </p>
          </div>
          <div className="flex-shrink-0">
            <ContactUsButton />
          </div>
        </div>
      </div>
    </section>
  )
}

