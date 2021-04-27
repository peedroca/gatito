import React from 'react';
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import estilosGlobais from '../../estilos';

export default function TelaPadrao({children}){
    return (
    <SafeAreaView style={estilosGlobais.preencher}>
      <StatusBar />
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={estilosGlobais.preencher}
        >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
    );
}