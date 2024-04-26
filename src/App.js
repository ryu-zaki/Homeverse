
import './App.css';
import AboutSection from './components/about/AboutSection';
import Aminities from './components/aminities/Aminities';
import HeroSection from './components/hero/HeroSection';
import NavBar from './components/navigations/NavBar';
import Properties from './components/properties/Properties';
import Services from './components/services/Services';

function App() {
  return (
    <div className="App flex flex-col">
      <NavBar />

      <main className='flex flex-col gap-10'>
       <HeroSection />
       <AboutSection />
       <Services />
       <Properties />
       <Aminities />
      </main>
      
    </div>
  );
}

export default App;
