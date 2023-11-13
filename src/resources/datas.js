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
        available: isavailable, //
        image : url
    }
    return model
}

export const datas = {
    bonnets: 
    [
        data_model(uuidv4(),"bonnet", "rose","laine","medium",300,300,true,"Le codage Mes KOUILLES !!"),
        data_model(uuidv4(),"bonnet", "bleu","papier toilette","medium",300,300,true,"ma bite sur ton front !"),
        data_model(uuidv4(),"bonnet", "rouge","poils de cul","small",300,300,true,"les logarytmeeeuuu !"),
        data_model(uuidv4(),"bonnet", "vert","croûte de pu","large",300,300,true,"bois mon foutre salope !")
        
    ],
    peluches: 
    [
        
    ]
}
