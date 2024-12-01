import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './components/Header/Header'
import TagList from './components/TagList/TagList'
import PhotoCardList from './components/PhotoCardList/PhotoCardList'
import Footer from './components/Footer/Footer'

function App() {

   
    
    
  

    return (
      <>
        <Header/>
        <TagList/>
        <PhotoCardList/>
        <Footer/>
      </>
    )
}

export default App
