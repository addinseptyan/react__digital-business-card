import './App.css'
import Article from './components/Article'
import Footer from './components/Footer'
import Info from './components/Info'

export default function App() {
  return (
    <div className='card'>
      <Info />
      <Article />
      <Footer />
    </div>
  )
}
