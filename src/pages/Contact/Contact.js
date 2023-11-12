import React, {useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
//COMPONENTS
import TextArea from './TextArea';

const Contact = ()=>{

    const purple_font = "rgb(151,143,255)"
    const scale_bigger = "scale(1.1)"
    const transition = "200ms"

    const [input_focused, set_input_focused]=useState("")


    const handle_label_color = (event)=>{
        //console.log("AVANT LE STATE", event.target.id)
        set_input_focused("")
        set_input_focused(event.target.id)
    }
    //console.log("APRES LA MAJ DU STATE ==> ", input_focused)

    const get_data = (e)=>{
        e.preventDefault();
        const form = e.target
        const formData = new FormData(form)
        const data = {
            username : formData.get("username"),
            email : formData.get("email"),
            message : formData.get("message")
        }
        return data
    }

    const handle_submit = (e)=>{
        const data = get_data()
        console.log(`Username = ${data.username}, email = ${data.email}, Message = ${data.message}`)

    }
    const return_style = (name)=>{
        const data = {
            "color": purple_font,
            "transform": scale_bigger,
            "transition": transition,
            "font-weight" : "bold"
        }
        if(input_focused === name){
            return data
        }
    }

    return (
        <div className='contact'>

            <div className='contact__container'>

                <form onSubmit={handle_submit} className='form'>
                    
                    <label 
                    htmlFor='username' 
                    style={return_style("username")}>
                        Votre nom
                    </label>

                    <input 
                    name="username" 
                    type="text" 
                    id="username" 
                    required
                    onFocus={(event)=>handle_label_color(event)}
                    />

                    <label htmlFor='email' style={return_style("email")}>
                        Votre email
                    </label>

                    <input 
                    name="email" 
                    type="email" 
                    id="email"
                    onFocus={(event)=>handle_label_color(event)} 
                    required/>

                    <label htmlFor='message' style={return_style("message")}>
                        Votre message
                    </label>
                    <TextArea
                    name="message"
                    type="text"
                    id="message"
                    handle_label_color={handle_label_color}
                    autoCapitalize='sentences'
                    spellCheck="true"
                    maxLength="300"
                    className="form__counter"
                    />
                    {/* <textarea 
                    name="message" 
                    type="text" 
                    id="message"
                    onFocus={(event)=>handle_label_color(event)}
                    autoCapitalize='sentences'
                    spellCheck="true"
                    maxLength="300"
                    /> */}
                    <button className='form__submitButton' type="submit">Soumettre</button>
                </form>

            </div>

        </div>
    )
}
export default Contact

