import galery1 from '../../images/Galery/Galery-1.jpeg'
import galery2 from '../../images/Galery/Galery-2.jpeg'


export const Galery = () => {
    return(
        <section className="galery">
            <img src={galery1} alt="" className='galery1'/>
            <img src={galery2} alt="" className='galery2' />
        </section>
    )
}