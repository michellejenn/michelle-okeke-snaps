import "./PhotoCardList.scss";
import photos from "../../data/photos.json";
import PhotoCard from "../PhotoCard/PhotoCard";


// Defining the PhotoCardList component. This component passes data through props to the Photocard component and recieves data 
//from the app component regarding the selected tag of the Taglist component with which it filters the cardlist component
function PhotoCardList(props){
    let filteredPhotos = [];

    // This conditionally filters through the cards based on selected/clicked tag and maps it for each PhotoCard Component
    if (props.selectedTag !== ""){
        filteredPhotos = photos.filter((photo) =>{
            return photo.tags.includes(props.selectedTag);
        });
    } else {
        filteredPhotos = photos;
    }
    return(
        <section className="photo">
            <h4 className="photo__header">
                our mission:
            </h4>
            <p className="photo__mission">
                Provide photographers a space to share photos of the neighbourhoods they cherish, 
                <span className="photo__italics"> expressed in their unique style.</span>
            </p>
            <ul className="photo__list">
                {filteredPhotos.map((photo)=>{
                    return <PhotoCard key={photo.id} photoItems={photo}/>
                })}
            </ul>
        </section>
    )
}
export default PhotoCardList;