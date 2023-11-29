import logo from '../../icon/logo.png'
export const Footer = () => {
    return(
        <footer>
            <div className="experience">
            <h5>New Experience</h5>
            <ul>
            <a href=""><li>Mountains</li></a>   
                <a href=""> <li>Caves</li></a>   
                <a href=""><li>Forest</li></a>   
             <a href=""><li>Lakes</li></a>   
            </ul>
            </div>
            <div className="living beings">
            <h5>Living Beings</h5>
                <ul>
                <a href=""> <li>aquatics</li></a> 
                <a href=""> <li>land</li></a> 
                <a href=""><li>plants</li></a> 
                </ul>
            </div>
            <div className="social media">
                <h5>Social Media</h5>
                <ul>
                <a href="">  <li>Facebook</li></a> 
                <a href=""> <li>Instagram</li></a> 
                <a href="">  <li>X</li></a> 
                </ul>
            </div>
        </footer>
    )
}