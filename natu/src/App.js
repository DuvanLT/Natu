import {NavBar} from './components/nav/NavBar.jsx'
import {Hero} from './components/hero/Hero.jsx'
import {Places} from './components/places/Places.jsx'
import {Gallery1} from './components/gallery/Gallery.jsx'
import { Gallery2 } from './components/gallery/Gallery.jsx'
import {Price} from './components/price/Price.jsx'
import {Team} from './components/team/team.jsx'
import { Newletter } from './components/newletter/Newletter.jsx'
import './styles/navStyles/navBar.css'
import './styles/heroStyles/hero.css'
import './styles/placesStyles/place.css'
import './styles/gallery1Style/gallery1.css'
import './styles/priceStyles/price.css'
import './styles/teamStyle/team.css'
import './styles/newletter/newletter.css'
import './App.css';

function App() {
  return (
    <>
    <NavBar />
    <Hero />
    <Places />
    <Gallery1 />
    <Price />
    <Team />   
    <Gallery2 />
    <Newletter />
   </>
  );
}

export default App;
