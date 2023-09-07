const personas = [
    {
    nombre: "Jose",
    apellido: "Lopez"
},
{
    nombre: "Diana",
    apellido: "Lozada"
},
{
    nombre: "Valeria",
    apellido: "Avila"
},
]
function obtenerPersonas(nombre){
        return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        const personaEncontrada = personas.find((elemento)=>(elemento.nombre===nombre));
        if (nombre == personaEncontrada.nombre){
            resolve("Llamando a "+personaEncontrada.nombre);
        }else{
            reject("Persona no existe en la lista") 
        }
             
        }, 2000);
        
    })
}

obtenerPersonas("Jose").then((respuesta)=>{
    console.log(respuesta);
}).catch((error)=>{
    console.log(error);
});