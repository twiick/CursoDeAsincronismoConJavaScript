// Crea un llamado a la dependencia de xmlhttprequest, instalado con node
const XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest;

// Se crea una costante para almacenar el link de la API
const API="https://api.escuelajs.co/api/v1";

// Se crea un callback para recibir la solicitud del llamado a la API
function fetchData(urlAPI, callback){
  
    // Se crea una variable, que contiene una referencia a XMLHTTPRequest
    let xhttp= new XMLHttpRequest();

    // Se abre una conexión a la API, donde se pasa como parametros el tipo de conexión que se va a hacer (GET), la url de la API a la que se va a conectar y "true" para habilitar la conexión
    xhttp.open("get", urlAPI, true);

    // xhttp.onreadystatechange permite acceder a los estados de la solicitud, para saber en qué momento está disponible la información
    xhttp.onreadystatechange=function(event){
        
        // 4 hace referencia a que la solicitud se completó
        if(xhttp.readyState===4){
            
            // 200 hace refencia a que la solicitud ha sico correcta
            if(xhttp.status===200){

                // Se llama al callback, en donde se envia un null como error y una transformación de la información de la petición, como información
                callback(null, JSON.parse(xhttp.responseText))
            }
            else{

                // Se crea un error y se envia como error de conexion con la API. Se envia null como información, por   ue no ha llegadi nada
                const error= new Error("Error"+urlAPI);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}

fetchData(`${API}/products`, (error1, info1)=>{
    if(error1){
        return console.error(error1);
    }
    else{
        fetchData(`${API}/products/${info1[0].id}`, (error2, info2)=>{
            if(error2!=null){
                return console.log("Hubo un error:"+error2);
            }
            else{
                fetchData(`${API}/categories/${info2?.category?.id}`, (error3, info3)=>{
                    if(error3!=null){
                        return console.log("Hubo un error:"+error3);
                    }
                    else{
                        console.log(info1[0]);
                        console.log(info2.title);
                        console.log(info3.name);
                    }
                })
            }
        })
    }
});