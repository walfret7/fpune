// src/primera-parcial/AsyncStorageParcial04.js
import React, { useState, useEffect } from 'react';
import { Text, TextInput, Button, View, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageParcial04 = () => {
  const [codigo, setCodigo] = useState('');
  const [materia, setMateria] = useState('');
  const [calificaciones, setCalificaciones] = useState('');
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    leerDatos();
  }, []);

  const crearDatos = async () => {
    const nuevoDato = { codigo, materia, calificaciones };
    const jsonData = JSON.stringify([nuevoDato, ...datos]);
    await AsyncStorage.setItem('datos', jsonData);
    leerDatos();
  };

  const leerDatos = async () => {
    const jsonValue = await AsyncStorage.getItem('datos');
    setDatos(jsonValue != null ? JSON.parse(jsonValue) : []);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Código"
        value={codigo}
        onChangeText={setCodigo}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Materia"
        value={materia}
        onChangeText={setMateria}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Calificaciones"
        value={calificaciones}
        onChangeText={setCalificaciones}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />
      <Button title="Crear" onPress={crearDatos} />
      <FlatList
        data={datos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginTop: 10 }}>
            <Text>Código: {item.codigo}</Text>
            <Text>Materia: {item.materia}</Text>
            <Text>Calificaciones: {item.calificaciones}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default AsyncStorageParcial04;
