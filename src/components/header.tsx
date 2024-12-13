import Link from 'next/link'
import { ContactUsButton } from './contact-us-button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'

const menuItems = [
  {
    title: 'Services',
    items: ['Service 1', 'Service 2', 'Service 3'],
  },
  {
    title: 'Products',
    items: ['Product 1', 'Product 2', 'Product 3'],
  },
  {
    title: 'About Us',
    items: ['Our Story', 'Team', 'Careers'],
  },
]

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-2xl font-bold">
            DH.D
          </Link>
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <DropdownMenu key={item.title}>
                <DropdownMenuTrigger className="text-white/80 hover:text-white transition-colors inline-flex items-center">
                  {item.title}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.items.map((subItem) => (
                    <DropdownMenuItem key={subItem}>
                      <Link href="#" className="w-full">
                        {subItem}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </nav>
          <ContactUsButton />
        </div>
      </div>
    </header>
  )
}

