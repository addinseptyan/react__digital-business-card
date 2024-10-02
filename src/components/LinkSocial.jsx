export default function LinkSocial({ href, icon, alt }) {
  return (
    <a href={href} target='_blank' className='link-social'>
      <img src={icon} alt={alt} />
    </a>
  )
}
