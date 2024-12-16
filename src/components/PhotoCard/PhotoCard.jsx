import "./PhotoCard.scss";
import { Link } from "react-router-dom";

// Defining the component for each photo card element. This receives props from the parent component PhotoCardList

function PhotoCard(props){
    console.log(props.photoItems.photo)
    return(
      <Link to= {`/photos/${props.photoItems.id}`} key ={props.photoItems.id}>
        <section className="card">
        <li className="card__item">
                <img src={`http://localhost:8080/${props.photoItems.photo}`} alt={`Photo by ${props.photoItems.photographer}`} className="card__image" />
                <p className="card__photographer">{props.photoItems?.photographer}</p>
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
      </Link>
    )
}

export default PhotoCard;