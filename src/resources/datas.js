import { v4 as uuidv4 } from 'uuid';

const data_model = (
    id=String, type=String, 
    color=String, 
    matter=String, 
    price=Number, 
    shipping=Number, 
    isavailable=Boolean, 
    url=String)=>{

    const model = {
        id:id,
        type: type,
        color: color,
        matter: matter,
        price: price,
        shipping: shipping,
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
        data_model(uuidv4(),"bonnets", "rose","laine",850,300,false,"./assests/pictures/bonnets/bonnet.jpg"),
        data_model(uuidv4(),"bonnets", "bleu","laine",850,300,true,"./assests/pictures/bonnets/bonnet.jpg"),
        data_model(uuidv4(),"bonnets", "rouge","laine",1000,300,false,"./assests/pictures/bonnets/bonnet.jpg"),
        data_model(uuidv4(),"bonnets", "vert","laine",1550,300,true,"./assests/pictures/bonnets/bonnet.jpg")
        
    ],
    peluches: 
    [
        data_model(uuidv4(),"peluches", "rose","coton et laine",1220,300,true,"./assests/pictures/peluches/teddy.jpg"),
        data_model(uuidv4(),"peluches", "bleu","coton et laine",700,300,true,"./assests/pictures/peluches/teddy.jpg"),
        data_model(uuidv4(),"peluches", "rouge","coton et laine",800,300,true,"./assests/pictures/peluches/teddy.jpg"),
        data_model(uuidv4(),"peluches", "vert","coton et laine",990,300,false,"./assests/pictures/peluches/teddy.jpg")
    ],
    châles: 
    [
        data_model(uuidv4(),"châles", "rose","coton et laine",1220,300,true,"./assests/pictures/chales/chale.jpg"),
        data_model(uuidv4(),"châles", "bleu","coton et laine",700,300,true,"./assests/pictures/chales/chale.jpg"),
        data_model(uuidv4(),"châles", "rouge","coton et laine",800,300,true,"./assests/pictures/chales/chale.jpg"),
        data_model(uuidv4(),"châles", "vert","coton et laine",990,300,false,"./assests/pictures/chales/chale.jpg")
    ],
    capes: 
    [
        data_model(uuidv4(),"capes", "rose","coton et laine",1220,300,true,"./assests/pictures/capes/cape.jpeg"),
        data_model(uuidv4(),"capes", "bleu","coton et laine",700,300,true,"./assests/pictures/capes/cape.jpeg"),
        data_model(uuidv4(),"capes", "rouge","coton et laine",800,300,true,"./assests/pictures/capes/cape.jpeg"),
        data_model(uuidv4(),"capes", "vert","coton et laine",990,300,false,"./assests/pictures/capes/cape.jpeg")
    ],
    echarpes: 
    [
        data_model(uuidv4(),"echarpes", "rose","coton et laine",1220,300,true,"./assests/pictures/echarpes/echarpe.jpg"),
        data_model(uuidv4(),"echarpes", "bleu","coton et laine",700,300,true,"./assests/pictures/echarpes/echarpe.jpg"),
        data_model(uuidv4(),"echarpes", "rouge","coton et laine",800,300,true,"./assests/pictures/echarpes/echarpe.jpg"),
        data_model(uuidv4(),"echarpes", "vert","coton et laine",990,300,false,"./assests/pictures/echarpes/echarpe.jpg")
    ]
}

export const send_all_product_types = ()=>{
    const array = []
    for(const product in datas){
        array.push(product)
    }
    console.log("LES TYPES : ", array)
    return array
}

export const send_all_items = ()=>{
    const array = []
    for(const product in datas){
        datas[product].forEach(item => {
            array.push(item)
        });
    }
    console.log("LES PRODUITS : ", array)
    return array
}



