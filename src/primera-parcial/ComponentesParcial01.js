import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const ComponenteParcial01 = ({ navigation }) => {
  const [nombre, setNombre] = useState(""); // Estado para almacenar el nombre ingresado

  const items = [
    { id: '1', name: 'PropsParcial02', route: 'PropsParcial02' },
    { id: '2', name: 'AxiosParcial03', route: 'AxiosParcial03' },
    { id: '3', name: 'AsyncStorageParcial04', route: 'AsyncStorageParcial04' }
  ];

  const handleNavigate = (route) => {
    if (route === 'PropsParcial02') {
      // Pasar el nombre ingresado como prop a PropsParcial02
      navigation.navigate(route, { nombre: nombre, estado: false });
    } else {
      navigation.navigate(route);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Examen Primera Parcial</Text>
      <Image
        style={styles.logo}
        source={{ uri: 'https://picsum.photos/100' }} // Reemplaza con tu propia imagen
      />
      <TextInput
        style={styles.input}
        placeholder="Ingresar nombre"
        value={nombre}
        onChangeText={setNombre} // Actualizar el estado del nombre cuando se ingresa texto
      />
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleNavigate(item.route)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  item: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#ddd',
    marginVertical: 5,
    textAlign: 'center',
  }
});

export default ComponenteParcial01;
