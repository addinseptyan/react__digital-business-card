export default function Button({ href, icon, classname, children }) {
  const lowerCaseClassname = classname.toLowerCase()

  return (
    <a href={href} target='_blank' className={`button ${lowerCaseClassname}`}>
      <img src={icon} alt='icon' />
      <span>{children}</span>
    </a>
  )
}
