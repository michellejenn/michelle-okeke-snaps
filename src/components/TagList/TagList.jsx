import "./TagList.scss";
import filterData from "../../data/tags.json";   

function TagList(){


    return(
        <section className="filter">
            <h2 className="filter__header"> Filters</h2>
            <ul className="filter__list">
                {filterData.map((tag, index)=>{
                    return(
                        <li className="filter__item" key ={index}>
                           {tag}
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
export default TagList;