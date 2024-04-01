import React, {useState} from 'react';
import { useNavigate, useLocation} from "react-router-dom";


const HeaderMenus = ()=>{
    const all_menus = [
        {menu:"Actualités", route:"news"}, 
        {menu:"Nos Produits", route:"products"}, 
        {menu:"Contact", route:"contact_us"}, 
        {menu:"Qui suis-je ?", route:"team"}
    ]
    const [is_icon_clicked, set_is_icon_clicked] = useState("")
    const location = useLocation()
    const current_menu = location.pathname
    let navigate = useNavigate()
    //console.log(location.pathname)
    const redirection = (elem)=>{
        set_is_icon_clicked(elem.menu)
        navigate(elem.route)
    }

    return (
        <div className="header_menus">
            <div className='header_menus__container'>
                <ul className='nav'>
                    {all_menus.map(elem=>(
                        <li
                        className='nav__menu'
                        key={elem}
                        >
                            <div 
                            className='nav__menu__title'
                            onClick={()=>redirection(elem)}
                            >
                                {elem.menu}
                            </div>

                            {elem.menu === is_icon_clicked || "/" + elem.route === current_menu ?
                                (<div className='nav__menu__dot'></div>)
                                :
                                (<></>)
                            }
                        
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default HeaderMenus

