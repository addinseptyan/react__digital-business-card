import LinkSocial from './LinkSocial'
import { socialLinks } from '../utils/socialLinks'
import emailIcon from '../assets/icons/mail.svg'

export default function Footer() {
  return (
    <footer className='footer'>
      {socialLinks.map((link) => (
        <LinkSocial
          key={link.title}
          href={link.href}
          icon={link.icon}
          alt={link.title}
        />
      ))}
    </footer>
  )
}
