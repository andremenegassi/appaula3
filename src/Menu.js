import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';


import Rotas from './Rotas';

const Drawer = createDrawerNavigator();

export default class Menu extends React.Component {

    constructor(props)
    {
        super(props);
    }

    render(){

        let saida =
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Rotas"
                    drawerContent={drawerConteudo} >
                    <Drawer.Screen name="Rotas" component={Rotas} />
                </Drawer.Navigator> 
            </NavigationContainer>

        return saida;

    }
}

const drawerConteudo = (props) => (

     <View style={menuEstilos.container}>
        <TouchableOpacity
            onPress={() => props.navigation.navigate("Tela1")}> 
            <Text style={menuEstilos.item}>111111</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
            onPress={() => props.navigation.navigate("Tela2")}> 
            <Text style={menuEstilos.item}>22222</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            onPress={() => props.navigation.navigate("Tela3")}> 
            <Text style={menuEstilos.item}>3333</Text>
        </TouchableOpacity>
    </View>

);

const menuEstilos = StyleSheet.create({

    container: {
        marginTop: 50
    },

    item: {
        margin: 10,
        marginLeft: 20
    }
});