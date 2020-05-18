const pegaURL = new URL(window.location) //mostra o endereço da página


const id = pegaURL.searchParams.get('id') // Pegar o id do cliente pelo URL

const inputCPF = document.querySelector('[data-cpf]')
const inputNome = document.querySelector('[data-nome]')

detalhaCliente(id).then(dados => {

    inputCPF.value = dados[0].cpf
    inputNome.value = dados[0].nome
})


const formEdicao = document.querySelector('[data-form]')

const mensagemSucesso = (mensagem) => {
    const linha = document.createElement('tr')

    const conteudoLinha = ` 
        <div class="alert alert-success" role="alert">${mensagem}</div>
        `
    linha.innerHTML = conteudoLinha //Exibindo o conteúdo da <tr>, que é o "conteudoLinha"
    return linha
}

const mensagemErro = (mensagem) => {
    const linha = document.createElement('tr')

    const conteudoLinha = ` 
    <div class="alert alert-warning" role="alert">${mensagem}</div>
    `
    linha.innerHTML = conteudoLinha //Exibindo o conteúdo da <tr>, que é o "conteudoLinha"
    return linha
}

formEdicao.addEventListener('submit', event => {
    event.preventDefault()

    if (!validaCPF(inputCPF.value)) {
        alert("O CPF não existe!")
        return
    }

    editaCliente(id, inputCPF.value, inputNome.value).then(resposta =>{
        if(resposta.status === 200){

            formEdicao.appendChild(mensagemSucesso('Dados do cliente editados com sucesso!'))
        }else{
            formEdicao.appendChild(mensagemErro('Erros na edição dos dados do cliente!'))

        }
    })
    //Essa função está no arquivo cliente.js

})



