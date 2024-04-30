import { useState } from "react"

export default function GeradorDeSenha() {
    const [ textoCopiado, setTextoCopiado ] = useState('Copiar')
    
    function handleCopiar() {
        alert("Você copiou!")
        setTextoCopiado("Copiado!")
    }
    return (
        <>
        <h1>Gerador de senhas</h1>
        <button>Gerar</button>
        <button onClick={handleCopiar}> {textoCopiado} </button>
        </>
    )
}