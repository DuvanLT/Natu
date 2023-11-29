import {NavBar} from './components/nav/NavBar.jsx'
import {Hero} from './components/hero/Hero.jsx'
import {Places} from './components/places/Places.jsx'
import {Galery} from './components/galery/galery.jsx'
import './styles/navStyles/navBar.css'
import './styles/heroStyles/hero.css'
import './styles/placesStyles/place.css'
import './styles/galery1Style/galery1.css'
import './App.css';

function App() {
  return (
    <>
    <NavBar />
    <Hero />
    <Places />
    <Galery />
   </>
  );
}

export default App;
