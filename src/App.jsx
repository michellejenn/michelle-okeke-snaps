
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SnapsHomePage from './pages/SnapsHomePage/SnapsHomePage';
import SnapsCommentPage from './pages/SnapsCommentPage/SnapsCommentPage';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return(
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SnapsHomePage/>}/>
        <Route path ="/photos/:id" element={<SnapsCommentPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
