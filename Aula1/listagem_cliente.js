
/*//Digitar o conteúdo
const informacoesClientes = [
    {
        cpf: 32791459880,
        nome: "Shiley Alice Gomes da Silva"
    }
]*/


//Função que linka a DELETE da API com o botão de deletar

const removeCliente = id => {
    if (confirm('Deseja deletar o cliente?')) {
        deletaCliente(id) //essa função está lá na Fetch, arquivo cliente.js
        document.location.reload() // Para atualizar a página 
                                //automaticamente quando se exclui um cliente

    }
}



//Função para inserir conteúdo dentro da <tr> e criar a <tr>
const exibeCliente = (cpf, nome, id) => {
    const linha = document.createElement('tr') //Criar a tr

    // responsável por armazenar os dados - Então não precisa deixar o <tr> na const.

    const conteudoLinha = `    
        <td>${cpf}</td>
        <td>${nome}</td>
        <button type="button" class="btn btn-danger" onclick="removeCliente(${id})">Excluir</button>
        <a href="edita-clientes.html?id=${id}"><button type="button" class="btn btn-info">Editar</button></a>
        `
    /*O cifrão indica que não é uma string, sim algo do JS.
    Para o editar, se coloca o id na própria URL, com um ponto de interrogação antes
    e não precisa fazer uma função.*/

    linha.innerHTML = conteudoLinha //Exibindo o conteúdo da <tr>, que é o "conteudoLinha"
    return linha
}

//Chamando do DOM a tag da tabela, que deve receber informações e novas tags dentro
//Receber a <tr> e <td>
const corpoTabela = document.querySelector("[data-conteudo-tabela]")

//Iteração que fica fazendo looping na array de novos dados
listarClientes().then(exibe => {
    exibe.forEach(indice => {
        corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id))
        //Foi acrescentado o indice.id para que se consiga usar o DELETE
    })
}
)


/*informacoesClientes.forEach( indice =>{
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome))

})*/
