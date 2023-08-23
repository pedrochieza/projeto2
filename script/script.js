let formulario = document.getElementById("inscricoes")
let msgUser = document.getElementById("msgUser")
let msgAlter = document.getElementById("msgAlter")
let msgEmail = document.getElementById("msgEmail")
let msgTel = document.getElementById("msgTel")
let msgSel1 = document.getElementById("msgSel1")
let msgSel2 = document.getElementById("msgSel2")
let msgSel3 = document.getElementById("msgSel3")
let User, Alter, Email, Tel, err

formulario.addEventListener("submit", function(event) {

    err = 0

    msgUser.innerText = msgAlter.innerText = msgEmail.innerText =  msgTel.innerText = msgSel1.innerText = msgSel2.innerText = msgSel3.innerText = ""
        
    User = document.getElementById("nome")

    if (User.value.length <= 3 || User.value == false) {
        msgUser.innerText = "* Nome inválido..."
        err++
        }

    Alter = document.getElementById("alterego")

    if (Alter.value.length <= 3 || Alter.value == false) {
        msgAlter.innerText = "* Alter Ego inválido..."
        err++
        }

    Email = document.getElementById("email").value;

    if (Email.indexOf("@") < 0) {
        msgEmail.innerText = "* E-mail inválido..."
        err++
        }

    Tel = document.getElementById("telefone");

    if (Tel.value.length <= 8 || Tel.value == false) {
        msgTel.innerText = "* Telefone inválido..."
        err++
        }

    sel1 = document.getElementById("especie").value;
        if(!sel1) {
        msgSel1.innerText = "* Selecione uma opção..."
        err++
    }
    
    sel2 = document.getElementById("equipe").value;
        if(!sel2) {
        msgSel2.innerText = "* Selecione uma opção..."
        err++
    }

    sel3 = document.getElementById("primaria").value;
        if(!sel3) {
        msgSel3.innerText = "* Selecione uma opção..."
        err++
    }

    if (!err) {
        
        formulario.action="mailto:email@domain.com";
        formulario.method="post";
        formulario.enctype="text/plain";
    }
    
    else {
        event.preventDefault()
    }
})
