import team1 from '../../images/Team/Team-1.jpeg'
import team2 from '../../images/Team/Team-2.jpeg'
import team3 from '../../images/Team/Team-3.jpeg'
import team4 from '../../images/Team/Team-4.jpeg'
import team5 from '../../images/Team/Team-5.jpeg'
import team6 from '../../images/Team/Team-6.jpeg'

export const Team = () => {
    const OurTeam = [
        { img: team1},
        { img: team2},
        { img: team3},
        { img: team4},
        { img: team5},
        { img: team6},
    ]
    return (
        <>
        <div className="team" id='team'>
            <h2>Our Perfect Team</h2>
            <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
            </div>
            <div className="necesaryTeam">
            <div className="decoration">
            <div className="placeTeam__Container">
                {OurTeam.map((team,id) => (
                <div className="photos_team" key={id}>
                <img src={team.img} alt="" />
                </div>
                ))}
         </div>
         </div>
         </div>
     </>
    )    
}