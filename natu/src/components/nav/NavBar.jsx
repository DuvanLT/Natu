import { useState } from 'react';
import menu from '../../icon/menu.png'
import logo from '../../icon/logo.png'
export const NavBar = () =>{
    const [nav,setNav] = useState(true)
    const [a, setA] = useState(false)
    nav?document.documentElement.style.overflowY = 'auto' : document.documentElement.style.overflowY = 'hidden'
    nav?document.documentElement.style.overflowX = 'hidden' : document.documentElement.style.overflowX = 'hidden'
    if(nav === false && a === true){
        setNav(!nav)
        setA(!a)
    }
    return(
        <>
        <header>
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul className={` ${nav && "openNav"}`}>
                <li>
                    <a href="" onClick={ () => setA(!a)}>HOME</a>
                </li>
                <li>
                    <a href="#places" onClick={ () => setA(!a)}>PLACES</a>
                </li>
                <li>
                    <a href="#price" onClick={ () => setA(!a)}>PRICE</a>
                </li>
                <li>
                    <a href="#team" onClick={ () => setA(!a)}>TEAM</a>
                </li>
                <li>
                    <a href="#newletter" onClick={ () => setA(!a)}>CONTACT</a>
                </li>
            </ul>
            <div className="menuH" onClick={ () => setNav(!nav)}>
                <img src={menu} />
            </div>
        </nav>    
        </header>
        </>
       

    );
}
