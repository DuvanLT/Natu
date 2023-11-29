import place1 from '../../images/Place/Place-1.jpeg'
import place2 from '../../images/Place/Place-2.jpeg'
import place3 from '../../images/Place/Place-3.jpeg'

export const Places =() => {
    const PlacesPhotos = [
        { img: place1},
        { img: place2},
        { img: place3},
    ]
    return (
        <>
        <div className="places" id='places'>
            <h2>Best places to hike and trek in the world.</h2>
            <p>If youre an adventurer who loves being out in nature, a hiking and trekking tour should be next on your list. You can expect great wildlife photography opportunities and the chance to travel with a group of like-minded individuals who love the great outdoors.</p>
            </div>
            <div className="necesary">
            <div className="decoration">
            <div className="placePhotos__Container">
                {PlacesPhotos.map((place,id) => (
                <div className="photos_places" key={id}>
                <img src={place.img} alt="" />
                 <a href="">view more</a>
                </div>
                ))}
         </div>
         </div>
         </div>
     </>
    )    
}

