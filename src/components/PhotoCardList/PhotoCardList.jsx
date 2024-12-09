import "./PhotoCardList.scss";
// import photos from "../../data/photos.json";
import PhotoCard from "../PhotoCard/PhotoCard";
import { useState, useEffect } from "react";
import axios from "axios";


// Defining the PhotoCardList component. This component passes data through props to the Photocard component and recieves data 
//from the app component regarding the selected tag of the Taglist component with which it filters the cardlist component

function PhotoCardList(props){
    const[photos, setPhotos] = useState([])
    let filteredPhotos = [];

    useEffect(()=>{
        async function getPhotos(){
            try{
                const response =  await axios.get(
                    "https://unit-3-project-c5faaab51857.herokuapp.com/photos/?api_key=628874a8-ed5d-4c64-9e35-3a54f31dc501")
                    setPhotos(response.data)
            }
            catch(error){
                console.log("error getting photo details", error)
            }
           
        }
        getPhotos()
    }, [])

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