import React, { useEffect, useState } from "react";
import { imgDB,txtDB } from "./firebase";
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs } from "firebase/firestore";


const getData = async ()=>{
    const valRef = collection(txtDB,'products')
    const dataDb = await getDocs(valRef)
    const allData = dataDb.docs.map(val=>({...val.data()}))
    return allData
}
