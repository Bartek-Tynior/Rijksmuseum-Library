import { Link } from "react-router-dom"

function Card({artObject}) {
    return (
        <Link to={`/${artObject.objectNumber}`}>
                <div className="card_image">
                    <img className="image" src={artObject.headerImage.url} />
                    <div className="down">
                        <h2>{artObject.title}</h2>                
                        <p>{artObject.principalOrFirstMaker}</p>
                    </div>
                </div>        
        </Link>
    )
}

export default Card;