import { v4 as uuidv4 } from 'uuid';

const common_informations = [
    {type : "bonnets", price : 1500, description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
    {type : "peluches", price : 900, description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
    {type : "châles", price : 2000, description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
    {type : "capes", price : 2500, description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
    {type : "echarpes", price : 1000, description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
    {type : "gilets", price : 3000, description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}
]

const return_common_informations = (product_type)=>{
    let data = new Object
    common_informations.forEach(product=>{
        if(product.type == product_type){
            //console.log("Product found. OK. Code status 202.", product)
            data = product
        }
        else{
            // console.log("Error. Product not found. Codes status 404.")
            return false
        }
    })
    return data
}

const data_model = (
    id=String, 
    type=String,
    model= String,
    color=String, 
    isavailable=Boolean, 
    url=String)=>{

    const scheme = {
        id:id,
        type: type,
        model: model,
        color: color,
        isAvailable: isavailable, 
        image : url
    }
    return scheme
}

export const datas = {
    // LES PARAMETRES SONT LES SUIVANTS :
    // ID, TYPE, COULEUR, MATIERES UTILISEES, TAILLE, PRIX, FRAIS DE PORT, DISPONIBLE, URL PHOTO
    bonnets: 
    [
        
        data_model(uuidv4(),"bonnets","simple","rose",false,"./assests/pictures/bonnets/bonnet.jpg"),
        data_model(uuidv4(),"bonnets","simple","bleu",true,"./assests/pictures/bonnets/bonnet.jpg"),
        data_model(uuidv4(),"bonnets","double épaisseur","rouge",false,"./assests/pictures/bonnets/bonnet.jpg"),
        data_model(uuidv4(),"bonnets","double épaisseur","vert",true,"./assests/pictures/bonnets/bonnet.jpg")
        
    ],
    peluches: 
    [
        data_model(uuidv4(),"peluches","belzebuth","rose",true,"./assests/pictures/peluches/teddy.jpg"),
        data_model(uuidv4(),"peluches","belzebuth","bleu",true,"./assests/pictures/peluches/teddy.jpg"),
        data_model(uuidv4(),"peluches","lucifer","rouge",true,"./assests/pictures/peluches/teddy.jpg"),
        data_model(uuidv4(),"peluches","lucifer","vert",false,"./assests/pictures/peluches/teddy.jpg")
    ],
    châles: 
    [
        data_model(uuidv4(),"châles","aventurier","rose",true,"./assests/pictures/chales/chale.jpg"),
        data_model(uuidv4(),"châles","aventurier","bleu",true,"./assests/pictures/chales/chale.jpg"),
        data_model(uuidv4(),"châles","aventurier","rouge",true,"./assests/pictures/chales/chale.jpg"),
        data_model(uuidv4(),"châles","exploration","vert",false,"./assests/pictures/chales/chale.jpg")
    ],
    capes: 
    [
        data_model(uuidv4(),"capes","chamane","rose",true,"./assests/pictures/capes/cape.jpeg"),
        data_model(uuidv4(),"capes","chamane","bleu",true,"./assests/pictures/capes/cape.jpeg"),
        data_model(uuidv4(),"capes","moyen-âge","rouge",true,"./assests/pictures/capes/cape.jpeg"),
        data_model(uuidv4(),"capes","moyen-âge","vert",false,"./assests/pictures/capes/cape.jpeg")
    ],
    echarpes: 
    [
        data_model(uuidv4(),"echarpes","automne","rose",true,"./assests/pictures/echarpes/echarpe.jpg"),
        data_model(uuidv4(),"echarpes","automne","bleu",true,"./assests/pictures/echarpes/echarpe.jpg"),
        data_model(uuidv4(),"echarpes","printemps","rouge",true,"./assests/pictures/echarpes/echarpe.jpg"),
        data_model(uuidv4(),"echarpes","printemps","vert",false,"./assests/pictures/echarpes/echarpe.jpg")
    ],
    gilets:
    [
        data_model(uuidv4(),"gilets","arctique","blanc",true,"./assests/pictures/gilets/gilet.jpg"),
        data_model(uuidv4(),"gilets","arctique","blanc crème",true,"./assests/pictures/gilets/gilet.jpg"),
        data_model(uuidv4(),"gilets","antartique","blanc cassé",false,"./assests/pictures/gilets/gilet.jpg")
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



