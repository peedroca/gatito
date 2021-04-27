import React from 'react';
import { FlatList } from 'react-native';
import Item from '../../componentes/Item';

import estilosCarrinho from '../../componentes/Item/estilosCarrinho';

import Status from '../../componentes/Status';

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "NÃO DE BANHO NO SEU GATO! Mas se precisar, nós damos.",
    quantidade: 1
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 89.9,
    descricao: "Uma dose de vacina V4, seu gato precisa de duas.",
    quantidade: 2
  },
  {
    id: 3,
    nome: "Vacina Antirrábica",
    preco: 99.9,
    descricao: "Uma dose de vacina Antirrábica, seu gato precisa de uma por ano.",
    quantidade: 1
  }
]

export default function Carrinho() {
  const totalCalculado = servicos.reduce((soma, {preco, quantidade}) => soma + preco * quantidade, 0);
  
  return (
    <>
      <Status total={totalCalculado} />
      <FlatList 
          data={servicos}
          renderItem={({item}) => <Item {... item} expansivel={false} estilos={estilosCarrinho} />}
          keyExtractor={({id}) => String(id)}
        />
    </>
  );
}