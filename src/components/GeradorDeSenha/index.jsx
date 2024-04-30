import { useState } from "react"
import styles from './index.module.css'

export default function GeradorDeSenha() {
    const [ textoCopiado, setTextoCopiado ] = useState('Copiar')
    const [textoGerado, setTextoGerado ] = useState('Gerar')

    function handleCopiar() {
        setTextoCopiado("Copiado!")
        // falta add codigo para ctrl-c
    }
    return (
        <>
        <h1>Gerador de senhas</h1>
        <div className={styles.buttons}>
            <button>{textoGerado}</button>
            <button onClick={handleCopiar}> {textoCopiado} </button>
        </div>
        </>
    )
}