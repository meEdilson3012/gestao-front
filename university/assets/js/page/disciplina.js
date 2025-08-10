console.log("chegueiii")


var token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkZXYtZWQiLCJleHAiOjE3NTQ4NDgzNjgsInN1YiI6ImV1YWRtaW4ifQ.p65Z6N-W3dWidtuY9LfVrtlmRMEbQTMitl91AUY3lfs"
function pegar(dados,to_do){
    
    
console.log(to_do)

    switch (to_do) {

        case "editar":
            console.log(dados)
            editar(dados)
            break;
        case "deletar":
            deletar(dados)
            break;
        case "mostrar":
            mostrar(dados)
            break;
        default:
            break;
    }
}

function editar(dados) {
    console.log(dados)
    irPara("_add")

}

function deletar(dados) {
    
    var resposta= confirm("Tens certeza que queres remover este registro?");
    if (resposta) {
        console.log("remover")
    }
}

function mostrar(dados) {
    
    irPara("perfil")
}

function irPara(id) {

    console.log("jsdds")
    var a = document.getElementById(id)
    a.click()
}

function colocarDados(dados) {
    console.log(dados)
    var card= document.getElementById("disciplinaDados")
    card.innerHTML=""

    dados.forEach(element => {
        var div= document.createElement("div")
        div.className="col-lg-3 col-md-4 col-sm-12"
        div.innerHTML= `<div class="card h-100">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${element.nome}</h5>
                                <p class="card-text flex-grow-1">${element.descricao}</p>
                               
                                <div class="text-right mt-auto">
                                    <a  onclick="pegar(${element.id},'editar')" href="javascript:void(0)" class="btn btn-primary btn-sm">Editar</a>
                                    <a  onclick="pegar(${element.id},'deletar')" href="javascript:void(0)" class="btn btn-danger btn-sm">Excluir</a>
                                </div>
                            </div>
                                        </div>`

                                        card.appendChild(div)
    });



    

}

function colocarDados2(dados) {
    var card= document.getElementById("disciplinaDados")
    card.innerHTML=""

    dados.forEach(element => {
        var div= document.createElement("div")
        div.className="col-lg-3 col-md-4 col-sm-12"
        //div.classList.add("col-lg-3 col-md-4 col-sm-12")
        div.innerHTML= `<div class="card h-100">

                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">Ensino Fundamental I</h5>
                                <p class="card-text flex-grow-1">Nível de ensino para crianças de 6 a 10 anos, do 1º ao 5º ano.</p>
                               
                                <div class="text-right mt-auto">
                                    <a  onclick="pegar('1','editar')" href="javascript:void(0)" class="btn btn-primary btn-sm">Editar</a>
                                    <a onclick="pegar('1','deletar')" href="javascript:void(0)" class="btn btn-danger btn-sm">Excluir</a>
                                </div>
                            </div>
                                        </div>`

                                        card.appendChild(div)

    });
    

}


function colocarDisciplinas(dados) {
    var ul= document.createElement("ul")
    dados.forEach(element => {
        var li= document.createElement("li")
        li.textContent=element
        ul.appendChild(li)
    });

    return ul.innerHTML;
}




$(document).ready(function () {
    $("#disciplinas-add form").on("submit", function (e) {
        e.preventDefault(); // Evita recarregar a página

        // Pega o valor do campo Nome
        let nome = $("#disciplinas-add input[type='text']").val();

        // Pega o valor do campo Descrição
        let descricao = $("#disciplinas-add textarea").val();

        // Exibe no console (ou pode enviar via AJAX)
        console.log("Nome da disciplina:", nome);
        console.log("Descrição:", descricao);

        dados= {
            nome,descricao
        }
        cadastrar(dados)
    });
});



function cadastrar(dados) {

    var xhr = new XMLHttpRequest();
    xhr.open("POST","http://localhost:8080/disciplina/pedagogia1",true)
    xhr.onload = function() {
        console.log(xhr.responseText)
        if (xhr.status == 400) {
            
        }else if (xhr.status == 403){
            console.log("sdsds")
        }else if(xhr.status== 201){
             console.log(this.responseText)
            pegar("")
        }
    }
     xhr.onerror = function() {
    console.error("Erro de rede ou servidor inacessível");
};
    xhr.setRequestHeader('Authorization', 'Bearer '+token)
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(dados))
}


function pegar(url) {

    var xhr = new XMLHttpRequest();
    xhr.open("GET","http://localhost:8080/disciplina/pedagogia1"+url,true)
    xhr.onload = function() {
        console.log(xhr.responseText)
        if (xhr.status == 400) {
            
        }else if (xhr.status == 403){
            console.log("sdsds")
        }else if(xhr.status== 200){
             console.log(this.responseText.length)
             dados= JSON.parse(this.responseText)
             colocarDados(dados)
        }
    }
     xhr.onerror = function() {
    console.error("Erro de rede ou servidor inacessível");
};
    xhr.setRequestHeader('Authorization', 'Bearer '+token)
    xhr.send()
}


pegar("")