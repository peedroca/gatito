import React from 'react';
import { View, Text, TextInput } from 'react-native';

import Botao from '../Botao';
import estilos from './estilos';

export default function Status({ total }){
    return (
        <>
        <View style={estilos.conteudo}>
            <View>
                <Text style={estilos.descricao}>Total do carrinho:</Text>
                <Text style={estilos.valor}>
                    {
                        Intl.NumberFormat("pt-BR", {
                            style: 'currency', currency: 'BRL'
                        }).format(total)
                    }
                </Text>
            </View>
            <Botao titulo='Concluir Pedido' invertido={true} />
        </View>
        </>
    );
}