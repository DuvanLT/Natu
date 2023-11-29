import gallery1 from '../../images/Gallery/Gallery-1.jpeg'
import gallery2 from '../../images/Gallery/Gallery-2.jpeg'
import gallery3 from '../../images/Gallery/Gallery-3.jpeg'
import gallery4 from '../../images/Gallery/Gallery-4.jpeg'



export const Gallery1 = () => {
    return(
        <section className="gallery">
            <img src={gallery1} alt="" className='gallery1'/>
            <img src={gallery2} alt="" className='gallery2' />
        </section>
    )
}

export const Gallery2 = () => {
    return(
        <section className="gallery">
            <img src={gallery4} alt="" className='gallery1'/>
            <div className="textGallery">
                <h3>Sony Wolrd Photography Awards</h3>
                <p>We are delighted to reveal the winners of the 2018 Sony World Photography Awards.</p>
            </div>
            <div className="photoWithText">
            <img src={gallery3} alt="" className='gallery2' />
            </div>
        </section> 
    )
}
