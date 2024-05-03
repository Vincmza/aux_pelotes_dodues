import React, {useState} from 'react';

const CommonInformations = ({all_product_types_and_informations, selected_type})=>{

    const return_price_and_description = ()=>{
        const data = []
        all_product_types_and_informations.forEach(product => {
            if (selected_type == product.type){
                data.push(product)
            }
        });
        return data[0]
    }
    const all_description = "Toutes mes créations sont faites par mes soins à partir de matériaux nobles et naturels."

    return (
            <div className='infos'>
            {selected_type == "all" ? 
                (<div className='infos__description'>{all_description}</div>)
                :
                (
                  <div>  
                    <div className='infos__description'>{return_price_and_description().informations.description}</div>
                    <div className='infos__price'>{return_price_and_description().informations.price/100}€</div>
                  </div>  
                )
            }
            </div>
    )
}
export default CommonInformations

