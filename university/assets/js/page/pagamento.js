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
    var tbody= document.getElementById("tbodyP")
    tbody.innerHTML=""

    dados.forEach(element => {
        var tr= document.createElement("tr")
        tr.innerHTML= ` 
                        <td>${element.mat}</td>
                        <td>${element.aluno}</td>
                        <td>${element.mes}</td>
                        <td>${element.data}</td>
                        <!--<td><span class="tag tag-green">paid</span></td>-->
                        <td>${element.valor}</td>
                    <td>
                    <button onclick="pegar(${element.id},'mostrar')"  type="button" class="btn btn-icon btn-sm" title="View"><i class="fa fa-eye"></i></button>
                    <button onclick="pegar(${element.id},'editar')" type="button" class="btn btn-icon btn-sm" title="Edit"><i class="fa fa-edit"></i></button>
                    <button onclick="pegar(${element.id},'deletar')" type="button" class="btn btn-icon btn-sm" title="Delete" data-type="confirm"><i class="fa fa-trash-o text-danger"></i></button>
                </td>`

                                        tbody.appendChild(tr)
    });
    

}


function colocarDados2(dados) {
    var tbody= document.getElementById("tbodyP")
    tbody.innerHTML=""

    dados.forEach(element => {
        var tr= document.createElement("tr")
        tr.innerHTML= ` 
                        <td>2528</td>
                        <td>Edilson Cardoso</td>
                        <td>Janeiro</td>
                        <td>12 Jan 2023</td>
                        <!--<td><span class="tag tag-green">paid</span></td>-->
                        <td>248$</td>
                    <td>
                    <button onclick="pegar('1','mostrar')"  type="button" class="btn btn-icon btn-sm" title="View"><i class="fa fa-eye"></i></button>
                    <button onclick="pegar('1','editar')" type="button" class="btn btn-icon btn-sm" title="Edit"><i class="fa fa-edit"></i></button>
                    <button onclick="pegar('1','deletar')" type="button" class="btn btn-icon btn-sm" title="Delete" data-type="confirm"><i class="fa fa-trash-o text-danger"></i></button>
                </td>`

                                        tbody.appendChild(tr)
    });
    

}

colocarDados2([1,2,3,4])


$(document).ready(function () {
    $("#Fees-add form").on("submit", function (e) {
        e.preventDefault(); // Evita que a página recarregue

        // Pega o valor do campo "Código Aluno"
        let codigoAluno = $("#Fees-add input[type='text']").eq(0).val();

        // Pega o valor do campo "Mês"
        let mes = $("#Fees-add select").val();

        // Pega o valor do campo "Data Pagamento"
        let dataPagamento = $("#Fees-add input[type='date']").val();

        // Pega o valor do campo "Montante"
        let montante = $("#Fees-add input[type='text']").eq(1).val();

        // Exemplo de exibição no console
        console.log("Código Aluno:", codigoAluno);
        console.log("Mês:", mes);
        console.log("Data Pagamento:", dataPagamento);
        console.log("Montante:", montante);
    });
});
