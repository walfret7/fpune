import React from "react"
import { Image, Text, Pressable, ScrollView, StyleSheet, TextInput, View, Alert } from "react-native"

const BasicComponents = () => {
    return( 
        <ScrollView style={styles.ScrollView}>
            <Text>Ingresando varios componentes</Text>
            <Text>
                {'\n'}
                {'\n'}
            </Text>

            <View>
                <Text style={styles.text}>Hola Mundo</Text>
            </View>

            <View>
                <TextInput 
                    style={styles.input} 
                    placeholder="Ingresa tu nombre"
                    onChange={(text) => console.log(text)}
                />
            </View>

            <View>
                <Pressable onPress={() => Alert('Boton Presionado')}>
                    <Text>Boton de ejemplo</Text>
                </Pressable>
            </View>

            <View>
                <Image 
                source={require('../assets/politecnica.jpg')} 
                style={styles.image}
                />
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ScrollView: {
        flex: 1,  // Esto hará que el ScrollView ocupe toda la pantalla disponible
        padding: 5,  // Espaciado interno para el contenido del ScrollView
        backgroundColor: '#f0f0f0', // Color de fondo opcional
        marginHorizontal: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    image: {
        width:200,
        height:200,
        resizeMode: 'cover',
        marginBottom: 20,
    }

});


export default BasicComponents