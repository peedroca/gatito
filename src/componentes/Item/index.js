import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import CampoInteiro from '../CampoInteiro';
import Botao from '../Botao';

const Cabecalho = function cabecalho({nome, preco, descricao, estilos}) {
    return <>
    <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.preco}>{
          Intl.NumberFormat("pt-BR", {
                  style: 'currency', currency: 'BRL'
                }).format(preco)
          }
        </Text>
    <Text style={estilos.descricao}>{descricao}</Text>
    </>
};

const Detalhes = function detalhe({estilos, quantidade, atualizaPreco, precoTotal}) {
    return <View>
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
            }
            </Text>
        </View>
    </View>
}

export default function Item({nome, preco, descricao, quantidade: quantidadeInicial, expansivel, estilos}) {
    if (quantidadeInicial == undefined) {
        quantidadeInicial = 1;
    }
    
    const [quantidade, setQuantidade] = useState(quantidadeInicial);
    const [precoTotal, setPrecoTotal] = useState(preco * quantidadeInicial);
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
        {!expansivel && 
        <View style={estilos.informacao}>
            <Cabecalho nome={nome} preco={preco} descricao={descricao} estilos={estilos} />
        </View>
        }
        {expansivel && 
        <TouchableOpacity style={estilos.informacao} onPress={inverterExpandido}>
            <Cabecalho nome={nome} preco={preco} descricao={descricao} estilos={estilos} />
        </TouchableOpacity>
        }

        {expansivel && expandido &&
        <View style={estilos.carrinho}>
            <Detalhes estilos={estilos} quantidade={quantidade} atualizaPreco={atualizaPreco} precoTotal={precoTotal} />
            <Botao titulo='Adicionar ao carrinho' />
        </View>
        }

        {!expansivel &&
        <View style={estilos.carrinho}>
            <Detalhes estilos={estilos} quantidade={quantidade} atualizaPreco={atualizaPreco} precoTotal={precoTotal} />
            <Botao titulo='Remover do carrinho' />
        </View>
        }
        
        <View style={estilos.divisor} />
        </>
    );
}