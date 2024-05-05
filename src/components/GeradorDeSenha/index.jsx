import { useState } from "react"
import styles from './index.module.css'

const senha = document.getElementById('senha')

export default function GeradorDeSenha() {
    const [ textoCopiado, setTextoCopiado ] = useState('Copiar')
    const [senhaGerada, setSenhaGerada ] = useState('')
    const [TextoGerarSenha, setTextoGerarSenha] = useState('Gerar senha')
    const [hidden, setHidden] = useState(true)

    let senha = ''

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }

    function gerarSenha() {
        let char = '1234567890_)(*&¨%$#@!+/;.?:>qwerrtyuiopasdfghjklçzxcvbnm'
        let letters = 'abcdefghijklmnopqrstuvwxyz'
        let numbers = '1234567890'
        let specials = '_)(*&¨%$#@!+/;.?:>'
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

    function handleHidden() {
        return setHidden(!hidden)
    }

    return (
        <>
        <div className={styles.container}>
            <h1>Gerador de senhas</h1>
            <div className={styles.buttons}>
                <button onClick={gerarSenha}>{TextoGerarSenha}</button>
                <button onClick={handleCopiar}> {textoCopiado} </button>
                <button onClick={handleHidden}>Opções</button>
            </div>
            <div className={`${styles.options} ${hidden && styles.hidden}`}>
                <p>Opções de Caracteres:</p>
                <div className={styles.inputs}><input type="checkbox" name="letras" id="letras" /> <label htmlFor="letras">Letras</label></div>
                <div className={styles.inputs}><input type="checkbox" name="numeros" id="numeros" /> <label htmlFor="numeros">Números</label></div>
                <div className={styles.inputs}><input type="checkbox" name="especiais" id="especiais" /> <label htmlFor="especiais">Caracteres Especiais</label></div>
            </div>
                <p>{senhaGerada}</p>
        </div>
        </>
    )
}