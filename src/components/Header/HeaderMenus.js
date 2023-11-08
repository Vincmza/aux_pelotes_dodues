import React, {useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
//COMPONENTS
import Dot from './Dot';

const HeaderMenus = ()=>{

    const all_menus = ["Actualités", "Nos Produits", "Contact", "Qui sommes-nous ?"]

    return (
        <div class="header_menus">
            <div className='header_menus__container'>
                <ul className='nav'>
                    {all_menus.map(elem=>(
                        <li
                        className='nav__menu'
                        key={elem}
                        >
                            <div className='nav__menu__title'>{elem}</div>
                            <div className='nav__menu__dot'></div> 
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default HeaderMenus

