import React, {useState} from 'react';
import { useNavigate, useLocation} from "react-router-dom";
//DATAS
import { send_all_product_types, send_all_items } from '../../resources/datas';
//COMPONENT
import Card from './Card';

const Products = ()=>{
    //TOUS LES PRODUITS
    const datas = send_all_items()
    console.log(datas)

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

    const return_style = (item)=>{
        const purple = "rgb(151,143,255)"
        const main_color = "rgb(252,241,232)"
        const data = {
            "background-color": purple,
            "color":main_color
        }
        if(item === selected_type){
            return data
        }
    }

    return (
    <div className='products'>
        <div className='products__filter'>

            <span 
            id='all' 
            className='products__filter__button' 
            onClick={(event)=>update_selected_type(event)}
            style={return_style("all")}
            >
                Nos produits
            </span>
            {all_product_types.map(item=>(
                <span 
                className='products__filter__button'
                key={item}
                id={item}
                onClick={(event)=>update_selected_type(event)}
                style={return_style(item)}
                >
                    {send_back_in_capital_letter(item)}
                </span>
            ))}
        </div>
        <div className='products__container'>
            {selected_type !== "all" &&
                datas.filter(item => item.type === selected_type).map(elem=>
                    <Card 
                    key={elem.id}
                    url={elem.image}
                    matter={elem.matter}
                    price={elem.price}
                    >
                    </Card>
                )
            }
            {selected_type == "all" &&
                datas.map(elem=>
                    <Card 
                    key={elem.id}
                    url={elem.image}
                    matter={elem.matter}
                    price={elem.price}
                    >
                    </Card>
                )
            }

        </div>
    </div>
        
    )
}
export default Products

