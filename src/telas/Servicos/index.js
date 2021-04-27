import React from 'react';
import { FlatList } from 'react-native';

import estiloServico from '../../componentes/Item/estilosServicos';

import Item from '../../componentes/Item';

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "NÃO DE BANHO NO SEU GATO! Mas se precisar, nós damos."
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 89.9,
    descricao: "Uma dose de vacina V4, seu gato precisa de duas."
  },
  {
    id: 3,
    nome: "Vacina Antirrábica",
    preco: 99.9,
    descricao: "Uma dose de vacina Antirrábica, seu gato precisa de uma por ano."
  }
]

export default function Servicos() {
  return (
    <>
      <FlatList 
          data={servicos}
          renderItem={({item}) => <Item {... item} expansivel={true} estilos={estiloServico} />}
          keyExtractor={({id}) => String(id)}
        />
    </>
  );
}