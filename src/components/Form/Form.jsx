import './Form.scss';
import { useState } from 'react';

function Form(props){
    //setting state for formData and error
    const [formData, setFormData] =useState({
        name: "",
        comment:"",
    });
    const [errors, setErrors] = useState({
        name: "",
        comment: ""
    });

    //function to control change in input field and update state variables for formdata and error
    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});

        setErrors({ ...errors, [name]: ""});
    };

    //function to handle form validation
    const validateForm =() => {
        let valid = true;
        let errorMessages ={name: "", comment: ""};

        if (!formData.name.trim()){
            errorMessages.name ="Name is required";
            valid = false;
        }

        if (!formData.comment.trim()){
            errorMessages.comment ="Comment is required";
            valid = false;
        }
        setErrors(errorMessages);
        return valid;

    };

    //function to invoke callback function (handleSubmit) after running validation upon every submit
    const onSubmit = (event) => {
        event.preventDefault();
        if (validateForm()){
            props.handleSubmit(formData);
            setFormData({name: "", comment: "",});
        }
        
    };

    //returning the jsx syntax for the component
    return(
        <section className='form-comments'>
            <section className="form__wrapper">
                <form className="form" onSubmit={onSubmit}>
                <label htmlFor="formName" className="form__label">
                    Name:
                </label>
                <input 
                className={`form__name ${errors.name ? 'error' : ''}`}
                type="text" 
                name="name" 
                id="formName" 
                value={formData.name}
                onChange={handleChange} 
            
                />
                {/* conditionally renders error message if input field is empty */}
                {errors.name && <p className='error'>{errors.name}</p>}
                <label htmlFor="formComment" className="form__label">
                    Comment:
                </label>
            <input 
            type="textarea" 
            className={`form__comment ${errors.name ? 'error' : ''}`} 
            name="comment" 
            id="formComment" 
            value={formData.comment} 
            onChange={handleChange} 
            
            />
            {/* conditionally renders error message if input field is empty */}
             {errors.comment && <p className='error'>{errors.comment}</p>}
                <button type ="submit" className="form__button">Submit</button>

                </form>

            </section>
            <section className="comments__wrapper">
                <section className="comments">
                <p className="comments__number">{props.clickedComments?.length} Comment(s)</p>
                <ul className="comments__items">
                    {props.clickedComments?.map((comment) =>{
                        return ( 
                            <section className=" comments__section" key={comment.id}>
                                <article className="comments__nameDate">
                                    <li className="comment__listItem">{comment.name}</li>
                                    <li className="comment__listItem">{props.formatTimestamp(comment.timestamp)}</li>
                                </article>
                                    <li className="comment__listItem">{comment.comment}</li>
                            </section>
                            
                        )
                    })}
                </ul>
                </section>
            </section>
           
        </section>
        
    )
}
export default Form;