"use strict";

let addButton = document.querySelector(".modal_3_add");
addButton.addEventListener('click', add);
let ul = document.querySelector(".modal_3_ul");

function add() {
    let input = document.querySelector('.modal_3_text').value;
    if( input.trim() == "") {
        return;
    }

    console.log(ul)
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.addEventListener('click', checked);
    let text = document.createTextNode(input);
    ul.append(li);
    li.append(p);
    p.append(text);
    
    let update = document.createElement("button");
    let pencil = document.createTextNode("\ud83d\udd89");
    let delet = document.createElement("button");
    let croix = document.createTextNode("\ud83d\uddd9 ");
    delet.className = "delete";
    update.className = 'update';
    update.append(pencil);
    delet.append(croix);
    li.append(update);
    li.append(delet);
    delet.addEventListener('click', del);
    update.addEventListener('click', updat);
    
}


function updat() {
    let text = this.parentElement.childNodes[0];
    let newText = prompt("entrer le nouveau nom de la tache", "");
    if( newText.trim() == "" || newText == null) {
        return;
    }
    let p = document.createElement("p");
    p.addEventListener('click', checked);
    text.replaceWith(p);
    p.append(newText);
}

function del() {
    let li = this.parentElement;
    li.remove();
}

function checked(e) {
    if (e.target.tagName == "P") {
        this.parentElement.classList.toggle("checked");
    }
    
}