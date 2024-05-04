import { useState } from "react"
import styles from './index.module.css'

const senha = document.getElementById('senha')

export default function GeradorDeSenha() {
    const [ textoCopiado, setTextoCopiado ] = useState('Copiar')
    const [senhaGerada, setSenhaGerada ] = useState('')
    let senha = ''
    function handleCopiar() {
        setTextoCopiado("Copiado!")
        // falta add codigo para ctrl-c
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }

    function gerarSenha() {
        let char = '1234567890_)(*&¨%$#@!+/;.?:>qwerrtyuiopasdfghjklçzxcvbnm'
        let length = 15;
        for(let i =0; i < length; i++) {
            let randInt = getRandomInt(0, length + 1)
            let randomChar = char[randInt]
            senha += randomChar
        }
        setSenhaGerada(senha) 
    }
    return (
        <>
        <div className={styles.container}>
            <h1>Gerador de senhas</h1>
            <div className={styles.buttons}>
                <button onClick={gerarSenha}>Gerar senha</button>
                <button onClick={handleCopiar}> {textoCopiado} </button>
            </div>
                <p>{senhaGerada}</p>
        </div>
        </>
    )
}