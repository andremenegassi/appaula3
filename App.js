import React from 'react';
import 'react-native-gesture-handler';
import Menu from './src/Menu';

export default class App extends React.Component
{
    constructor(props)
    {
        super(props);
    }
 
    render() {

        let saida = <Menu />
  
        return(saida);
    }

}