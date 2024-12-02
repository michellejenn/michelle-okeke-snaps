import "./TagList.scss";
import filterData from "../../data/tags.json";   

//Defining the TagList Component. This component receives data from the app component to conditionally display its content 
//based on the filter button click event in the header.
// It also listens for a click event and updates the state variable data used to filter the photoCardList.
//The app serves as the parent for the interaction between this component and the PhotoCardList component.
function TagList(props){


    return(
        <section className="filter">
            <h2 className="filter__header"> Filters</h2>
            <ul className="filter__list">
                {filterData.map((tag, index)=>{
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