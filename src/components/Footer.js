import React, {useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
//ICONS
import * as icons from "../resources/icons"
//COMPONENTS
import ScrollUp from './ScrollUp';

const Footer = ()=>{
    
    return (
        <div className='footer'>
            <div>

            </div>
            <div className='footer__scrollUp'>
                <ScrollUp/>
            </div>
        </div>
    )
}
export default Footer

