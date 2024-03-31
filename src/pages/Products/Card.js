import React, {useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const Card = ({url, price, matter})=>{

    console.log("Chemin de l'image : ", url)

    return (
    <div className='card'>
        <div className='card__container'>
            <div className='card__container__image'>
                <img src={url}/>    
            </div>
            <div className='card__container__matter'
            >
                {matter}
            </div>
            <div className='card__container__price'
            >
                {price}
            </div>
        </div>
    </div>
        
    )
}
export default Card

