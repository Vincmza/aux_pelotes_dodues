import React, {useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const Card = ({url, price, matter, isAvailable})=>{

    // console.log("Chemin de l'image : ", url)

    return (
    <div className='card'>
        <div className='card__container'>
            <img src={url} className='card__container__image'/>    
            <div className='card__container__available'>
                {isAvailable == true ?  
                    (<div className='card__container__available--green'></div>)
                    :
                    (<div className='card__container__available--red'></div>)
                }
            </div>
        </div>
    </div>
        
    )
}
export default Card

