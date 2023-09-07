function saludar (nombre){
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        if (nombre.lenght < 3){
            resolve("Hola "+nombre); //Promesa se cumple
        }else{
            reject("No te Conozco") //Promesa no se cumple
        }
             
        }, 2000);
        
    })
}

saludar("Diego").then((respuesta)=>{
    console.log(respuesta);
}).catch((error)=>{
    console.log(error);
});

console.log("Hola a la Clase de Asincronia");

const pokeApi = fetch("https://pokeapi.co/api/v2/pokemon");

pokeApi
  .then((respuesta) => respuesta.json())
  .then((resObj) => console.log(resObj.results[0].name));