import './SnapsHomePage.scss'
import { useState } from 'react'
import Header from '../../components/Header/Header'
import TagList from '../../components/TagList/TagList'
import PhotoCardList from '../../components/PhotoCardList/PhotoCardList'
import Footer from '../../components/Footer/Footer'

//Defining the App component. This component serves as the parent component through which data flows down to child components.

function SnapsHomePage() {
  //state variables, setter functions and useState to handle dynamically changing data
  const [filterStatus, setFilterStatus] = useState(false);   
  const [selectedTag, setSelectedTag] = useState("");
    
  function filterStatusHandler(){
    setFilterStatus(!filterStatus);
  }

   //event handler that serves to update the clicked tag value based on a click event in the TagList component 
  function clickedTagHandler(clickedTag){
    setSelectedTag(clickedTag)
  }
    return (
      <section className='home'>
        <Header isHome ={true} filterStatusHandler ={filterStatusHandler} filterStatus={filterStatus}/>
        <section className="hero-wrapper" >
          {filterStatus ?(
            <TagList filterTagClick={clickedTagHandler} selectedTag={selectedTag}/>
          ) : null}
          
          <PhotoCardList selectedTag={selectedTag}/>
        </section>
        
        <Footer/>
      </section>
    )
}

export default SnapsHomePage
