import "./PhotoCard.scss";

// Defining the component for each photo card element. This receives props from the parent component PhotoCardList

function PhotoCard(props){

    return(
        <section className="card">

            {/* This list contains all the components of a single card */}
            <li className="card__item">
                <img src={props.photoItems.photo} alt="gallery images" className="card__image" />
                <p className="card__photographer">{props.photoItems.photographer}</p>
                <ul className="card__tags">

                    {/* Mapping through the tag array to assign each array element to a list element */}
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