import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import estilos from './estilos';

import CampoInteiro from '../../../componentes/CampoInteiro';
import Botao from '../../../componentes/Botao'

export default function Item({nome, preco, descricao}) {
  const [quantidade, setQuantidade] = useState(1);
  const [precoTotal, setPrecoTotal] = useState(preco);
  const [expandido, setExpandido] = useState(false);

  const atualizaPreco = (quantidade) =>
  {
    setQuantidade(quantidade);
    setPrecoTotal(preco * quantidade);
  }

  const inverterExpandido = () =>
  {
    setExpandido(!expandido);
    atualizaPreco(1);
  }

  return (
    <>
    <TouchableOpacity style={estilos.informacao} onPress={inverterExpandido}>
      <Text style={estilos.nome}>{nome}</Text>
      <Text style={estilos.preco}>{
        Intl.NumberFormat("pt-BR", {
                style: 'currency', currency: 'BRL'
              }).format(preco)
        }
      </Text>
      <Text style={estilos.descricao}>{descricao}</Text>
    </TouchableOpacity>
    {expandido && 
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
      <Botao titulo='Adicionar' />
    </View>
    }
    <View style={estilos.divisor} />
    </>
  );
}