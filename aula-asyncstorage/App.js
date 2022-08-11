import React, {useState} from 'react'
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

import { insertString, allKeys, read } from './DB.js'

export default function App() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  return (
    <SafeAreaView>
      <TextInput style={estilos.input} placeholder="Digite seu nome" onChangeText={(text) => setNome(text)}/>
      <TextInput style={estilos.input} placeholder="Digite seu e-mail" onChangeText={(text) => setEmail(text)}/>
      <Button onPress={ () => {
        try {
          insertString(email, nome)
          alert('Dados salvos com sucesso')
        } catch ( e ) {
          alert(e)
        }
      } } title="Salvar"/>
      <Button onPress={ () => {
        allKeys((error, keys) => {
          keys.forEach((key, index) => {
            read(key, (error2, value) => {
              alert(key + ": " + value)
          })
        })
      })
    } } title="Listar"/>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  input : {
    borderColor: '#CCC',
    borderRadius: 5,
    borderWidth: 1,
    height: 30,
    padding: 8,
    marginBottom: 8,
    marginHorizontal: 8,
  }
})