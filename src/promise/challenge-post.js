import fetch from "node-fetch";

const API="https://api.escuelajs.co/api/v1";

function postData(urlAPI, data){
    const response= fetch(urlAPI,{
        method:"POST",
        mode:"cors",
        credentials:"same-origin",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return response;
}
let myData={
    "title": "Twiick Product",
    "price": 326,
    "description": "http://twiick.com",
    "categoryId": 1,
    "images": ["https://images.pexels.com/photos/5853003/pexels-photo-5853003.jpeg?auto=compress&cs=tinysrgb&w=400"]
}

postData(`${API}/products`,myData)
    .then(response=>response.json())
    .then(data=>console.log(data))