import "./PhotoCard.scss";

function PhotoCard(props){

    return(
        <section className="card">
            <li className="card__item">
                <img src={props.photoItems.photo} alt="gallery images" className="card__image" />
                <p className="card__photographer">{props.photoItems.photographer}</p>
                <ul className="card__tags">
                    {props.photoItems.tags.map((tag, index)=>{
                        return(
                            <li key={index}className="card__tag-piece">
                                {tag}
                            </li>
                        )
                    })}
                </ul> 
            </li>

        </section>
    )
}

export default PhotoCard;