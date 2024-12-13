import Link from "next/link"

const footerLinks = {
  Services: [
    'Compliance Testing',
    'Concept Validation',
    'Rapid Prototyping'
  ],
  Company: [
    'About Us',
    'Our Work',
    'Contact'
  ]
}

export default function Footer() {
  return (
    <footer className="bg-white py-16" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-2 gap-10 items-start">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                DH.D
              </Link>
              <p className="text-sm text-gray-600">Helping you help others</p>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-gray-600 text-left">
                <p>North County</p>
                <p>San Diego, CA</p>
                <p aria-label="California flag emoji">🏴‍☠️</p>
              </div>
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-gray-600 text-left">
                <Link href="/terms" className="hover:text-blue-600 transition-colors">Terms of service</Link>
                <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
              </div>
            </div>
          </div>
          <nav className="grid grid-cols-2 gap-8 lg:gap-12" aria-label="Footer navigation">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <span className="text-sm text-gray-600">VOSB | SBA | LLC</span>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>© {new Date().getFullYear()} DH.D. All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

