import React, { useState } from 'react';
import { Text, View } from 'react-native';

import estilos from './estilos';

import CampoInteiro from '../../../componentes/CampoInteiro';
import Botao from '../../../componentes/Botao'

export default function Item({nome, preco, descricao, quantidade: quantidadeInicial}) {
  const [quantidade, setQuantidade] = useState(quantidadeInicial);
  const [precoTotal, setPrecoTotal] = useState(preco * quantidadeInicial);

  const atualizaPreco = (quantidade) =>
  {
    setQuantidade(quantidade);
    setPrecoTotal(preco * quantidade);
  }

  return (
    <>
    <View style={estilos.informacao}>
      <Text style={estilos.nome}>{nome}</Text>
      <Text style={estilos.preco}>{
        Intl.NumberFormat("pt-BR", {
                style: 'currency', currency: 'BRL'
              }).format(preco)
        }
      </Text>
      <Text style={estilos.descricao}>{descricao}</Text>
    </View>
    <View style={estilos.carrinho}>
      <View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Quantidade</Text>
            <CampoInteiro valor={quantidade} acao={atualizaPreco} estilos={estilos.quantidade}/>
          </View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Preço:</Text>
            <Text style={estilos.preco}>{
              Intl.NumberFormat("pt-BR", {
                style: 'currency', currency: 'BRL'
              }).format(precoTotal)
            }</Text>
          </View>
      </View>
      <Botao titulo='Adicionar ao carrinho' />
    </View>
    <View style={estilos.divisor} />
    </>
  );
}