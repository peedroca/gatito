import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import funcaoEstilosPadrao from './estilos';

export default function Botao({pequeno = false, invertido = false, titulo, estilos}){
    const estilosPadrao = funcaoEstilosPadrao(pequeno, invertido);
    
    return (
        <TouchableOpacity style={[estilosPadrao.botao]}>
            <Text style={estilosPadrao.valor}>{titulo}</Text>
        </TouchableOpacity>
    );
}