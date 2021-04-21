import React from 'react'
import { SafeAreaView, StatusBar, Text, FlatList } from 'react-native'
import Item from './Item'

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "Banho no seu gato."
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 89.9,
    descricao: "Vacina V4 no seu gato."
  },
  {
    id: 3,
    nome: "Vacina Antirrábica",
    preco: 99.9,
    descricao: "Vacina Antirrábica no seu gato."
  }
]

export default function Servicos() {
  return (
    <SafeAreaView>
      <StatusBar />
      <FlatList 
        data={servicos}
        renderItem={({item}) => <Item {... item} />}
        keyExtractor={({id}) => String(id)}
      />
    </SafeAreaView>
  );
}