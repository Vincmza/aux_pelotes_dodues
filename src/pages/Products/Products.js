import React, {useState} from 'react';
import { useNavigate, useLocation} from "react-router-dom";
//DATAS
import { datas, send_all_product_types } from '../../resources/datas';

const Products = ()=>{
    //ON RECUPERE LES TYPES DES PRODUITS EXISTANTS POUR LES AFFICHER DANS UN FILTRE
    const all_product_types = send_all_product_types()

    //STATE POUR CAPTURER LE TYPE DE PRODUIT SELECTIONNE PAR L'UTILISATEUR
    const[selected_type, set_selected_type]=useState("")
    
    //MISE A JOUR DU STATE
    const get_selected_type = (e)=>{
        const id = e.target.id
        set_selected_type(id)
    }

    //console.log("EVENT ON CLICK ==> ", selected_type)

    const location = useLocation()

    return (
    <div className='products'>
        <div className='products__filter'>
            <span id='all' className='products__filter__button' onClick={(event)=>get_selected_type(event)}>tous les produits</span>
            {all_product_types.map(item=>(
                <span 
                className='products__filter__button'
                key={item}
                id={item}
                onClick={(event)=>get_selected_type(event)}
                >
                    {item}
                </span>
            ))}

        </div>
        <div className='products__container'>

            <h1>{location.pathname}</h1>

        </div>
    </div>
        
    )
}
export default Products

