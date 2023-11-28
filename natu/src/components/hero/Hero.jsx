import heroImage from '../../images/Hero-Price/Hero-Price-1.jpg'
export const Hero = () => {
    return(
        <>
        <section className="hero">
            <div className="hero_Text">
                <h1>I declare this world is so beautiful that I can hardly believe it exists</h1>
                <a href="">READ MORE</a>
            </div>
            <img src={heroImage} alt="" />
        </section>
        </>
    )
}