import React, {useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
//ICONS
import * as icons from "../../resources/icons"

const HeaderProject = ()=>{
    const project_name = "AUX PELOTES DODUES"
    const sentence = "Créations d'articles en laine, tissu et bois"
    const fb_page = "https://www.facebook.com/profile.php?id=100087777111729"
    return (
        <div className="header_project">
            <div className='header_project__container1'>
                <h1 className='header_project__container1__name'>
                    {project_name}
                </h1>
            </div>

            <div className="header_project__container2">
                <h2 className='header_project__container2__sentence'>{sentence}</h2>
                <h3>
                    <a
                    className='header_project__container2__logoFB' 
                    href={fb_page}
                    target="_blank"
                    rel="noreferrer"
                    >
                        {icons.facebook}
                    </a>

                </h3>
            </div>
            
        </div>
    )
}
export default HeaderProject

