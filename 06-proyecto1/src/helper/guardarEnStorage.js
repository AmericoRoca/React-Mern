
export const guardarEnStorage = (key, item) => {
    //Conseguir los elementos del localStorage
    let items = JSON.parse(localStorage.getItem(key));

    //Comprobar que sea un array
    if(Array.isArray(items)){
        //añadir un elemento nuevo
        items.push(item);
    } else {
        //Crear array con nueva peli
        items = [item];
    }

    //Guardar en el localStorage
    localStorage.setItem(key,JSON.stringify(items))

    //Devolver objeto
    return item;
    
}
