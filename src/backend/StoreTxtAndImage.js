import React, { useEffect, useState } from "react";
import { imgDB,txtDB } from "./firebase";
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs } from "firebase/firestore";


function StoreTxtAndImage(){

    // SCHEMA DE DONNEES TEXTUELLES POUR UN PRODUIT
    let dataScheme = {
        type:"", 
        model:"", 
        color:"",
        price:0
    } 

    // STATE DES DONNES TEXTUELLES
    const [txt,setTxt] = useState(dataScheme)

    // CHEMIN VERS L'IMAGE SUR LE SERVEUR FIREBASE
    const [img,setImg] = useState('')

    // STATE DES DONNEES DEJA PRESENTES SUR LA BDD
    const [data,setData] = useState([])

    // ON RECUPERE LES DONNES 
    // ON MET A JOUR LE STATE AVEC setData
    const getData = async () =>{
        const valRef = collection(txtDB,'bonnets')
        const dataDb = await getDocs(valRef)
        const allData = dataDb.docs.map(val=>({...val.data(),id:val.id}))
        setData(allData)
    }

    // POUR CHAQUE INPUT ON CAPTURE LA VALEUR
    // ON MET A JOUR LE STATE AVEC setTxt
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTxt({ ...txt, [name]: value });
    };

    //ON RELIE LA BDD firebase/storage
    //ON CREE LE DOSSIER products
    //ON IMPLEMENTE UN ID UNIQUE AVEC uuidv4
    //ON UPLOAD L'IMAGE SUR LE SERVEUR
    //ON CAPTURE L'URL data.ref QU'ON STOCKE AVEC setImg
    const handleUpload = (e) =>{
        //console.log(e.target.files[0])
        const imgs = ref(imgDB,`products/${uuidv4()}`)
        uploadBytes(imgs,e.target.files[0]).then(data=>{
            console.log(data,"imgs")
            getDownloadURL(data.ref).then(val=>{
                setImg(val)
            })
        })
    }

    //AU CLIC SUR 'Add' ON AJOUTE LA CLE 'immgUrl' ET SA VALEUR A L'OBJET txt
    //ENSUITE ON AJOUTE L'OBJET A LA BASE DE DONNEES TEXTUELLES
    const handleClick = async () =>{
        const valRef = collection(txtDB,'bonnets')
        await addDoc(valRef,{...txt, imgUrl:img})
        alert("Data added successfully")
    }

    useEffect(()=>{
        getData()
    },[])

    const returnStyle = ()=>{
        const style = {
            display:"flex",
            flexDirection :"column",
            alignItems:"center",
            justifyContent:"center",
            height:"100vh",
            width:"100%",
            border: "1px solid red"
        }
        return style
    }
    const returnInputStyle = ()=>{
        const style = {
            width:"70%",
            padding:"10px",
            fontSize:"1.1em"
        }
        return style
    }
    //console.log(data,"datadata")

    return(
        <div style={returnStyle()}>
            <label for="type" style={{padding:"10px", fontSize:"1.1em"}}>Type</label>
            <input
            type="text"
            name="type"
            style={returnInputStyle()}
            onChange={(e)=>handleInputChange(e)}
            id="type" 
            placeholder="Doit respecter le type du produit au pluriel"
            /><br/>

            <label for="model" style={{padding:"10px", fontSize:"1.1em"}}>Model</label>
            <input
            type="text" 
            name="model"
            style={returnInputStyle()}
            onChange={(e)=>handleInputChange(e)}
            id="model" 
            placeholder="Nom du modèle"
            /><br/>

            <label for="color" style={{padding:"10px", fontSize:"1.1em"}}>Color</label>
            <input
            type="text"
            name="color"
            style={returnInputStyle()}
            onChange={(e)=>handleInputChange(e)}
            id="color" 
            placeholder="Une ou plusieurs couleurs"
            /><br/>

            <label for="price" style={{padding:"10px", fontSize:"1.1em"}}>Price</label>
            <input 
            type="number"
            name="price"
            style={returnInputStyle()} 
            onChange={(e)=>handleInputChange(e)}
            id="price" 
            placeholder="Ecrire 0 par défaut. Si prix spécifique écrire le prixen centimes"
            /><br/>

            <input type="file" onChange={(e)=>handleUpload(e)} /><br/><br/>

            <button onClick={handleClick} style={{marginBottom:"50px"}}>Add</button>
             
        </div>
    )
}
export default StoreTxtAndImage