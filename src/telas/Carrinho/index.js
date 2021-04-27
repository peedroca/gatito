import React from 'react';
import { FlatList } from 'react-native';
import Item from './Item';
import TelaPadrao from '../../componentes/TelaPadrao';
import Status from '../../componentes/Status';

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "Banho no seu gato.",
    quantidade: 1
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 89.9,
    descricao: "Vacina V4 no seu gato.",
    quantidade: 2
  },
  {
    id: 3,
    nome: "Vacina Antirrábica",
    preco: 99.9,
    descricao: "Vacina Antirrábica no seu gato.",
    quantidade: 1
  }
]

export default function Carrinho() {
  const totalCalculado = servicos.reduce((soma, {preco, quantidade}) => soma + preco * quantidade, 0);
  
  return (
    <TelaPadrao>
      <Status total={totalCalculado} />
      <FlatList 
          data={servicos}
          renderItem={({item}) => <Item {... item} />}
          keyExtractor={({id}) => String(id)}
        />
    </TelaPadrao>
  );
}