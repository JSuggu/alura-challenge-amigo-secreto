const namesList = [];

function agregarAmigo(){
    const name = document.querySelector(".input-name").value;
    const sizeName = name.length;
    if(sizeName !== 0 && sizeName >=3 && sizeName <= 20){
        namesList.push(name);
        return;
    }
    alert("De ingresar algun nombre, que tenga entre 3 a 20")
}

