var bt_enviar = document.getElementById("enviar");
    if(bt_enviar){
        bt_enviar.addEventListener("click", function(){
            let nome = document.getElementById("nome").value;
            let cpf = document.getElementById("cpf").value;
            let email = document.getElementById("email").value;
            let cep = document.getElementById("cep").value;
            let rua = document.getElementById("rua").value;
            let numero = document.getElementById("numero").value;
            let complemento = document.getElementById("complemento").value;
            let bairro = document.getElementById("bairro").value;
            let cidade = document.getElementById("cidade").value;
            let estado = document.getElementById("estado").value;

            let dataCliente = {
                nome,
                cpf,
                email,
                cep,
                rua,
                numero,
                complemento,
                bairro,
                cidade,
                estado,
            }

            let converData = JSON.stringify(dataCliente);
            localStorage.setItem("cadastroCliente", converData);
            alert("Cadastro concluído");
        
    });

}
var bt_cadastrar = document.getElementById("cadastrar");
    if(bt_cadastrar){
        bt_cadastrar.addEventListener("click", function(){
            let nome = document.getElementById("nome").value;
            let código = document.getElementById("código").value;
            let quantidade = document.getElementById("quantidade").value;

            let DataProd = {
               nome,
               código,
               quantidade,
            }

            let converDataProd= JSON.stringify(DataProd);
            localStorage.setItem("cadastroProduto", converDataProd);
            alert("Cadastro concluído");
    });
}