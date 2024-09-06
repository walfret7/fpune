// src/primera-parcial/AxiosParcial03.js
import React, { useState, useEffect } from 'react';
import { FlatList, TextInput, View } from 'react-native';
import { ListItem } from '@rneui/themed';
import axios from 'axios';

const AxiosParcial03 = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  const filteredData = data.filter(item => item.email.includes(search));

  return (
    <View>
      <TextInput
        placeholder="Buscar por correo"
        value={search}
        onChangeText={setSearch}
        style={{ borderWidth: 1, padding: 8, margin: 10 }}
      />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{item.email}</ListItem.Title>
              <ListItem.Subtitle>{item.body}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        )}
      />
    </View>
  );
};

export default AxiosParcial03;
