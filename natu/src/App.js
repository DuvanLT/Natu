import {NavBar} from './components/nav/NavBar.jsx'
import {Hero} from './components/hero/Hero.jsx'
import {Places} from './components/places/Places.jsx'
import {Gallery1} from './components/gallery/gallery.jsx'
import { Gallery2 } from './components/gallery/gallery.jsx'
import './styles/navStyles/navBar.css'
import './styles/heroStyles/hero.css'
import './styles/placesStyles/place.css'
import './styles/gallery1Style/gallery1.css'
import './App.css';

function App() {
  return (
    <>
    <NavBar />
    <Hero />
    <Places />
    <Gallery1 />

   </>
  );
}

export default App;
