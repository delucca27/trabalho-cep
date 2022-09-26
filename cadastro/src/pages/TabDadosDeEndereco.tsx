import { useState, useEffect, KeyboardEventHandler } from "react";
// import InputCEP from "../components/InputCEP";
import InputCidades from "../components/InputCidades";
import InputEstados from "../components/InputEstados";

export default function() {
    const [uf, setUf] = useState("")
    // const logradouro = useState("")
    // const rua = useState("")
    // const bairro = useState("")
    // const complemento = useState("")


    let cep: string
    let endereco = useState([])
    async function getEndereco(cep: string) {
        
        const getEndereco = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        endereco = await getEndereco.json()
        console.log(endereco);
        
        
        // bairro(endereco.bairro)
        // rua(endereco.rua)
        // localidade(endereco.localidade)
    }
    
    const sendInfo: KeyboardEventHandler<HTMLInputElement> = async e => {
        if (e.currentTarget.value.length >= 8) {
            getEndereco(e.currentTarget.value)    
        }
    }

    return <>
        <div className="content-holder">

            <header>
                <h1>Pilantra Finder</h1>
            </header>

            <div className="content">
                <h2>O melhor para agiotas profissionais</h2>
                <p>O PilantraFinder™ é a melhor e mais atual ferramenta para agiotas procurando seus devedores. Basta digitar o CEP do condenado e depois ir quebrar as pernas dele!</p>

                <center>
                    <h3>Digite o CEP do safado 👇</h3>
                    <input type="text" placeholder="CEP" onKeyDown={sendInfo}></input>
                    <p className="instrucao">(Pressione ENTER para pesquisar)</p>
                </center>

                <div className="resultado-container">
                <h2>Endereço dele</h2>
                <div className="resultados">
                {/* {endereco.map(endereco => (

                ))} */}
                    </div>
                </div>
            </div>
        </div>
    </>
}