
const formCadastrosClientes = document.querySelector('[data-form]')


formCadastrosClientes.addEventListener('submit', event =>{
    event.preventDefault()

    const nome = event.target.querySelector('[data-nome]').value
    const cpf = event.target.querySelector('[data-cpf]').value

    
    if(validaCPF(cpf)){
        cadastrarClientes(nome, cpf) //Essa é a função de cadastrar clientes na API
        //que foi elaborada no arquivo "cliente.js
    }else{
        alert('CPF inválido ou já existente')   
    }
})

