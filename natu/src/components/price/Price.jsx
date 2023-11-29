import price1 from '../../images/Hero-Price/Hero-Price-1.jpg'
import price2 from '../../images/Price/Price-2.jpg'
import price3 from '../../images/Price/Price-3.jpg'

export const Price = () =>{
    const PriceData = [
            {img: price1,name:"MOUNTAINS TRAVEL", description: "Sample text. Click to select the text box. Click again or double click to start editing the text.", price: "$ 600"},
            {img: price2,name: "SURF TRAVEL", description: "Sample text. Click to select the text box. Click again or double click to start editing the text.", price: "$ 800"},
            {img: price3,name: "OCEAN TRAVEL", description: "Sample text. Click to select the text box. Click again or double click to start editing the text.", price: "$ 700"},
    ]
    return(
        <>
        <section className="price">
        {PriceData.map((price , id) => (
        <div className="price_Container" key={id}>
            <div className="price_photo">
                <img src={price.img} alt="" />
            </div>
            <h3>{price.name}</h3>
            <p>{price.description}</p>
        <div className="price-footer">
            <span>{price.price}</span>
            <button>BOOK NOW</button>
        </div>
        </div>
    ))}
    </section>
    </>
    )
}