function abrirMenu() {
  var menuToogle = document.querySelector(".menu .menuToogle");
  var span = document.querySelectorAll(".menu .menuToogle span");

  var menu = document.querySelector(".menu");

  var a = document.querySelectorAll(".menu .menuContainer li p i");
  var li = document.querySelectorAll(".menu .menuContainer ul li");

  if (menu.style.width == "200px") {
    menu.style.width = "72px";
    menuToogle.style.paddingRight = "0px";
    for (let i = 0; i < span.length; i++) {
      switch (i) {
        case 0:
          span[i].style.opacity = 1;
          break;
        case 1:
          span[i].style.transform = "rotate(0deg)";
          span[i].style.position = "relative";
          break;
        case 2:
          span[i].style.transform = "rotate(0deg)";
          span[i].style.position = "relative";
          break;
      }
    }
    for (let b = 0; b < a.length; b++) {
      a[b].innerHTML = "";
    }
    for (let c = 0; c < li.length; c++) {
      li[c].classList.remove("li");
    }
    menuToogle.style.alignItems = "center";
  } else {
    menu.style.width = "200px";
    menuToogle.style.alignItems = "flex-end";
    menuToogle.style.paddingRight = "20px";
    for (let i = 0; i < span.length; i++) {
      switch (i) {
        case 0:
          span[i].style.opacity = 0;
          break;
        case 1:
          span[i].style.transform = "rotate(45deg)";
          span[i].style.position = "absolute";
          break;
        case 2:
          span[i].style.transform = "rotate(-45deg)";
          span[i].style.position = "absolute";
          break;
      }
    }
    for (let b = 0; b < a.length; b++) {
      switch (b) {
        case 0:
          a[b].innerHTML = "     Home";
          a[b].style.letterSpacing = "2px"
        break;
        case 1:
          a[b].innerHTML = "     About us";
          a[b].style.letterSpacing = "2px"
        break;
        case 2:
          a[b].innerHTML = "     Portfolio";
          a[b].style.letterSpacing = "2px"
        break;
        case 3:
          a[b].innerHTML = "     Contact";
          a[b].style.letterSpacing = "2px"
        break;
      }
    }
    for (let c = 0; c < li.length; c++) {
      li[c].classList.add("li");
    }
  }
}
function typeWrite(elemento, subTitulo) {
  subTitulo.style.left = "20%";
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 150 * i);
  });
}

const titulo = document.querySelector(".home h1");
const subTitulo = document.querySelector(".home h2");
typeWrite(titulo, subTitulo);

function clickMenu(e) {
    var li1 = document.querySelectorAll(".menu .menuContainer ul li:nth-child(1)");
    var li = document.querySelectorAll(".menu .menuContainer ul li");


    switch (e) {
        case "Home":
            if(li[0].classList.contains("liClick1")){
                li[0].classList.remove("liClick1");
            }else{
                li[0].classList.add("liClick1");
                li[1].classList.remove("liClick2");
                li[2].classList.remove("liClick3");
                li[3].classList.remove("liClick4");
            }       
        break;
        case "About":
            if(li[1].classList.contains("liClick2")){
                li[1].classList.remove("liClick2");
            }else{
                li[0].classList.remove("liClick1");
                li[1].classList.add("liClick2");
                li[2].classList.remove("liClick3");
                li[3].classList.remove("liClick4");            
            }
        break;
        case "Portfolio":
            if(li[2].classList.contains("liClick3")){
                li[2].classList.remove("liClick3");
            }else{
                li[0].classList.remove("liClick1");
                li[1].classList.remove("liClick2");
                li[2].classList.add("liClick3");
                li[3].classList.remove("liClick4");            
            }
        break;
        case "Contact":
            if(li[3].classList.contains("liClick4")){
                li[3].classList.remove("liClick4");
            }else{
                li[0].classList.remove("liClick1");
                li[1].classList.remove("liClick2");
                li[2].classList.remove("liClick3");
                li[3].classList.add("liClick4");            
            }
        break;
    }
}
let mensageButton = document.querySelector(".msgArea button i");

let areaMsgBot = document.querySelector(".areaMsgBot");



let areaChat = document.querySelector(".areaChat");

let lastChild = areaChat.lastChild

let stage = 0;

function bot(msg){
  let divBot = document.createElement("div");
  divBot.classList.add("areaMsgBot");
  let i = document.createElement("i");
  i.classList.add("fa-solid");
  i.classList.add("fa-user");
  divBot.appendChild(i);

  let msgBot = document.createElement("div");
  msgBot.classList.add("msgBot");
  divBot.appendChild(msgBot);

  let msgBotP = document.createElement("p")
  msgBotP.innerHTML = "" + msg;
  msgBot.appendChild(msgBotP);
  areaChat.appendChild(divBot);

}

function robot(msg){

  let divBot = document.createElement("div");
  divBot.classList.add("areaMsgBot");

  let msgBot = document.createElement("div");
  msgBot.classList.add("msgBot");
  divBot.appendChild(msgBot);

  let msgBotP = document.createElement("p")
  msgBotP.innerHTML = "" + msg;
  msgBot.appendChild(msgBotP);
  areaChat.appendChild(divBot);

  let i = document.createElement("i");
  i.classList.add("fa-solid");
  i.classList.add("fa-robot");
  divBot.appendChild(i);

}

let textInput = document.getElementById("textInput").value; 

let texto = textInput.value;

mensageButton.addEventListener('click', function(e) {
  e.preventDefault();

  let br = document.createElement("br");
  switch(stage){
    case 0:
      bot("Olá sim adoraria");
      robot(
        "1 - Falar com atendente <br>"+
        "2 - Duvidas sobre os sites <br>"+
        "3 - Duvidas sobre os Apps"
      )
      stage++;

      console.log(""+document.getElementById("textInput").value);
    break;
  }

  console.log(stage);
});

