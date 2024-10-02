export default function Description({ title, children }) {
  return (
    <div>
      <h2 className='description__title'>{title}</h2>
      <p className='description__text'>{children}</p>
    </div>
  )
}
