import React, {useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
//DATAS
import { datas } from '../resources/datas';

const Products = ()=>{

    const get_datas = ()=>{
        for (const product in datas) {
            datas[product].forEach(item=>{
                console.log(item)
            })
        }
    }
    get_datas()

    return (
    <div>
        <div>PRODUCTS</div>
    </div>
        
    )
}
export default Products

