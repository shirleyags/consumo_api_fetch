//Chamar o array de objetos do Json
//GET
const listarClientes = () => {

    return fetch('http://localhost:4000/clientes')

        .then(resposta => {

            return resposta.json()
        })
        .then(json => {
            return json
        })

}

//POST - Colocar dados dos clientes no servidor

const cadastrarClientes = (nome, cpf) => {
    const json = JSON.stringify/*Método para informar que os dados no corpo (body) serão em formato
        Json - Essa const é do body.*/({
        nome: nome, //Propriedades que vão no body
        cpf: cpf
    })
    return fetch('http://localhost:4000/clientes/cliente', {
        method: 'POST',
        headers: { //Indica o tipo de dado que está sendo enviado para o servidor.
            'Content-type': 'application/json'
        },
        body: json //recebe os dados dos clientes
    })
        .then(resp /*Pegue a resposta do body e execute*/ => {
            return resp.body;
        })
}

//DELETE

const deletaCliente = id => {
    return fetch(`http:localhost:4000/clientes/cliente/${id}`, {
      method: "DELETE",
  })}

  //EDITAR

  const detalhaCliente = id =>{
      return fetch (`http://localhost:4000/clientes/cliente/${id}`,{
          method:'GET'
      })
      .then(resposta =>{
          return resposta.json()
      })
  }

  //Para os dados voltar para a API
  const editaCliente = (id, cpf, nome) =>{ 
    //***Daqui até um pouco mais pra baixo copiou do POST**************

    const json = JSON.stringify/*Método para informar que os dados no corpo (body) serão em formato
    Json - Essa const é do body.*/({
    nome: nome, //Propriedades que vão no body
    cpf: cpf
})
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {  
    method: 'PUT', //****Muda para PUT invés de POST 

    headers: { //Indica o tipo de dado que está sendo enviado para o servidor.
        'Content-type': 'application/json'
    },
    body: json //recebe os dados dos clientes
})

    // ******* Até aqui!**************


  }

   












