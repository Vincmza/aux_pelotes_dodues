import React, {useState} from 'react';
//DATAS
import { send_all_product_types_and_common_informations, send_all_items } from '../../resources/datas';
//COMPONENT
import Card from './Card';
import CommonInformations from './CommonInformations';

const Products = ()=>{
    //TOUS LES PRODUITS
    const datas = send_all_items()
    //console.log(datas)

    //ON RECUPERE LES TYPES DES PRODUITS EXISTANTS ET LES INFOS GENERALES DES PRODUITS
    const all_product_types_and_informations = send_all_product_types_and_common_informations()
    //console.log("LES DONNEES : ", all_product_types_and_informations)

    //ON ISOLE JUSTE LES TYPES DES PRODUITS
    const return_types_only = ()=>{
        const array = []
        all_product_types_and_informations.forEach(element=>{
            array.push(element.type)
        })
        return array
    }

    //STATE POUR CAPTURER LE TYPE DE PRODUIT SELECTIONNE PAR L'UTILISATEUR
    //LORSQU'IL CLIQUE SUR LE MENU DE FILTRE
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
                Tout
            </span>
            {return_types_only().map(item=>(
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
        <CommonInformations
        all_product_types_and_informations={all_product_types_and_informations}
        selected_type={selected_type}
        />

        <div className='products__container'>
            {selected_type !== "all" &&
                datas.filter(item => item.type === selected_type).map(elem=>
                    <Card 
                    key={elem.id}
                    url={elem.image}
                    isAvailable={elem.isAvailable}
                    >
                    </Card>
                )
            }
            {selected_type == "all" &&
                datas.map(elem=>
                    <Card 
                    key={elem.id}
                    url={elem.image}
                    isAvailable={elem.isAvailable}
                    >
                    </Card>
                )
            }

        </div>
    </div>
        
    )
}
export default Products

