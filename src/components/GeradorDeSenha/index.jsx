import { useState } from "react"
import styles from './index.module.css'

const senha = document.getElementById('senha')

export default function GeradorDeSenha() {
    const [ textoCopiado, setTextoCopiado ] = useState('Copiar')
    const [senhaGerada, setSenhaGerada ] = useState('')
    const [TextoGerarSenha, setTextoGerarSenha] = useState('Gerar senha')
    const [hidden, setHidden] = useState(true)
    const [errors, setErrors] = useState('')
    let senha = ''
    let char = ''

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }

    function gerarSenha() {
        setErrors('')
        let letters = 'abcdefghijklmnopqrstuvwxyz'
        let numbers = '1234567890'
        let specials = '_)(*&¨%$#@!+/;.?:>'
        let length = 15;

        if(letras.checked) {
            char += letters
        }

        if(numeros.checked) {
            char += numbers
        }

        if (especiais.checked) {
            char += specials
        }

        if (!especiais.checked && !numeros.checked && !letras.checked) {
            return setErrors('É necessário ao menos um tipo de caracter.')
        }

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
                <div className={styles.inputs}><input type="checkbox" name="letras" id="letras" defaultChecked /> <label htmlFor="letras" >Letras</label></div>
                <div className={styles.inputs}><input type="checkbox" name="numeros" id="numeros" defaultChecked/> <label htmlFor="numeros">Números</label></div>
                <div className={styles.inputs}><input type="checkbox" name="especiais" id="especiais" defaultChecked /> <label htmlFor="especiais">Caracteres Especiais</label></div>
            </div>
                <p>{senhaGerada}</p>
                <p id={styles.errors}>{errors}</p>
        </div>
        </>
    )
}