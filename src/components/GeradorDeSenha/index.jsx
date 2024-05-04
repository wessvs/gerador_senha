import { useState } from "react"
import styles from './index.module.css'

const senha = document.getElementById('senha')

export default function GeradorDeSenha() {
    const [ textoCopiado, setTextoCopiado ] = useState('Copiar')
    const [senhaGerada, setSenhaGerada ] = useState('')
    const [TextoGerarSenha, setTextoGerarSenha] = useState('Gerar senha')

    let senha = ''

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }

    function gerarSenha() {
        let char = '1234567890_)(*&¨%$#@!+/;.?:>qwerrtyuiopasdfghjklçzxcvbnm'
        let length = 15;
        for(let i =0; i < length; i++) {
            let randInt = getRandomInt(0, char.length)
            let randomChar = char[randInt]
            senha += randomChar
        }
        setSenhaGerada(senha) 
        setTextoGerarSenha('Gerar nova senha')
        setTextoCopiado('Copiar')
    }

    function handleCopiar(e) {
        setTextoCopiado("Copiado!")
        e.preventDefault()
        navigator.clipboard.writeText(senhaGerada)
    }

    return (
        <>
        <div className={styles.container}>
            <h1>Gerador de senhas</h1>
            <div className={styles.buttons}>
                <button onClick={gerarSenha}>{TextoGerarSenha}</button>
                <button onClick={handleCopiar}> {textoCopiado} </button>
            </div>
                <p>{senhaGerada}</p>
        </div>
        </>
    )
}