import { useState } from 'react';
import menu from '../../icon/menu.png'
export const NavBar = () =>{
    const [nav,setNav] = useState(true)
    return(
        <>
        <nav>
            <div className="logo">
                <span>Natu</span>
            </div>
            <ul className={` ${nav && "openNav"}`}>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Places</a>
                </li>
                <li>
                    <a href="">Price</a>
                </li>
                <li>
                    <a href="">Team</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
            <div className="menuH" onClick={ () => setNav(!nav)}>
                <img src={menu} />
            </div>
        </nav>    
        </>
       

    );
}
