import express from 'express';

const routes = express.Router();


let lista = ['carlos' , 'pelissari' , 'farina' , 'mosiah']

routes.get('/' , (req, res)=>{
    return res.status(200).json('Hello World')
})

routes.get('/nomes/:nome' , (req, res)=>
{
    let bool = false
 const  { nome } = req.params;
    for (let i = 0; i < lista.length; i++){
    if(nome == lista[i]){
        bool = true;
    }
}

if(bool == true){
    return res.status(200).json('Tem na lista')
}

else{
    return res.status(500).json('Nao tem na lista')
}

})

export default routes