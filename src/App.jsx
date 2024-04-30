import { useState } from 'react'
import GeradorDeSenha from './components/GeradorDeSenha'
import './assets/styles/globals.css'
import styles from './App.module.css'

function App() {
 
  return (
    <div className={styles.container}>
      <GeradorDeSenha /> 
    </div>
  )
}

export default App
