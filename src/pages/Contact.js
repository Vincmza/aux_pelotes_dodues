import React, {useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const Contact = ()=>{

    const font_color = "rgb(151,143,255)"

    const [input_focused, set_input_focused]=useState("")


    const handle_label_color = (event)=>{
        //console.log("AVANT LE STATE", event.target.id)
        set_input_focused("")
        set_input_focused(event.target.id)
    }
    //console.log("APRES LA MAJ DU STATE ==> ", input_focused)

    const handle_submit = (e)=>{
        console.log("FORMULAIRE ==> ", e)
    }

    return (
        <div className='contact'>

            <div className='contact__container'>

                <form onSubmit={handle_submit} className='form'>
                    
                    <label htmlFor='username' style={{color: input_focused === "username" && font_color}}>
                        Votre nom
                    </label>

                    <input 
                    name="username" 
                    type="text" 
                    id="username" 
                    required
                    onFocus={(event)=>handle_label_color(event)}
                    />

                    <label htmlFor='email' style={{color: input_focused === "email" && font_color}}>
                        Votre email
                    </label>

                    <input 
                    name="email" 
                    type="email" 
                    id="email"
                    onFocus={(event)=>handle_label_color(event)} 
                    required/>

                    <label htmlFor='message' style={{color: input_focused === "message" && font_color}}>
                        Votre message
                    </label>
                    <textarea 
                    name="message" 
                    type="text" 
                    id="message"
                    onFocus={(event)=>handle_label_color(event)}
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

