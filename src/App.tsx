import AdvancedStatistics from './components/AdvancedStatistics'
import BoostLinks from './components/BoostLinks'
import Footer from './components/Footer'
import Header from './components/Header'
import MainSection from './components/MainSection'

function App() {
  return (
    <div className="min-h-screen font-primary text-body">
      <Header />
      <MainSection />
      <AdvancedStatistics />
      <BoostLinks />
      <Footer />
    </div>
  )
}

export default App
