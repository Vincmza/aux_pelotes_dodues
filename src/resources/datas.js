import { v4 as uuidv4 } from 'uuid';

const data_model = (id=String, type=String, color=String, matter=String, size=String, price=Number, shipping=Number, isavailable=Boolean, url=String)=>{
    const model = {
        id:id,
        type: type,
        color: color,
        matter: matter,
        size: size,
        price: price,
        shipping: shipping,
        available: isavailable, 
        image : url
    }
    return model
}

export const datas = {
    // LES PARAMETRES SONT LES SUIVANTS :
    // ID, TYPE, COULEUR, MATIERES UTILISEES, TAILLE, PRIX, FRAIS DE PORT, DISPONIBLE, URL PHOTO
    bonnets: 
    [
        data_model(uuidv4(),"bonnets", "rose","laine","medium",300,300,true,"../resources/pictures/bonnets/bonnet.jpg"),
        data_model(uuidv4(),"bonnets", "bleu","laine","medium",300,300,true,"../resources/pictures/bonnets/bonnet.jpg"),
        data_model(uuidv4(),"bonnets", "rouge","laine","small",300,300,true,"../resources/pictures/bonnets/bonnet.jpg"),
        data_model(uuidv4(),"bonnets", "vert","laine","large",300,300,true,"../resources/pictures/bonnets/bonnet.jpg")
        
    ],
    peluches: 
    [
        data_model(uuidv4(),"peluches", "rose","coton et laine","medium",300,300,true,"../resources/pictures/peluches/teddy.jpg"),
        data_model(uuidv4(),"peluches", "bleu","coton et laine","medium",300,300,true,"../resources/pictures/peluches/teddy.jpg"),
        data_model(uuidv4(),"peluches", "rouge","coton et laine","small",300,300,true,"../resources/pictures/peluches/teddy.jpg"),
        data_model(uuidv4(),"peluches", "vert","coton et laine","large",300,300,true,"../resources/pictures/peluches/teddy.jpg")
    ]
}

export const send_all_product_types = ()=>{
    const array = []
    for(const product in datas){
        array.push(product)
    }
    return array
}

