import './SnapsCommentPage.scss';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import PhotoDetails from '../../components/PhotoDetails/PhotoDetails';
import Form from '../../components/Form/Form';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const baseURL = import.meta.env.VITE_API_URL;

//Comments Page component

function SnapsCommentPage(){
    //defining state functions to update the photo and comment
    const [clickedPhoto, setClickedPhoto] = useState({});
    const [clickedComments, setComment] =useState([])

    //defining params to extract parameters from the url for rendering
    const params = useParams();

    //converting timestamp to date format
    function formatTimestamp(timestamp){
        const date = new Date(timestamp)
        return date.toLocaleDateString("en-US");
    }

    //defining function to get comment from API
    async function getComment(){
        try{
            const response = await axios.get
          
            // (`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${params.id}/comments?api_key=628874a8-ed5d-4c64-9e35-3a54f31dc501`)
            (`${baseURL}/photos/${params.id}/comments`);
            console.log(params.id);
          
            const comments =[...response.data]
            // const reversedComments =[...response.data].reverse();
            setComment(comments)
          
        }
        catch (error){
            console.log('error getting comments' , error)
        }
    }

    //defing a useeffect with a get request side effect, updating photo data and rendering once on mounting
    useEffect(() => {
        async function getClickedPhoto(){
            try{
                const response = await axios.get
                // (
                //     `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${params.id}?api_key=628874a8-ed5d-4c64-9e35-3a54f31dc501`
                    
                // )
                (`${baseURL}/photos/${params.id}`)
                // console.log(params.id)
                
                setClickedPhoto(response.data)
            }
            catch(error){
                console.log('error getting photos' , error)
            }
        }
        getClickedPhoto();
    }, []);

    //defining useEffect to get run the getComment sideEffect everytime a new id is accessed
    useEffect(()=>{
        
        getComment();
    }, [params.id]);
    
    //defining handle submit function to post new comment and get all comments displayed on page
    async function handleSubmit(newComment) {
        try{
            await axios.post(
                // `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${params.id}/comments?api_key=628874a8-ed5d-4c64-9e35-3a54f31dc501`,
                `${baseURL}/photos/${params.id}/comments`,
                newComment
            )
            getComment();
        }
        catch(error){
            console.log("Error posting comment", error);
        }
    }
    return(
        <section>
             <Header isHome = {false}/>
             <PhotoDetails clickedPhoto={clickedPhoto} formatTimestamp={formatTimestamp}/>
             <Form clickedComments={clickedComments} formatTimestamp={formatTimestamp} handleSubmit={handleSubmit}/>
             <Footer/>
        </section>
       
    )
        


    
}
 export default SnapsCommentPage;
