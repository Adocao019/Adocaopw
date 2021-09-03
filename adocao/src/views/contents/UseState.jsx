import './UseState.css'
import React, { useState } from "react"

const UseState = props => {

    const [ nome, setNome ] = useState("")
    const [ duvida, setDuvida ] = useState("")
        const [ email, setEmail ] = useState("")
          const [ telefone, setTelefone] = useState("")
    const [ mensagem, setMensagem ] = useState("")

    return (
        <div>
            <div className="titulo">
                <h1>Contato</h1>
                <h2>Entre em contato conosco</h2>
            </div>
 
            <div className="conteudo">
                <input
                className="campo"
                type="text" value={nome}
                placeholder="Digite seu nome completo"
                onChange={ e => setNome(e.target.value) }
                />
                <input
                className="campo"
                type="text" value={email}
                placeholder="Digite seu Email"
                onChange={ e => setEmail(e.target.value) }
                />
                <input
                className="campo"
                type="TextInput" value={telefone}
                placeholder="Digite seu Telefone"
                onChange={ e => setTelefone(e.target.value) }
                />
                <input
                className="campo1"
                type="text" value={duvida}
                placeholder="Digite seu questionamento"
                onChange={ e => setDuvida(e.target.value) }
                />
                <button
                className="botao"
                onClick={ () => setMensagem(`Enviado com sucesso `) }
                >Enviar</button>
                <p className="campo">{mensagem}</p>
            </div>
        </div>
    )
}
export default UseState