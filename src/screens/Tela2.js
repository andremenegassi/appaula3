import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Tela2 extends React.Component
{
    constructor (props)
    {
        super(props);
    }


    render(){

        let saida = 
            <View style={[estilos.fundo, {color:"white"}]}>
                <Text style={estilos.texto}>Tela 1</Text>
            </View>

        return saida;
    }

}


const estilos = StyleSheet.create({

    fundo:{

        backgroundColor:"red",
    },
    texto:
    {
        color:"white"

    }
});
