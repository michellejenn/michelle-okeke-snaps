import "./TagList.scss";
import axios from "axios";
import { useState,useEffect } from "react";

const baseURL = import.meta.env.VITE_API_URL;

//Defining the TagList Component. This component receives data from the app component to conditionally display its content 
//based on the filter button click event in the header.

function TagList(props){
  
    const [Tags, setTags] = useState([]);
    async function getTags(){
        try{
            const response = await axios.get
            // ("https://unit-3-project-c5faaab51857.herokuapp.com/tags/?api_key=628874a8-ed5d-4c64-9e35-3a54f31dc501")
                (`${baseURL}/tags`)
            setTags(response.data);
        }
        catch (error){
            console.log("error getting tags", error);
        } 
    }
   
    useEffect(() =>{
        getTags()
    },[]);

    return(
        <section className="filter">
            <h2 className="filter__header"> Filters</h2>
            <ul className="filter__list">
                {Tags.map((tag, index)=>{
                    let isSelectedTag = tag === props.selectedTag;
                    console.log(props.selectedTag)
                    return(
                        <li onClick={()=>{
                            if(isSelectedTag){props.filterTagClick("");
                            }
                            else{props.filterTagClick(tag);}
                        }} className={`filter__item ${
                            isSelectedTag ? `filter__item--active` : ""
                        }`} key ={index}>
                           {tag}
                        </li>
                    );
                })}
            </ul>
        </section>
    )
}
export default TagList;