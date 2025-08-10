

console.log("chegueiii")

var token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkZXYtZWQiLCJleHAiOjE3NTQ4NDgzNjgsInN1YiI6ImV1YWRtaW4ifQ.p65Z6N-W3dWidtuY9LfVrtlmRMEbQTMitl91AUY3lfs"

function pegarDados(dados,to_do){
    
    console.log(dados)


    switch (to_do) {
        case "editar":
            editarAluno(dados)
            break;
        case "deletar":
            deletarAluno(dados)
            break;
        case "mostrar":
            mostrar(dados)
            break;
        default:
            break;
    }
}

function editarAluno(dados) {

    var xhr = new XMLHttpRequest();
    xhr.open("GET","http://localhost:8080/aluno/secretaria/por-id/"+dados,true)
    xhr.onload = function() {
        console.log(xhr.responseText)
        if (xhr.status == 400) {
            
        }else if (xhr.status == 403){
            console.log("sdsds")
        }else if(xhr.status== 200){
            var dados = JSON.parse(this.responseText)
            colocarDadosParaEditar(dados)
            console.log(this.responseText)
             irPara("_add")
        }
       
    }
    xhr.onerror = function() {
    console.error("Erro de rede ou servidor inacessível");
};
    xhr.setRequestHeader('Authorization', 'Bearer '+token)
    xhr.send()  

   

}

function colocarDadosParaEditar(dados) {
        var content= `
        <div id="id_div" class="form-group row">
                                            <label class="col-md-3 col-form-label">Id<span class="text-danger">*</span></label>
                                            <div class="col-md-9">
                                                <input id="id_aluno" disabled type="text" value=${dados.id} class="form-control" placeholder="id">
                                            </div>
                                        </div>
           <div class="form-group row">
                                            <label class="col-md-3 col-form-label">Nome<span class="text-danger">*</span></label>
                                            <div class="col-md-9">
                                                <input type="text" value=${dados.nome} class="form-control" placeholder="Enter First name">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-md-3 col-form-label">Apelido <span class="text-danger">*</span></label>
                                            <div class="col-md-9">
                                                <input id="nome" value=${dados.apelido} type="text" class="form-control" placeholder="Enter Last name">
                                            </div>
                                        </div>
                                       
                                         <div class="form-group row">
                                            <label class="col-md-3 col-form-label">Data de Nascimento <span class="text-danger">*</span></label>
                                            <div class="col-md-9">
                                                <input data-provide="datepicker" value=${formatarData(dados.aniversario)} data-date-autoclose="true" class="form-control" placeholder="">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-md-3 col-form-label">Genênero <span class="text-danger">*</span></label>
                                            <div class="col-md-9">
                                                <select class="form-control value=${dados.sexo} input-height" name="gender">
                                                    <option value="">Select...</option>
                                                    <option value="M" ${(dados.sexo== "M")? "selected":""}>Masculino</option>
                                                    <option value="F" ${(dados.sexo== "F")? "selected":""}>Feminino</option>
                                                </select>
                                            </div>
                                        </div>

                                         <div class="form-group row">
                                            <label class="col-md-3 col-form-label">Tipo de identificação<span class="text-danger">*</span></label>
                                            <div class="col-md-9">
                                                <select class="form-control value=${dados.identificacao.tipo} input-height" name="department">
                                                    <option value="">Select...</option>
                                                    <option value="BI" ${(dados.identificacao.tipo== "BI")? "selected":""}>BI</option>
                                                    <option value="PASSAPORTE" ${(dados.identificacao.tipo== "PASSAPORTE")? "selected":""}>Passaporte</option>
                                                    <option value="CEDULA" ${(dados.identificacao.tipo== "CEDULA")? "selected":""}>Cedula</option>
                                                 
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            
                                            <label class="col-md-3 col-form-label">Número de identificacao<span class="text-danger">*</span></label>
                                            <div class="col-md-9">
                                                <input type="text" value=${dados.identificacao.numero} class="form-control">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-md-3 col-form-label">Local de Emissão</label>
                                            <div class="col-md-9">
                                                <input type="text" value=${dados.identificacao.localEmissao} class="form-control">
                                            </div>
                                        </div>
                                         <div class="form-group row">
                                            <label class="col-md-3 col-form-label">Data de Emissão <span class="text-danger">*</span></label>
                                            <div class="col-md-9">
                                                <input data-provide="datepicker" value=${formatarData(dados.identificacao.dataEmissao)} data-date-autoclose="true" class="form-control" placeholder="">
                                            </div>
                                        </div>
                                         <div class="form-group row">
                                            <label class="col-md-3 col-form-label">Data de Expiração<span class="text-danger">*</span></label>
                                            <div class="col-md-9">
                                                <input data-provide="datepicker" value=${formatarData(dados.identificacao.dataExpiracao)} data-date-autoclose="true" class="form-control" placeholder="">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-md-3 col-form-label">Nascionalidade <span class="text-danger">*</span></label>
                                            <div class="col-md-9">
                                                <input type="text" value=${dados.nome} class="form-control">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-md-3 col-form-label">Natural de <span class="text-danger">*</span></label>
                                            <div class="col-md-9">
                                                <input type="text" value=${dados.naturalidade} class="form-control">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-md-3 col-form-label">Reigião de <span class="text-danger">*</span></label>
                                            <div class="col-md-9">
                                                <input type="text" value=${dados.regiao} class="form-control">
                                            </div>
                                        </div>
                                        
                                        <div class="form-group row">
                                            <label class="col-md-3 col-form-label">Morada <span class="text-danger">*</span></label>
                                            <div class="col-md-9">
                                                <input type="text" value=${dados.morrada} class="form-control">
                                            </div>
                                        </div>
        `
      
        var content2 = ` <div class="col-md-6 col-sm-12">
                                                <div class="form-group">
                                                    <label>Nome</label>
                                                    <input type="text" value=${dados.ecarregado.nome_pai} class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group">
                                                    <label>Apelido</label>
                                                    <input type="text" value=${dados.ecarregado.apelido_pai} class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group">
                                                    <label>Morada</label>
                                                    <input type="text" value=${dados.ecarregado.morrada_pai} class="form-control">
                                                </div>
                                            </div>

                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group">
                                                    <label>Contacto</label>
                                                    <input type="text" value=${dados.ecarregado.telefone_pai} class="form-control">
                                                </div>
                                            </div>

                                             <div class="col-md-6 col-sm-12">
                                                <div class="form-group">
                                                    <label>Profissão</label>
                                                    <input type="text" value=${dados.ecarregado.profissao_pai} class="form-control">
                                                </div>
                                            </div>`

          var content3= ` <div class="col-md-6 col-sm-12">
                                                <div class="form-group">
                                                    <label>Nome</label>
                                                    <input type="text" value=${dados.encarregada.nome_mae} class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group">
                                                    <label>Apelido</label>
                                                    <input type="text" value=${dados.encarregada.apelido_mae} class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group">
                                                    <label>Morada</label>
                                                    <input type="text" value=${dados.encarregada.morrada_mae} class="form-control">
                                                </div>
                                            </div>

                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group">
                                                    <label>Contacto</label>
                                                    <input type="text" value=${dados.encarregada.telefone_mae} class="form-control">
                                                </div>
                                            </div>

                                             <div class="col-md-6 col-sm-12">
                                                <div class="form-group">
                                                    <label>Profissão</label>
                                                    <input type="text" value=${dados.encarregada.profissao_mae} class="form-control">
                                                </div>
                                            </div>`

    var infoGeral= document.getElementById("form_dados1")
    var pai= document.getElementById("form_dados2")
    var mae= document.getElementById("form_dados3")

    infoGeral.innerHTML=content
    pai.innerHTML=content2
    mae.innerHTML=content3
   

}

