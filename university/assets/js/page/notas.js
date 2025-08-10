console.log("chegueiii")


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
    var tbody= document.getElementById("tbodyN")
    tbody.innerHTML=""

    dados.forEach(element => {
        var tr= document.createElement("tr")
        tr.innerHTML= ` <td>${element.id}</td>
                                            <td>${element.nome}</td>
                                            <td>${element.disciplina}</td>
                                            <td>${element.nota}</td>
                                             <td>${element.period}</td>
                                             <td>
                                            <button type="button" class="btn btn-icon btn-sm" title="View"><i class="fa fa-eye"></i></button>
                                            <button onclick="pegar(${element.id},'editar')" type="button" class="btn btn-icon btn-sm" title="Edit"><i class="fa fa-edit"></i></button>
                                            <button onclick="pegar(${element.id},'deletar')" type="button" class="btn btn-icon btn-sm " title="Delete" data-type="confirm"><i class="fa fa-trash-o text-danger"></i></button>`

                                        tbody.appendChild(tr)
    });
    

}

function colocarDados2(dados) {
    var tbody= document.getElementById("tbodyN")
    tbody.innerHTML=""

    dados.forEach(element => {
        var tr= document.createElement("tr")
        tr.innerHTML= ` <td>001-2023</td>
                                            <td>João Silva</td>
                                            <td>Matemática</td>
                                            <td>8.5</td>
                                             <td>1º</td>
                                             <td>
                                            <button type="button" class="btn btn-icon btn-sm" title="View"><i class="fa fa-eye"></i></button>
                                            <button onclick="pegar('1','editar')" type="button" class="btn btn-icon btn-sm" title="Edit"><i class="fa fa-edit"></i></button>
                                            <button onclick="pegar('1','deletar')" type="button" class="btn btn-icon btn-sm " title="Delete" data-type="confirm"><i class="fa fa-trash-o text-danger"></i></button>`

                                        tbody.appendChild(tr)
    });
    

}

colocarDados2([1,2,3,4])



$(document).ready(function() {
    $("#btnSalvarNota").click(function() {
        let codigoAluno = $("#matricula").val();
        let disciplina = $("#disciplina").val();
        let periodo = $("#periodo").val();
         let nota = $("#nota").val();

        console.log({
            codigoAluno,
            disciplina,
            periodo,
            nota
        });

    });
});