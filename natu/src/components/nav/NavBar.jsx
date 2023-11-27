export const NavBar = () =>{
    return(
        <>
        <nav>
            /*For Mobile */
            <div className="menuH">
                <img src="../../images/icon/menu.png" alt="" />
            </div>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Places</a>
                </li>
                <li>
                    <a href="#">Price</a>
                </li>
                <li>
                    <a href="#">Team</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>    
        </>
       

    );
}
