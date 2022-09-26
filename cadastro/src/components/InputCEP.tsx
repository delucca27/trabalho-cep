import { KeyboardEventHandler } from "react"

export default function() {
   let cep: string
   async function getEndereco(cep: string) {
      const getEndereco = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      var endereco = await getEndereco.json()
   }

   const sendInfo: KeyboardEventHandler<HTMLInputElement> = async e => {
      getEndereco(e.currentTarget.value)
   }

   return <>
         <input type="text" placeholder="CEP" onKeyUp={sendInfo}></input>
   </>
}
