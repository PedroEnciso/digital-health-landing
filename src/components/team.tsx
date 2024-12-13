import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const team = [
  {
    name: "JD Moore",
    role: "Principal Consultant",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aOfRbU9XLCAUoD00FiKDLeoJQQ2aGf.png",
  },
  {
    name: "Pedro Enciso",
    role: "Tech Lead",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MHt2t1R67KmYysCFQ4Ajno7NGYOhNE.png",
  },
  {
    name: "Marlene Flores",
    role: "Design Lead",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0lWgfC3ZAGOQQg1hCn0ypAQGAh5v1J.png",
  },
  {
    name: "Maciek Błasiak",
    role: "Board Member",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uZTX9BRIeRsH5Ql5CjSU43ibhIn16O.png",
  }
]

const PillLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-3 py-1 text-[10px] font-medium tracking-wider text-blue-600 uppercase bg-blue-100 border border-blue-200 rounded font-mono">
    {children}
  </span>
)

export default function Team() {
  return (
    <section aria-labelledby="team-heading" className="bg-white py-20 text-gray-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="text-center mb-12">
          <PillLabel>Our Team</PillLabel>
          <h2 id="team-heading" className="text-3xl font-bold mt-2 text-gray-900">Meet the Experts</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We are a collective of like-minded contributors who want an easier approach to health equity and improved outcomes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="bg-gray-50 border border-gray-200">
              <CardContent className="p-6 text-center">
                <Image
                  src={member.image}
                  alt={`Headshot of ${member.name}`}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg text-gray-900">{member.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

