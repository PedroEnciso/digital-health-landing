import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, ClipboardCheck, Lightbulb, Rocket } from 'lucide-react'

const services = [
  {
    title: "Compliance Testing",
    description: "Test and improve accessibility and FDA compliance",
    icon: ClipboardCheck,
  },
  {
    title: "Concept Validation",
    description: "Validate new products, services or features with real people",
    icon: Lightbulb,
  },
  {
    title: "Rapid Prototyping",
    description: "Functional code to inform, test or bootstrap solutions",
    icon: Rocket,
  },
]

const PillLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-3 py-1 text-[10px] font-medium tracking-wider text-blue-700 uppercase bg-blue-100 border border-blue-200 rounded font-mono">
    {children}
  </span>
)

export default function Services() {
  return (
    <section aria-labelledby="services-heading" className="w-full text-gray-800 overflow-hidden">
      <Card>
        <CardContent className="p-8 md:p-12 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white via-[#f7fcfb] to-[#f0fdfb] relative">
          <div className="absolute top-8 left-8">
            <PillLabel>Services</PillLabel>
          </div>
          <h2 id="services-heading" className="text-3xl font-bold text-center mt-8 mb-12">Helping You Help Others</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article 
                key={index} 
                className="text-center group cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:shadow-lg rounded-lg p-6"
              >
                <div className="mb-6 flex justify-center">
                  <service.icon className="h-12 w-12 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300">{service.description}</p>
                <button className="text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center group-hover:font-semibold" aria-label={`Learn more about ${service.title}`}>
                  Learn more about {service.title}
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </button>
              </article>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

