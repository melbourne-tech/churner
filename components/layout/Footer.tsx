import { Github, Globe, Mail, Twitter } from 'lucide-react'

const SOCIAL = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/melb_dot_tech',
    icon: <Twitter className="h-5 w-5" aria-hidden="true" />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/melbourne-tech/churner',
    icon: <Github className="h-5 w-5" aria-hidden="true" />,
  },
  {
    name: 'Website',
    href: 'https://www.melbournetech.com/',
    icon: <Globe className="h-5 w-5" aria-hidden="true" />,
  },
  {
    name: 'Email',
    href: 'mailto:hello@churner.com.au',
    icon: <Mail className="h-5 w-5" aria-hidden="true" />,
  },
]

const CURRENT_YEAR = new Date().getFullYear()

const Footer = () => {
  return (
    <div className="bg-white border-t p-4 md:flex md:items-center md:justify-between">
      <div className="flex space-x-6 md:order-2">
        {SOCIAL.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-400"
          >
            <span className="sr-only">{item.name}</span>
            {item.icon}
          </a>
        ))}
      </div>
      <p className="mt-4 text-xs leading-5 text-gray-600 md:order-1 md:mt-0">
        &copy; {CURRENT_YEAR}{' '}
        <a href="https://www.melbournetech.com/" target="_blank">
          Melbourne Tech, LLC
        </a>
        . All rights reserved.
      </p>
    </div>
  )
}

export default Footer
