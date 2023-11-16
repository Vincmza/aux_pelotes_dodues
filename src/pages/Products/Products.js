import React, {useState} from 'react';
import { useNavigate, useLocation} from "react-router-dom";
//DATAS
import { send_all_product_types, send_all_items } from '../../resources/datas';

const Products = ()=>{
    //TOUS LES PRODUITS
    const datas = send_all_items()
    //console.log(datas)

    //ON RECUPERE LES TYPES DES PRODUITS EXISTANTS POUR LES AFFICHER DANS UN FILTRE
    const all_product_types = send_all_product_types()

    //STATE POUR CAPTURER LE TYPE DE PRODUIT SELECTIONNE PAR L'UTILISATEUR
    const[selected_type, set_selected_type]=useState("all")

    //MISE A JOUR DU STATE
    const update_selected_type = (e)=>{
        const id = e.target.id
        set_selected_type(id)
    }

    //MAJUSCULE POUR LE MENU DE FILTRE
    const send_back_in_capital_letter = (item=String)=>{
        const new_item = item.replace(item[0], item[0].toUpperCase())
        return new_item
    }

    // FONCTION QUI TRIE LE CONTENU A AFFICHER
    //SELON LA VALEUR DU STATE RELATIF AU MENU DE SELECTION
    const display_content=(selected_type)=>{
        if(selected_type !== "all"){
            const content_filtered = datas.filter(item => item.type === selected_type)
            return content_filtered.map(elem=>(
                <div key={elem.id}>
                    <div>{elem.id}</div>
                    <div>{elem.type}</div>
                    <div>{elem.color}</div>
                </div>
            ))
        }
        else{
            return datas.map(elem=>(
                <div key={elem.id}>
                    <div>{elem.id}</div>
                    <div>{elem.type}</div>
                    <div>{elem.color}</div>
                </div>
            ))
        }
        

    }

    return (
    <div className='products'>
        <div className='products__filter'>

            <span id='all' className='products__filter__button' onClick={(event)=>update_selected_type(event)}>Nos produits</span>
            {all_product_types.map(item=>(
                <span 
                className='products__filter__button'
                key={item}
                id={item}
                onClick={(event)=>update_selected_type(event)}
                >
                    {send_back_in_capital_letter(item)}
                </span>
            ))}
        </div>
        <div className='products__container'>
            {display_content(selected_type)}
        </div>
    </div>
        
    )
}
export default Products

