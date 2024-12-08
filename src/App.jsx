// import { useState } from 'react'
// import './App.scss'
// import Header from './components/Header/Header'
// import TagList from './components/TagList/TagList'
// import PhotoCardList from './components/PhotoCardList/PhotoCardList'
// import Footer from './components/Footer/Footer'

import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SnapsHomePage from './pages/SnapsHomePage/SnapsHomePage';




//Defining the App component. This component serves as the parent component through which data flows down to child components.
// The seperate components interact with each other through this component passing data down via props. Events such as click event triggers
//update functions here that update the state variables. 
//Directly renders the HEADER, TAGLIST AND PHOTOCARDLIST component to the root.

function App() {
  return(
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SnapsHomePage/>}/>

       
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
//   //state variables, setter functions and useState to handle dynamically changing data
//   const [filterStatus, setFilterStatus] = useState(false);   
//   const [selectedTag, setSelectedTag] = useState("");
    
//    //event handler that serves to update the filterStatus based on a click event in the Header component 
//   function filterStatusHandler(){
//     setFilterStatus(!filterStatus);
//   }

//    //event handler that serves to update the clicked tag value based on a click event in the TagList component 
//   function clickedTagHandler(clickedTag){
//     setSelectedTag(clickedTag)
//   }
//     return (
//       <div className='app'>
//         <Header filterStatusHandler ={filterStatusHandler} filterStatus={filterStatus}/>
//         <section className="hero-wrapper" >

//           {/* conditionally render the TagList component based on the filter status and receives selectedTag props to filter*/}
//           {filterStatus ?(
//             <TagList filterTagClick={clickedTagHandler} selectedTag={selectedTag}/>
//           ) : null}
          
//           <PhotoCardList selectedTag={selectedTag}/>
//         </section>
        
//         <Footer/>
//       </div>
//     )
// }

// export default App
