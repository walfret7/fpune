// import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PropsParcial02 = ({ route }) => {
  // Obtener los parámetros de la navegación
  const { nombre, estado } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {`Mi nombre es: ${nombre}, actualmente estoy ${estado ? 'ACTIVO' : 'INACTIVO'} en el 8vo semestre.`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default PropsParcial02;
