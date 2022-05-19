var Mercearia = [];
var Padaria = [];
var Laticinios = [];
var Carnes = [];
var Bebidas = [];
var Limpeza = [];
var Hortifruti = [];
var Outros =[];
 
pergunta = prompt("Você deseja adicionar um item na sua lista de compras? Digite S ou N");
while (pergunta !== "S" && pergunta !== "N") {
  alert("Informação inválida. Digite apenas S ou N.");
  pergunta = prompt("Você deseja adicionar um item na sua lista de compras? Digite S ou N");
}

if (pergunta == "S"){
  while(pergunta == "S") {  
  addItem = prompt("Qual item você deseja inserir na lista?");
  categoria = prompt("As categorias são: Mercearia, Padaria, Laticínios, Carnes, Bebidas, Limpeza, Hortifruti e Outros. Qual categoria você quer adicionar esse item?");
  if (categoria == "Mercearia") {
    Mercearia.push(addItem);
  } if (categoria == "Padaria") {
    Padaria.push(addItem);
  } if (categoria == "Laticínios") {
    Laticinios.push(addItem);
  } if (categoria == "Carnes") {
    Carnes.push(addItem);
  } if (categoria == "Bebidas") {
    Bebidas.push(addItem);
  } if (categoria == "Limpeza") {
    Limpeza.push(addItem);
  } if (categoria == "Hortifruti") {
    Hortifruti.push(addItem);
  } if (categoria == "Outros") {
    Outros.push(addItem);
  }  
    
//------------------------------------------------------ função de remoção
    
pergunta2 = prompt("Você deseja remover algum item da lista de compras? Digite S ou N");
  while (pergunta2 !== "S" && pergunta2 !== "N") {
  alert("Informação inválida. Digite apenas S ou N.");
  pergunta2 = prompt("Você deseja remover algum item da lista de compras? Digite S ou N");
} if (pergunta2 == 'S') {
    while (pergunta2 =='S') {
      removeItem = prompt("Lista de compras atual: \n Mercearia: " + Mercearia.join(", ") + "\n Padaria: " + Padaria.join(", ") + "\n Laticínios: " + Laticinios.join(", ") + "\n Carnes: " + Carnes.join(", ") + "\n Hortifruti: " + Hortifruti.join(", ") + "\n Bebidas: " + Bebidas.join(", ") + "\n Limpeza: " + Limpeza.join(", ") + "\n Outros: " + Outros.join(", ") + ".\n\n Qual item você quer remover?");
    if (Mercearia.indexOf(removeItem) != -1) {
    Mercearia.splice(Mercearia.indexOf(removeItem), 1);
    alert("Item removido! \n\n Lista de compras atual: \n Mercearia: " + Mercearia.join(", ") + "\n Padaria: " + Padaria.join(", ") + "\n Laticínios: " + Laticinios.join(", ") + "\n Carnes: " + Carnes.join(", ") + "\n Hortifruti: " + Hortifruti.join(", ") + "\n Bebidas: " + Bebidas.join(", ") + "\n Limpeza: " + Limpeza.join(", ") + "\n Outros: " + Outros.join(", ") + ".");
  } else if (Padaria.indexOf(removeItem) != -1) {
    Padaria.splice(Padaria.indexOf(removeItem), 1);
 alert("Item removido! \n\n Lista de compras atual: \n Mercearia: " + Mercearia.join(", ") + "\n Padaria: " + Padaria.join(", ") + "\n Laticínios: " + Laticinios.join(", ") + "\n Carnes: " + Carnes.join(", ") + "\n Hortifruti: " + Hortifruti.join(", ") + "\n Bebidas: " + Bebidas.join(", ") + "\n Limpeza: " + Limpeza.join(", ") + "\n Outros: " + Outros.join(", ") + ".");
  } else if (Laticinios.indexOf(removeItem) != -1) {
    Laticinios.splice(Laticinios.indexOf(removeItem), 1);
 alert("Item removido! \n\n Lista de compras atual: \n Mercearia: " + Mercearia.join(", ") + "\n Padaria: " + Padaria.join(", ") + "\n Laticínios: " + Laticinios.join(", ") + "\n Carnes: " + Carnes.join(", ") + "\n Hortifruti: " + Hortifruti.join(", ") + "\n Bebidas: " + Bebidas.join(", ") + "\n Limpeza: " + Limpeza.join(", ") + "\n Outros: " + Outros.join(", ") + ".");
  } else if (Carnes.indexOf(removeItem) != -1) {
   Carnes.splice(Carnes.indexOf(removeItem), 1);
 alert("Item removido! \n\n Lista de compras atual: \n Mercearia: " + Mercearia.join(", ") + "\n Padaria: " + Padaria.join(", ") + "\n Laticínios: " + Laticinios.join(", ") + "\n Carnes: " + Carnes.join(", ") + "\n Hortifruti: " + Hortifruti.join(", ") + "\n Bebidas: " + Bebidas.join(", ") + "\n Limpeza: " + Limpeza.join(", ") + "\n Outros: " + Outros.join(", ") + ".");
  } else if (Hortifruti.indexOf(removeItem) != -1) {
   Hortifruti.splice(Hortifruti.indexOf(removeItem), 1);
 alert("Item removido! \n\n Lista de compras atual: \n Mercearia: " + Mercearia.join(", ") + "\n Padaria: " + Padaria.join(", ") + "\n Laticínios: " + Laticinios.join(", ") + "\n Carnes: " + Carnes.join(", ") + "\n Hortifruti: " + Hortifruti.join(", ") + "\n Bebidas: " + Bebidas.join(", ") + "\n Limpeza: " + Limpeza.join(", ") + "\n Outros: " + Outros.join(", ") + ".");
  } else if (Bebidas.indexOf(removeItem) != -1) {
    Bebidas.splice(Bebidas.indexOf(removeItem), 1);
 alert("Item removido! \n\n Lista de compras atual: \n Mercearia: " + Mercearia.join(", ") + "\n Padaria: " + Padaria.join(", ") + "\n Laticínios: " + Laticinios.join(", ") + "\n Carnes: " + Carnes.join(", ") + "\n Hortifruti: " + Hortifruti.join(", ") + "\n Bebidas: " + Bebidas.join(", ") + "\n Limpeza: " + Limpeza.join(", ") + "\n Outros: " + Outros.join(", ") + ".");
  } else if (Limpeza.indexOf(removeItem) != -1) {
    Limpeza.splice(Limpeza.indexOf(removeItem), 1);
 alert("Item removido! \n\n Lista de compras atual: \n Mercearia: " + Mercearia.join(", ") + "\n Padaria: " + Padaria.join(", ") + "\n Laticínios: " + Laticinios.join(", ") + "\n Carnes: " + Carnes.join(", ") + "\n Hortifruti: " + Hortifruti.join(", ") + "\n Bebidas: " + Bebidas.join(", ") + "\n Limpeza: " + Limpeza.join(", ") + "\n Outros: " + Outros.join(", ") + ".");
  } else if (Outros.indexOf(removeItem) != -1) {
    Outros.splice(Outros.indexOf(removeItem), 1);
 alert("Item removido! \n\n Lista de compras atual: \n Mercearia: " + Mercearia.join(", ") + "\n Padaria: " + Padaria.join(", ") + "\n Laticínios: " + Laticinios.join(", ") + "\n Carnes: " + Carnes.join(", ") + "\n Hortifruti: " + Hortifruti.join(", ") + "\n Bebidas: " + Bebidas.join(", ") + "\n Limpeza: " + Limpeza.join(", ") + "\n Outros: " + Outros.join(", ") + ".");
  } else {
    alert("Este item não consta na sua lista de compras!");
  }
    pergunta2 = prompt("Você deseja remover algum item da lista de compras? Digite S ou N");
   }} if (pergunta2 == "N") {
alert("Lista de compras atual: \n Mercearia: " + Mercearia.join(", ") + "\n Padaria: " + Padaria.join(", ") + "\n Laticínios: " + Laticinios.join(", ") + "\n Carnes: " + Carnes.join(", ") + "\n Hortifruti: " + Hortifruti.join(", ") + "\n Bebidas: " + Bebidas.join(", ") + "\n Limpeza: " + Limpeza.join(", ") + "\n Outros: " + Outros.join(", ") + ".");
}
    
//------------------------------------------------------ 
    
      pergunta = prompt("Você deseja adicionar mais algum item na lista de compras? Digite S ou N");
    while (pergunta !== "S" && pergunta !== "N") {
  alert("Informação inválida. Digite apenas S ou N.");
  pergunta = prompt("Você deseja adicionar um item na sua lista de compras? Digite S ou N");
} if (pergunta == "N") {
alert("Lista de compras: \n Mercearia: " + Mercearia.join(", ") + "\n Padaria: " + Padaria.join(", ") + "\n Laticínios: " + Laticinios.join(", ") + "\n Carnes: " + Carnes.join(", ") + "\n Hortifruti: " + Hortifruti.join(", ") + "\n Bebidas: " + Bebidas.join(", ") + "\n Limpeza: " + Limpeza.join(", ") + "\n Outros: " + Outros.join(", ") + ".");
}}} else if (pergunta == "N") {
alert("Lista de compras: \n Mercearia: " + Mercearia.join(", ") + "\n Padaria: " + Padaria.join(", ") + "\n Laticínios: " + Laticinios.join(", ") + "\n Carnes: " + Carnes.join(", ") + "\n Hortifruti: " + Hortifruti.join(", ") + "\n Bebidas: " + Bebidas.join(", ") + "\n Limpeza: " + Limpeza.join(", ") + "\n Outros: " + Outros.join(", ") + ".");
}