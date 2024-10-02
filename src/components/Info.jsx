import myPicture from '../assets/images/my-picture.jpg'
import linkedinIcon from '../assets/icons/linkedin.svg'
import emailIcon from '../assets/icons/mail.svg'
import Button from './Button'
import { ctaButtons } from '../utils/ctaButtons'

export default function Info() {
  return (
    <div className='info'>
      <img src={myPicture} alt='My handsome image' />
      <article className='details'>
        <h1 className='name'>Addin Septyan</h1>
        <h3 className='job'>Frontend Developer</h3>
        <p className='website'>addinseptyan.my.id</p>
      </article>
      <div className='buttons'>
        {ctaButtons.map((button) => (
          <Button
            key={button.title}
            icon={button.icon}
            href={button.href}
            classname={button.title}
          >
            {button.title}
          </Button>
        ))}
        {/* <Button icon={linkedinIcon} classname='linkedin'>
          LinkedIn
        </Button> */}
      </div>
    </div>
  )
}
