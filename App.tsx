
import React from 'react';

import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import BasicComponents from './src/components/BasicComponents';
import TextComponents from './src/components/TextComponents';
import TextInputComponents from "./src/components/TextInputComponents";
import ImageComponents from './src/components/ImageComponents';
import AvatarBasic from './src/react-native-elements/AvatarBasic';

import PropsEjemplo from './src/navegacion/PropsEjemplo';
import AxiosEjemplo from './src/navegacion/AxiosEjemplo';
import AsyncStorageEjemplo from './src/navegacion/AsyncStorageEjemplo';

//Navegacion
import Home from './src/react-native-elements/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//PARCIAL
import ComponenteParcial01 from './src/primera-parcial/ComponentesParcial01';
import PropsParcial02 from './src/primera-parcial/PropsParcial02';
import AxiosParcial03 from './src/primera-parcial/AxiosParcial03';
import AsyncStorageParcial04 from './src/primera-parcial/AsyncStorageParcial04';

//Esta constante es necesaria para la navegacion
const Stack = createNativeStackNavigator();

const App = () => {

  return(
   // <ScrollView>
      //<BasicComponents></BasicComponents>

      <NavigationContainer>
        <Stack.Navigator initialRouteName='ComponenteParcial01'>

        <Stack.Screen name="ComponenteParcial01" component={ComponenteParcial01} />
        <Stack.Screen name="PropsParcial02" component={PropsParcial02} />
        <Stack.Screen name="AxiosParcial03" component={AxiosParcial03} />
        <Stack.Screen name="AsyncStorageParcial04" component={AsyncStorageParcial04} />


            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Basic' component={BasicComponents} />
            <Stack.Screen name='Text' component={TextComponents} />
            <Stack.Screen name='Input' component={TextInputComponents} />
            <Stack.Screen name='Ava' component={AvatarBasic} />
            <Stack.Screen name='Props' component={PropsEjemplo} />
            <Stack.Screen name='Axios' component={AxiosEjemplo} />
            <Stack.Screen name='Async' component={AsyncStorageEjemplo} />
        </Stack.Navigator>
      </NavigationContainer>
   // </ScrollView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
