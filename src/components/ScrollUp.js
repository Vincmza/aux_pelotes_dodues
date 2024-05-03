import React, {useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
//ICONS
import * as icons from "../resources/icons"

const ScrollUp = ()=>{

    return (
        <>
            <button
            className="scrollUp"
            onClick={()=>window.scrollTo({top:0, left:0, behavior: 'smooth'})}
            >
                {icons.scrollUp}
            </button>
        </>
    )
}
export default ScrollUp

