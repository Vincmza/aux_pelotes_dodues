import React, {useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
//ICONS
import * as icons from "../../resources/icons"

const TextArea = (props)=>{
    const limit = 300
    const [countValue, setCountValue]=useState(0)

    //FUNCTION TO CATCH VALUE OF TEXTAREA
    const count = (e)=>{
        const value = e.target.value.length
        setCountValue(value)
    }
    
    return (
        <>
            <textarea 
            name={props.name} 
            type={props.type}  
            id={props.id} 
            onFocus={(event)=>props.handle_label_color(event)}
            autoCapitalize={props.autoCapitalize} 
            spellCheck={props.spellCheck} 
            maxLength={props.maxLength}
            onChange={(e)=>count(e)} 
            />
            <div 
            className={props.className}
            style={{color: countValue === limit && "red"}}
            >
                {countValue}/{limit}
            
            </div>
        </>  
    )
}
export default TextArea

