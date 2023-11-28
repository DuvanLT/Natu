import { useState } from 'react';
import menu from '../../icon/menu.png'
import logo from '../../icon/logo.png'
export const NavBar = () =>{
    const [nav,setNav] = useState(true)
    return(
        <>
        <header>
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul className={` ${nav && "openNav"}`}>
                <li>
                    <a href="">HOME</a>
                </li>
                <li>
                    <a href="">PLACES</a>
                </li>
                <li>
                    <a href="">PRICE</a>
                </li>
                <li>
                    <a href="">TEAM</a>
                </li>
                <li>
                    <a href="">CONTACT</a>
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
