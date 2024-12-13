import { Button } from '@/components/ui/button'
import { type LucideIcon } from 'lucide-react'

interface ContactUsButtonProps {
  label?: string;
  icon?: LucideIcon;
}

export function ContactUsButton({ label = "Contact Us", icon: Icon }: ContactUsButtonProps) {
  return (
    <Button 
      variant="outline" 
      size="lg" 
      className="bg-white text-blue-600 border-white hover:bg-blue-600 hover:text-white transition-colors duration-200"
    >
      {Icon && <Icon className="mr-2 h-4 w-4" />}
      {label}
      {!Icon && <span className="ml-2">→</span>}
    </Button>
  )
}

