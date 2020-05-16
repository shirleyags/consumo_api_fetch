
const formCadastrosClientes = document.querySelector('[data-form]')


formCadastrosClientes.addEventListener('submit', event =>{
    event.preventDefault()

    const nome = event.target.querySelector('[data-nome]')
    const cpf = event.target.querySelector('[data-cpf]')

    cadastrarClientes(nome.value, cpf.value) //Essa é a função de cadastrar clientes na API
    //que foi elaborada no arquivo "cliente.js"


})

