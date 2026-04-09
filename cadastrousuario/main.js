// Cria função para validar preenchimento de campos da tela de login
function acessar(){
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;

    //Estrutura que verifica se os campos foram preenchidos
    if(!loginEmail || !loginSenha){
        alert("Favor, preencha todos os campos");
     }else{
       window.location.href = 'cadastro.html';
    }
}

//Cria Array de forma gblobal
var dadosLista =[];

//Função para salvar usuário
function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;

    if(nomeUser){
        dadosLista.push(nomeUser);
        console.log(dadosLista);
        criaLista();
        //Mostra no console o array
        document.getElementById('nomeUser').value
        = "";
    }else{
        alert("Usuario, favor preencher o campo nome");
    }
}

//Função para crias lista do Array
function criaLista(){
    let tabela = document.getElementById('tabela').innerHTML ="<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    for(let i = 0; i <=(dadosLista.length -1); i++){
        tabela +="<tr><td>"+dadosLista[i] + "</td><td> <button class='btn btn-sucess' onclick='editar(this.parentNode.patrentNode.rowIndex)'>Editar</button> <button onclick='excluir(this.parentNode.parentNode.rowIndex)>Excluir</button> </td></tr>"
        document.getElementById('tabela').innerHTML = tabela;
    }
           
}

// Função para editar nomes da lista
function editar(i){
    document.getElementById('nomeUser').value = dadosLista[(dadosLista)];
    dadosLista.splice(dadosLista[(i - 1)], 1);
}

//Função para excluir nomes da lista
function excluir(i){
    dadosLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);
}