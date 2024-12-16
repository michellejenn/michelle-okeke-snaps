import './PhotoDetails.scss'
import Like from '../Icons/Like';
const baseURL = import.meta.env.VITE_API_URL;


function PhotoDetails(props){
    return(
        <>
       
        <section className="details">
            <section className='details__image-wrapper'>
            <img src={`${baseURL}${props.clickedPhoto.photo}`} alt={props.clickedPhoto?.photoDescription} className="details__photo" />
          
            </section>
            
            <section className='details__list-wrapper'>
            <ul className="details__tags">
                {props.clickedPhoto.tags?.map((tag, index) => {
                    return <li key={index}className="details__tag">{tag}</li>
                })}
            </ul>
            <ul className="details__items">
                <section className="details__top">
                <li className="details__likes">
                    <Like/>
                    {props.clickedPhoto.likes} likes
                </li>
                <li className="details__photographer">Photo by {props.clickedPhoto?.photographer}</li>
                </section>
                
                <li className="details__time">{props.formatTimestamp(props.clickedPhoto?.timestamp)}</li>
            </ul>
            </section>
            
        </section>
        </>
        
    )
}
export default PhotoDetails;