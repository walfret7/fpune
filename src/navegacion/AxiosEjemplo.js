import { Button, ListItem, Overlay, SearchBar, Text } from '@rneui/themed';
import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native';

const AxiosEjemplo = () => {
 const [data, setData] = useState([]);
 const [search, setSearch] = useState('');                  //ESTE Y EL DE ABAJO SON DE LA BARRA DE BUSQUEDA
 const [filteredData, setFilteredData] = useState([]);      
 const [selectedItem, setSelectedItem] = useState(null);    //ESTE Y EL DE ABAJO SON DE LA VENTANA EMERGENTE DE CUANDO DAS CLICK A UNA DE LAS OPCIONES
 const [visible, setVisible] = useState(false);

  useEffect(() => {
      Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setData(response.data);
            setFilteredData(response.data);
        })
        .catch(error => console.error(error));
    }, []);

    //ESTE CONST ES PARA LA BARRA DE BUSQUEDA
  const updateSearch = (search) => {
    setSearch(search);
    setFilteredData(
      data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    );
  };

  const toggleOverlay = (item) => {
    setSelectedItem(item);
    setVisible(!visible);
  };

  //Dentro del VIEW, el SearchBar para la barra de busqueda, el FlatList para que aparezcan los elementos en una lista y Overlay para ventana emergente
  return (
    <View>
        <SearchBar
          round
          placeholder="Buscar..."
          onChangeText={updateSearch}
          value={search}
        />
        <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
            <ListItem bottomDivider onPress={() => toggleOverlay(item)}>
            <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
            </ListItem.Content>
            </ListItem>
        )}
        />
        {selectedItem && (
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay} 
                        style={{ width: 300, height: 250, padding: 10 }}>
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{selectedItem.name}</Text>
            <Text>Email: {selectedItem.email}</Text>
            <Text>Phone: {selectedItem.phone}</Text>
            <Button title="Cerrar" onPress={toggleOverlay} />
          </View>
        </Overlay>
      )}
    </View>
  )
}
export default AxiosEjemplo
// import React, {useState, useEffect} from "react";
// import Axios from "axios";
// import { ListItem } from "@rneui/themed";
// import { FlatList, View } from "react-native";

// const AxiosEjemplo = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         Axios.get('https://jsonplaceholder.typicode.com/users')
//           .then(response => setData(response.data))
//           .catch(error => console.error(error));
//     }, []);

//     return(
//         <View>
//             <FlatList
//                 data={data}
//                 keyExtractor={item => item.id.toString()}
//                 renderItem={({item}) => (
//                     <ListItem bottomDivider>
//                         <ListItem.Content>
//                             <ListItem.Title>{item.email}</ListItem.Title>
//                             <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
//                         </ListItem.Content>
//                     </ListItem>
//                 )}
//             />
//         </View>
//     )

// }

// export default AxiosEjemplo
