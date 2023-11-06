import React, {useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const HeaderMenus = ()=>{
    const all_menus = ["Actualités", "Nos Produits", "Contact", "Qui sommes-nous ?"]

    return (
        <div id="header_menus_id">
            <div className='header_menus_container'>
                <ul className='nav'>
                    {all_menus.map(elem=>(
                        <li
                        className='nav__menu'
                        key={elem}
                        >
                            {elem}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default HeaderMenus

