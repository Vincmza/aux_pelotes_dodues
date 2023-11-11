import React, {useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const Contact = ()=>{

    const handle_submit = (e)=>{
        console.log("FORMULAIRE ==> ", e)
    }

    return (
        <div className='contact'>

            <div className='contact__container'>

                <form onSubmit={handle_submit} className='form'>
                    
                    <label htmlFor='username'className='form__labelUsername'>
                        Votre nom
                    </label>

                    <input 
                    name="username" 
                    type="text" 
                    id="username" 
                    required
                    className='form__inputUsername'
                    />

                    <label htmlFor='email'className='form__labelEmail'>
                        Votre email
                    </label>

                    <input 
                    name="email" 
                    type="email" 
                    id="email"
                    className='form__inputEmail' 
                    required/>

                    <label htmlFor='message' className='form__labelMessage'>
                        Votre message
                    </label>
                    <textarea 
                    name="message" 
                    type="text" 
                    id="message"
                    className='form__textArea'
                    autoCapitalize='sentences'
                    spellCheck="true"
                    maxLength="300"

                    />
                    <button className='form__submitButton' type="submit">Soumettre</button>
                </form>

            </div>

        </div>
    )
}
export default Contact

