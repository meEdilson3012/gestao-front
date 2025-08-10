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
    var tbody= document.getElementById("tbodyFn")
    tbody.innerHTML=""

    dados.forEach(element => {
        var tr= document.createElement("tr")
        tr.innerHTML= ` 
                        <td>${element.id}</td>
                        <td>${element.descricao}</td>
                        <td>${element.tipo}</td>
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
    var tbody= document.getElementById("tbodyFn")
    tbody.innerHTML=""

    dados.forEach(element => {
        var tr= document.createElement("tr")
        tr.innerHTML= ` 
                        <td>111</td>
                            <td>Corrine Johnson</td>
                            <td>Entrada</td>
                            <td>12 Jan 2023</td>
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
        e.preventDefault(); // Evita recarregar a página

        // Pega o valor da descrição
        let descricao = $("#Fees-add textarea").val();

        // Pega o valor do tipo (Entrada ou Saída)
        let tipo = $("#Fees-add select").val();

        // Pega o valor do preço
        let preco = $("#Fees-add input[type='text']").val();

        // Exemplo de exibição
        console.log("Descrição:", descricao);
        console.log("Tipo:", tipo);
        console.log("Preço:", preco);
    });
});
