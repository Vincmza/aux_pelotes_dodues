import { v4 as uuidv4 } from 'uuid';

const common_informations = [
    {type : "bonnets", price : 1500, description : "Nos bonnets sont fabriqués avec de la laine de moutons qu'on élève nous mêmes bande de bâtards !"},
    {type : "peluches", price : 900, description : "On les tricotte avec nos mimines alors achète espèce de salope, ça t'évitera d'aller chez king Jouet !"},
    {type : "châles", price : 2000, description : "On emploie des esclaves c'est plus facile, ça coûte rien. En tout cas ils sont faits mains !"},
    {type : "capes", price : 2500, description : "Admirez nos somptueuses capes en peaux humaines, entièrements fabriquées avec de la peau de cons. T'imagines que la matière première ne manque pas !"},
    {type : "echarpes", price : 1000, description : "On y met nos tripes pour les tricotter et surtout de la laine !"}
]

const return_common_informations = (product_type)=>{
    let data = new Object
    common_informations.forEach(product=>{
        if(product.type == product_type){
            console.log("Product found. OK. Code status 202.", product)
            data = product
        }
        else{
            console.log("Error. Product not found. Codes status 404.")
            return false
        }
    })
    return data
}

const data_model = (
    id=String, 
    type=String, 
    color=String, 
    isavailable=Boolean, 
    url=String)=>{

    const model = {
        id:id,
        type: type,
        color: color,
        isAvailable: isavailable, 
        image : url
    }
    return model
}

export const datas = {
    // LES PARAMETRES SONT LES SUIVANTS :
    // ID, TYPE, COULEUR, MATIERES UTILISEES, TAILLE, PRIX, FRAIS DE PORT, DISPONIBLE, URL PHOTO
    bonnets: 
    [
        data_model(uuidv4(),"bonnets","rose",false,"./assests/pictures/bonnets/bonnet.jpg"),
        data_model(uuidv4(),"bonnets","bleu",true,"./assests/pictures/bonnets/bonnet.jpg"),
        data_model(uuidv4(),"bonnets","rouge",false,"./assests/pictures/bonnets/bonnet.jpg"),
        data_model(uuidv4(),"bonnets","vert",true,"./assests/pictures/bonnets/bonnet.jpg")
        
    ],
    peluches: 
    [
        data_model(uuidv4(),"peluches","rose",true,"./assests/pictures/peluches/teddy.jpg"),
        data_model(uuidv4(),"peluches","bleu",true,"./assests/pictures/peluches/teddy.jpg"),
        data_model(uuidv4(),"peluches","rouge",true,"./assests/pictures/peluches/teddy.jpg"),
        data_model(uuidv4(),"peluches","vert",false,"./assests/pictures/peluches/teddy.jpg")
    ],
    châles: 
    [
        data_model(uuidv4(),"châles","rose",true,"./assests/pictures/chales/chale.jpg"),
        data_model(uuidv4(),"châles","bleu",true,"./assests/pictures/chales/chale.jpg"),
        data_model(uuidv4(),"châles","rouge",true,"./assests/pictures/chales/chale.jpg"),
        data_model(uuidv4(),"châles","vert",false,"./assests/pictures/chales/chale.jpg")
    ],
    capes: 
    [
        data_model(uuidv4(),"capes","rose",true,"./assests/pictures/capes/cape.jpeg"),
        data_model(uuidv4(),"capes","bleu",true,"./assests/pictures/capes/cape.jpeg"),
        data_model(uuidv4(),"capes","rouge",true,"./assests/pictures/capes/cape.jpeg"),
        data_model(uuidv4(),"capes","vert",false,"./assests/pictures/capes/cape.jpeg")
    ],
    echarpes: 
    [
        data_model(uuidv4(),"echarpes","rose",true,"./assests/pictures/echarpes/echarpe.jpg"),
        data_model(uuidv4(),"echarpes","bleu",true,"./assests/pictures/echarpes/echarpe.jpg"),
        data_model(uuidv4(),"echarpes","rouge",true,"./assests/pictures/echarpes/echarpe.jpg"),
        data_model(uuidv4(),"echarpes","vert",false,"./assests/pictures/echarpes/echarpe.jpg")
    ]
}

export const send_all_product_types_and_common_informations = ()=>{
    const array = []
    for(const product_type in datas){
        let data = return_common_informations(product_type)
        // console.log("Variable MESK : ", mesk)
        array.push({type : product_type, informations : data})
    }
    // console.log("LES TYPES : ", array)
    return array
}

export const send_all_items = ()=>{
    const array = []
    for(const product in datas){
        datas[product].forEach(item => {
            array.push(item)
        });
    }
    // console.log("LES PRODUITS : ", array)
    return array
}



