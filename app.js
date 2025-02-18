const namesList = [];

function agregarAmigo(){
    const name = document.querySelector(".input-name").value;
    const sizeName = name.length;
    if(sizeName === 0 && sizeName < 3 && sizeName > 20){
        alert("De ingresar algun nombre, que tenga entre 3 a 20")
        return;
    }
    actualizarLista(name);
}

function actualizarLista(newName){
    const nameListElement = document.querySelector(".name-list");
    const nameLiElement = document.createElement("li");
    namesList.push(newName);
    nameLiElement.textContent = newName;
    nameListElement.appendChild(nameLiElement);
}
