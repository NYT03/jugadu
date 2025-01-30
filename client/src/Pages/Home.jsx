import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Features from '../Components/Features'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </main>
  )
}
