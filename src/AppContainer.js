import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AppContainer = (props) => {

    return(
    <View style={estilos.container}>
         {props.children}
    </View>);

}

export default AppContainer;


const estilos = StyleSheet.create({

    container: {

        backgroundColor:"#dedede",
        padding: 5,
        flex:1
    }


});