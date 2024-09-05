import React from "react";
import { Text, ScrollView } from "react-native";
import { ListItem } from "@rneui/base";

const Home = ({navigation}) => {

    const profesionales = [
        {
            name: 'Walter',
            occupation: 'Stripper',
            age: 26
        },
        {
            name: 'Alex',
            occupation: 'Apex ProPlayer',
            age: 18
        }
    ]

    return (
        <ScrollView>
            <ListItem bottomDivider onPress={() => navigation.navigate('Basic')}>
                <ListItem.Content onP>
                    <ListItem.Title>Pantalla Basica</ListItem.Title>
                </ListItem.Content>
            </ListItem>

            <ListItem bottomDivider onPress={() => navigation.navigate('Text')}>
                <ListItem.Content onP>
                    <ListItem.Title>Ejemplo de Texto</ListItem.Title>
                </ListItem.Content>
            </ListItem>

            <ListItem bottomDivider onPress={() => navigation.navigate('Input')}>
                <ListItem.Content onP>
                    <ListItem.Title>Ejemplo de input</ListItem.Title>
                </ListItem.Content>
            </ListItem>

            <ListItem bottomDivider onPress={() => navigation.navigate('Ava')}>
                <ListItem.Content onP>
                    <ListItem.Title>Avatar</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            
            <ListItem bottomDivider onPress={() => navigation.navigate('Props', {titulo: 'Lista de Alumnos', semestre: '8vo', estado: true, profesionales })}>
                <ListItem.Content onP>
                    <ListItem.Title>Props</ListItem.Title>
                </ListItem.Content>
            </ListItem>

            <ListItem bottomDivider onPress={() => navigation.navigate('Axios')}>
                <ListItem.Content onP>
                    <ListItem.Title>Axios</ListItem.Title>
                </ListItem.Content>
            </ListItem>

            <ListItem bottomDivider onPress={() => navigation.navigate('Async')}>
                <ListItem.Content >
                    <ListItem.Title>Async Storage</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            
        </ScrollView>
    )
}

export default Home