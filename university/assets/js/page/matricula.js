console.log("chegueiii")


var token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkZXYtZWQiLCJleHAiOjE3NTQ4NDgzNjgsInN1YiI6ImV1YWRtaW4ifQ.p65Z6N-W3dWidtuY9LfVrtlmRMEbQTMitl91AUY3lfs"

try {
  var val=  localStorage.getItem("mat")
  var codigo= localStorage.getItem("actualmat")
  if (val=="true") {
    irParaMat("mat")
    localStorage.removeItem("mat")

  }

} catch (error) {
    
}

function pegarMat(dados,to_do){
    
    
console.log(to_do)

    switch (to_do) {

        case "editar":
            console.log(dados)
            editarMat(dados)
            break;
        case "deletar":
            deletarMat(dados)
            break;
        case "mostrar":
            mostrarMat(dados)
            break;
        default:
            break;
    }
}

function editarMat(dados) {
    console.log(dados)
    localStorage.setItem("mat",true)
    localStorage.setItem("actualmat",dados)
    window.location.href = "http://127.0.0.1:5500/university/students.html"

}

function deletarMat(dados) {
    
    var resposta= confirm("Tens certeza que queres remover este registro?");
    if (resposta) {
        console.log("remover")
    }
}

function mostrarMat(dados) {
    
    irPara("perfil")
}

function irParaMat(id) {

    console.log("jsdds")
    var a = document.getElementById(id)
    a.click()
}


function colocarDadosMat(dados) {
    var tbody= document.getElementById("tbodyM")
    tbody.innerHTML=""

    dados.forEach(element => {
        var tr= document.createElement("tr")
        tr.innerHTML= `<td>${element.codigo}</td>
                                        <td class="font-16">${element.nome}</td>
                                        <td>${element.nivel.nome}</td>
                                        <td>${element.data}</td>
                                        <td>2${element.ano_lectivo}</td>
                                        <td>
                                            <button type="button" class="btn btn-icon btn-sm" title="View"><i class="fa fa-eye"></i></button>
                                            <button onclick="pegar(${element.codigo},'editar')" type="button" class="btn btn-icon btn-sm" title="Edit"><i class="fa fa-edit"></i></button>
                                            <button onclick="pegar(${element.codigo},'deletar')" type="button" class="btn btn-icon btn-sm " title="Delete" data-type="confirm"><i class="fa fa-trash-o text-danger"></i></button>
                                        </td>`
                                        tbody.appendChild(tr)
    });
    

}

function colocarDadosMat2(dados) {
    var tbody= document.getElementById("tbodyM")
    tbody.innerHTML=""

    dados.forEach(element => {
        var tr= document.createElement("tr")
        tr.innerHTML= `<td>2528</td>
                                        <td class="font-16">Edilson Cardoso</td>
                                        <td>5º Ano</td>
                                        <td>03/04/2025</td>
                                        <td>2024/2025</td>
                                        <td>
                                            <button type="button" class="btn btn-icon btn-sm" title="View"><i class="fa fa-eye"></i></button>
                                            <button onclick="pegar('1','editar')" type="button" class="btn btn-icon btn-sm" title="Edit"><i class="fa fa-edit"></i></button>
                                            <button onclick="pegar('1','deletar')" type="button" class="btn btn-icon btn-sm " title="Delete" data-type="confirm"><i class="fa fa-trash-o text-danger"></i></button>
                                        </td>`
                                        tbody.appendChild(tr)
    });
    

}

function matricular(dados) {
    
     var xhr = new XMLHttpRequest();
    xhr.open("POST","http://localhost:8080/matricula/secretaria",true)
    xhr.onload = function() {
        console.log(xhr.responseText)
        if (xhr.status == 400) {
            
        }else if (xhr.status == 403){
            console.log("sdsds")
        }else if(xhr.status== 201){
             console.log(this.responseText)
           colocarDados(JSON.parse(this.responseText))
        }
    }
     xhr.onerror = function() {
    console.error("Erro de rede ou servidor inacessível");
};
    xhr.setRequestHeader('Authorization', 'Bearer '+token)
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(dados))
}