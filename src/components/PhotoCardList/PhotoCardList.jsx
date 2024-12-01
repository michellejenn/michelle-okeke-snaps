import "./PhotoCardList.scss";
import photoData from "../../data/photos.json";
import PhotoCard from "../PhotoCard/PhotoCard";
// import photoData from "src/data/photos.json";
import { useState } from "react";

function PhotoCardList(){

    const[photos, setPhotos] = useState(photoData);
    console.log(photoData);
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
                {photos.map((photo)=>{
                    return <PhotoCard key={photo.id} photoItems={photo}/>
                })}

            </ul>
        </section>
    )
}
export default PhotoCardList;