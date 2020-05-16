
/*//Digitar o conteúdo
const informacoesClientes = [
    {
        cpf: 32791459880,
        nome: "Shiley Alice Gomes da Silva"
    }
]*/





//Função para inserir conteúdo dentro da <tr> e criar a <tr>
    const exibeCliente = (cpf, nome)=>{
        const linha = document.createElement('tr') //Criar a tr
        
// responsável por armazenar os dados - Então não precisa deixar o <tr> na const.

        const conteudoLinha = `    
        <td>${cpf}</td>
        <td>${nome}</td>
    `
    linha.innerHTML = conteudoLinha //Exibindo o conteúdo da <tr>, que é o "conteudoLinha"
    return linha
    }

//Chamando do DOM a tag da tabela, que deve receber informações e novas tags dentro
//Receber a <tr> e <td>
const corpoTabela = document.querySelector("[data-conteudo-tabela]")

//Iteração que fica fazendo looping na array de novos dados
    listarClientes().then(exibe =>{
        exibe.forEach( indice =>{
        corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome))
        })
    }
    )


    /*informacoesClientes.forEach( indice =>{
        corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome))

    })*/