function formatarData(data) {
    let partes = data.split("-"); // ["yyyy", "MM", "dd"]
    if (partes.length !== 3) return "";
    
    return `${partes[1]}/${partes[2]}/${partes[0]}`; // dd/MM/yyyy
}


function deletarAluno(dados) {
    
    var resposta= confirm("Tens certeza que queres remover este registro?");
    if (resposta) {
        console.log("remover")
        deletar(dados)
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

function colocarDadosAluno(dados) {
    var tbody= document.getElementById("tbody")
    tbody.innerHTML=""
    console.log(dados.length)
    if (dados.length ==0) {
            tbody.innerHTML="Sem alunos cadastrados ainda"
         return
    }
    
    dados.forEach(element => {
        var tr= document.createElement("tr")
        tr.innerHTML= `<td class="font-16">${element.nome}</td>
                                        <td>${element.idade}</td>
                                        <td>${element.sexo}</td>
                                        <td>${element.identificacao.numero}</td>
                                        <td>${element.naturalidade}</td>
                                        <td>${element.nasionalidade}</td>
                                        <td>${element.status}</td>
                                        <td>
                                            <button onclick="pegarDados(${element.id},'mostrar')"  type="button" class="btn btn-icon btn-sm" title="View"><i class="fa fa-eye"></i></button>
                                            <button onclick="pegarDados(${element.id},'editar')" type="button" class="btn btn-icon btn-sm" title="Edit"><i class="fa fa-edit"></i></button>
                                            <button onclick="pegarDados(${element.id},'deletar')" type="button" class="btn btn-icon btn-sm" title="Delete" data-type="confirm"><i class="fa fa-trash-o text-danger"></i></button>
                                             <div class="card-footer text-right">
                                    <button type="submit" onclick="matricularAluno(${element.id})" class="btn btn-primary">Matricular</button>
                                </div>
                                            </td>`
                                         tbody.appendChild(tr)
    });
   

}

function colocarDadosAluno2(dados) {
    var tbody= document.getElementById("tbody")
    tbody.innerHTML=""

    dados.forEach(element => {
        var tr= document.createElement("tr")
        tr.innerHTML= `<td class="font-16">sdfdsfd</td>
                                        <td>sdfsfd</td>
                                        <td>sdfsfds</td>
                                        <td>sfdsf</td>
                                        <td>sdf</td>
                                        <td>dfdfd</td>
                                        <td>sdsd</td>
                                        <td>
                                            <button onclick="pegar('1','mostrar')"  type="button" class="btn btn-icon btn-sm" title="View"><i class="fa fa-eye"></i></button>
                                            <button onclick="pegar('1','editar')" type="button" class="btn btn-icon btn-sm" title="Edit"><i class="fa fa-edit"></i></button>
                                            <button onclick="pegar('1','deletar')" type="button" class="btn btn-icon btn-sm" title="Delete" data-type="confirm"><i class="fa fa-trash-o text-danger"></i></button>
                                        </td>`

                                        tbody.appendChild(tr)
    });
    

}





$(document).ready(function() {

    $("#btnSalvar").click(function() {
        // --- Informações do aluno ---
        let id = document.getElementById("id_aluno").value;
        console.log(id)
        let nome = $("input[placeholder='Enter First name']").val();
        let apelido = $("#nome").val();
        var aniversario = $("input[data-provide='datepicker']").eq(0).val();
        if (aniversario) {
            let partes = aniversario.split("/"); // ["dd", "mm", "yyyy"]
            var aniversario = `${partes[2]}-${partes[0]}-${partes[1]}`; // yyyy-MM-dd
            console.log(aniversario); // Agora o Spring entende
        }
        let sexo = $("select[name='gender']").val();
        let tipoIdentificacao = $("select[name='department']").val();
        let numero_ = $(".form-group:contains('Número de identificacao') input").val();
        let localEmissao = $(".form-group:contains('Local de Emissão') input").val();
        var dataEmissao = $("input[data-provide='datepicker']").eq(1).val();
        if (dataEmissao) {
            let partes = dataEmissao.split("/"); // ["dd", "mm", "yyyy"]
            var dataEmissao = `${partes[2]}-${partes[0]}-${partes[1]}`; // yyyy-MM-dd
            console.log(dataEmissao); // Agora o Spring entende
        }
        var dataExpiracao = $("input[data-provide='datepicker']").eq(2).val();
        if (dataExpiracao) {
            let partes = dataExpiracao.split("/");
            var dataExpiracao = `${partes[2]}-${partes[0]}-${partes[1]}`; 
            console.log(dataExpiracao); 
        }
        let nascionalidade = $(".form-group:contains('Nascionalidade') input").val();
        let naturalidade = $(".form-group:contains('Natural de') input").val();
        let regiao = $(".form-group:contains('Reigião de') input").val();
        let morrada = $(".form-group:contains('Morada')").eq(0).find("input").val();

        // --- Encarregado/Pai ---
        let nome_pai = $(".card:contains('Informações do encarregado/pai') .form-group:contains('Nome') input").val();
        let apelido_pai = $(".card:contains('Informações do encarregado/pai') .form-group:contains('Apelido') input").val();
        let morrada_pai= $(".card:contains('Informações do encarregado/pai') .form-group:contains('Morada') input").val();
        let telefone_pai= $(".card:contains('Informações do encarregado/pai') .form-group:contains('Contacto') input").val();
        let profissao_pai = $(".card:contains('Informações do encarregado/pai') .form-group:contains('Profissão') input").val();

        // --- Encarregada/Mãe ---
        let nome_mae = $(".card:contains('Informações do encarregada/mãe') .form-group:contains('Nome') input").val();
        let apelido_mae = $(".card:contains('Informações do encarregada/mãe') .form-group:contains('Apelido') input").val();
        let morrada_mae = $(".card:contains('Informações do encarregada/mãe') .form-group:contains('Morada') input").val();
        let telefone_mae = $(".card:contains('Informações do encarregada/mãe') .form-group:contains('Contacto') input").val();
        let profissao_mae = $(".card:contains('Informações do encarregada/mãe') .form-group:contains('Profissão') input").val();

        let numero={
                "tipo":tipoIdentificacao,
                "numero":numero_
            }
        // Exemplo de saída no console
        let identificacao={
          numero,
            dataEmissao,localEmissao,dataExpiracao
        }

        let ecarregado= {
            nome_pai,apelido_pai,morrada_pai,telefone_pai,profissao_pai
        }
         let encarregada= {
            nome_mae,apelido_mae,morrada_mae,telefone_mae,profissao_mae
        }
        if (id == "") {
             let dados={
            nome, apelido, aniversario, sexo, identificacao, nascionalidade, 
            nascionalidade,naturalidade, regiao, morrada,ecarregado,encarregada
             };
             
             console.log(JSON.stringify(dados))
            cadastrar(dados)
        }else{
            console.log("id"+id)
             let dados={
            nome, apelido, aniversario, sexo, identificacao, nascionalidade, 
            nascionalidade,naturalidade, regiao, morrada,ecarregado,encarregada
             };
              console.log(JSON.stringify(dados))
            editar(dados,id)
        }
       
       
        


    });

});



$(document).ready(function() {
    $("#btnSalvarMatricula").click(function() {
        let codigoAluno = $("#codigoAluno").val();
        let nivel = $("#nivel").val();
        let anoLectivo = $("#anoLectivo").val();

        console.log({
            codigoAluno,
            nivel,
            anoLectivo
        });

        let matricula={
            codigoAluno,
            nivel,
            anoLectivo
        }

        mat.matricular(matricula)




        // Exemplo: enviar via AJAX
        /*
        $.post("/salvarMatricula", {
            codigoAluno: codigoAluno,
            nivel: nivel,
            anoLectivo: anoLectivo
        }, function(resposta) {
            console.log("Servidor respondeu:", resposta);
        });
        */
    });
});


function cadastrar(dados) {
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST","http://localhost:8080/aluno/secretaria/cadastrar-aluno",true)
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
    xhr.open("GET","http://localhost:8080/aluno/secretaria"+url,true)
    xhr.onload = function() {
        console.log(xhr.responseText)
        if (xhr.status == 400) {
            
        }else if (xhr.status == 403){
            console.log("sdsds")
        }else if(xhr.status== 200){
            var dados = JSON.parse(this.responseText)
            var dadosList= (dados.length ==0) ? [dados] :dados
            colocarDadosAluno(dadosList)
            console.log(this.responseText)
          
        }
       
    }
    xhr.onerror = function() {
    console.error("Erro de rede ou servidor inacessível");
};
    xhr.setRequestHeader('Authorization', 'Bearer '+token)
    xhr.send()

}


function editar(dados,id) {
    var xhr = new XMLHttpRequest();
    xhr.open("PUT","http://localhost:8080/aluno/secretaria/editar/"+id,true)
    xhr.onload = function() {
        console.log(xhr.responseText)
        if (xhr.status == 400) {
            
        }else if (xhr.status == 403){
            console.log("sdsds")
        }else if(xhr.status== 201){
             console.log(this.responseText)
        }
    }
     xhr.onerror = function() {
    console.error("Erro de rede ou servidor inacessível");
};
    xhr.setRequestHeader('Authorization', 'Bearer '+token)
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(dados))
}

function deletar(id) {
     var xhr = new XMLHttpRequest();
    xhr.open("DELETE","http://localhost:8080/aluno/secretaria/deletar/"+id,true)
    xhr.onload = function() {
         console.log(xhr.responseText)
        if (xhr.status == 400) {
            
        }else if (xhr.status == 403){
            console.log("sdsds")
        }else if(xhr.status== 204){
            
             console.log(this.responseText)
             pegar("")
        }
    }
     xhr.onerror = function() {
    console.error("Erro de rede ou servidor inacessível");
};
    xhr.setRequestHeader('Authorization', 'Bearer '+token)
    xhr.send()
}

function matricularAluno(dados) {
        let idAluno = document.getElementById("codigoAluno")
        idAluno.value= dados;
        irPara("mat")
}


function pegarNivel(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","http://localhost:8080/nivel/pedagogia1",true)
    xhr.onload = function() {
        console.log(xhr.responseText)
        if (xhr.status == 400) {
            
        }else if (xhr.status == 403){
            console.log("sdsds")
        }else if(xhr.status== 200){
             console.log(this.responseText.length)
             var dados= JSON.parse(this.responseText)
               dados.forEach(element => {
                    var opt=  document.createElement("option")
                    opt.value=element.nome
                    opt.textContent=element.nome
                    document.getElementById("nivel").appendChild(opt)        
               })
        }
    }
     xhr.onerror = function() {
    console.error("Erro de rede ou servidor inacessível");
};
    xhr.setRequestHeader('Authorization', 'Bearer '+token)
    xhr.send()
}
pegar("")
pegarNivel()
