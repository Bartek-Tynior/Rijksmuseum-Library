function Card({artObject}) {
    return (
        <div>
            <h2 className="card_title">{artObject.title}</h2>
            <img className="card_image" src={artObject.headerImage.url} />
        </div>
    )
}

export default Card;