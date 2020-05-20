import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppContainer from '../AppContainer';

export default class Tela1 extends React.Component
{
    constructor (props)
    {
        super(props);
    }


    render(){

        let saida = 
        <AppContainer>
             <Text style={estilos.texto}>Tela 1</Text>
        </AppContainer>
             

        return saida;
    }

}


const estilos = StyleSheet.create({

    fundo:{

        backgroundColor:"red",
    },
    texto:
    {
        color:"green"
    }
});
