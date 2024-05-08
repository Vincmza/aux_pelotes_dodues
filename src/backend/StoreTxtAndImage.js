import React, { useEffect, useState } from "react";
import { imgDB,txtDB } from "./firebase";
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs } from "firebase/firestore";

function StoreTxtAndImage(){

    // SCHEMA DE DONNEES TEXTUELLES POUR UN PRODUIT
    let oneProductData = {
        //id: new String(uuidv4()),
        type: new String(""), 
        model:new String(""),  
        color:new String(""), 
        price:new Number(0),
        isAvailable: new Boolean(),
        imageUrl: new String("")
    } 

    // STATE DES DONNES TEXTUELLES
    const [txt,setTxt] = useState(oneProductData)
    //console.log("OBJET du PRODUIT : ", txt)

    // CHEMIN VERS L'IMAGE SUR LE SERVEUR FIREBASE
    const [img,setImg] = useState('')

    // STATE DES DONNEES DEJA PRESENTES SUR LA BDD
    const [data,setData] = useState([])
    //console.log("LES DONNEES : ", data)

    // ON RECUPERE LES DONNES 
    // ON MET A JOUR LE STATE AVEC setData
    const getData = async () =>{
        const docRef = collection(txtDB,'bonnets')
        const dataDb = await getDocs(docRef)
        const allData = dataDb.docs.map(val=>({...val.data(), id: val.id}))
        setData(allData)
    }

    // POUR CHAQUE INPUT ON CAPTURE LA VALEUR
    // ON MET A JOUR LE STATE AVEC setTxt
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if(name != "isAvailable"){
            setTxt({ ...txt, [name]: value });
        }
        else{
            setTxt({...txt, [name]: e.target.checked})
        }
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
            //console.log(data,"imgs")
            getDownloadURL(data.ref).then(val=>{
                setImg(val)
            })
        })
    }

    //AU CLIC SUR 'Add' ON AJOUTE LA CLE 'immgUrl' ET SA VALEUR A L'OBJET txt
    //ENSUITE ON AJOUTE L'OBJET A LA BASE DE DONNEES TEXTUELLES
    const handleClick = async () =>{
        //CONNEXION A LA BDD
        const docRef = collection(txtDB,'bonnets')
        // ON AJOUTE L'URL DE L'IMAGE QUI A ETE UPLOADEE
        await addDoc(docRef,{...txt, imageUrl:img})

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

            <div style={{padding:"15px", display:"flex", width:"50%", border:"1px solid black", justifyContent:"center"}}>
                <input 
                style={{marginRight:"15px", fontSize:"30px"}}
                type="checkbox"
                id="isAvailable"
                name="isAvailable"
                onChange={(e)=>handleInputChange(e)} 
                />
                <label for="isAvailable">Le produit est diponible</label>
            </div>

            <input style={{marginTop:"20px"}} type="file" onChange={(e)=>handleUpload(e)} /><br/><br/>

            <button onClick={handleClick} style={{marginBottom:"50px"}}>Add</button>
             
        </div>
    )
}
export default StoreTxtAndImage