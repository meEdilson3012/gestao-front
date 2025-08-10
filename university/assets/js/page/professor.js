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
    var tbody= document.getElementById("tbodyFr")
    tbody.innerHTML=""

    dados.forEach(element => {
        var tr= document.createElement("tr")
        tr.innerHTML= `
                    <td><div class="font-15">${element.nome}</div></td>
                    <td><span>${element.sexo}</span></td>
                    <td><span class="text-muted">${element.telefone}</span></td>
                    <td>${element.morada}</td>
                    <td>${element.numero}</td>
                    <td><strong>${element.data}</strong></td>
                    <td><strong>${element.status}</strong></td>
                    <td>
                        <button type="button" class="btn btn-icon btn-sm" title="View"><i class="fa fa-eye"></i></button>
                        <button  onclick="pegar(${element.id},'editar')" type="button" class="btn btn-icon btn-sm" title="Edit"><i class="fa fa-edit"></i></button>
                        <button onclick="pegar(${element.id},'deletar')" type="button" class="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o text-danger"></i></button>
                    </td>`

                                        tbody.appendChild(tr)
    });
    

}

function colocarDados2(dados) {
    var tbody= document.getElementById("tbodyFr")
    tbody.innerHTML=""

    dados.forEach(element => {
        var tr= document.createElement("tr")
        tr.innerHTML= `
                                        <td><div class="font-15">Edilson Cardoso</div></td>
                                        <td><span>Masculino</span></td>
                                        <td><span class="text-muted">955 26 52 60</span></td>
                                        <td>Cuntum</td>
                                        <td>000256708</td>
                                        <td><strong>04 Aug, 2024</strong></td>
                                        <td><strong>Activo</strong></td>
                                        <td>
                                            <button type="button" class="btn btn-icon btn-sm" title="View"><i class="fa fa-eye"></i></button>
                                            <button  onclick="pegar('1','editar')" type="button" class="btn btn-icon btn-sm" title="Edit"><i class="fa fa-edit"></i></button>
                                            <button onclick="pegar('1','deletar')" type="button" class="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o text-danger"></i></button>
                                        </td>`

                                        tbody.appendChild(tr)
    });
    

}

colocarDados2([1,2,3,4])


$("#pro-add .btn-primary").click(function(e) {
    e.preventDefault();

    let nome = $("#pro-add input").eq(0).val();
    let apelido = $("#pro-add input").eq(1).val();
    let dataNascimento = $("#pro-add input").eq(2).val();
    let genero = $("#pro-add select").eq(0).val();
    let tipoIdentificacao = $("#pro-add select").eq(1).val();
    let numeroIdentificacao = $("#pro-add input").eq(3).val();
    let localEmissao = $("#pro-add input").eq(4).val();
    let dataEmissao = $("#pro-add input").eq(5).val();
    let dataExpiracao = $("#pro-add input").eq(6).val();
    let telefone = $("#pro-add input").eq(7).val();
    let email = $("#pro-add input").eq(8).val();

    console.log({
        nome,
        apelido,
        dataNascimento,
        genero,
        tipoIdentificacao,
        numeroIdentificacao,
        localEmissao,
        dataEmissao,
        dataExpiracao,
        telefone,
        email
    });
});
