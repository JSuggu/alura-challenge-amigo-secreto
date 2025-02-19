let namesList = [];

function agregarAmigo(){
    const resultListElem = document.querySelector(".result-list");
    if(resultListElem.textContent !== "") resultListElem.innerHTML = "";

    const name = document.querySelector(".input-name").value;
    const sizeName = name.length;
    if(sizeName === 0 && sizeName < 3 && sizeName > 20){
        alert("De ingresar algun nombre, que tenga entre 3 a 20")
        return;
    }
    document.querySelector(".input-name").value = "";
    actualizarLista(name);
    
}

function actualizarLista(newName){
    const nameListElement = document.querySelector(".name-list");
    const nameLiElement = document.createElement("li");
    namesList.push(newName);
    nameLiElement.textContent = newName;
    nameListElement.appendChild(nameLiElement);
}

function sortearAmigo(){
    const sizeNameList = namesList.length;
    if(sizeNameList < 2) {
        alert("Ingrese al menos 2 nombres");
        return;
    }
    const pos = Math.floor(Math.random()*(sizeNameList-1));
    const winner = namesList[pos];
    const resultListElement = document.querySelector(".result-list");
    document.querySelector(".name-list").innerHTML = "";
    resultListElement.innerHTML = `Tu amigo secreto es: ${winner}`;
    namesList = [];
}

