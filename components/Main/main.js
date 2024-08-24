import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Card } from 'react-native-paper';
import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';
import Screen3 from '../Screens/Screen3';
import Screen4 from '../Screens/Screen4';
import Screen5 from '../Screens/Screen5';
import Screen6 from '../Screens/Screen6';
import Screen7 from '../Screens/Screen7';
import Screen8 from '../Screens/Screen8';
import Screen9 from '../Screens/Screen9';
import Screen10 from '../Screens/Screen10';
import Screen11 from '../Screens/Screen11';
import Screen12 from '../Screens/Screen12';
import Screen13 from '../Screens/Screen13'; // Descomentado se necessário
import Screen14 from '../Screens/Screen14'; // Descomentado se necessário
import Screen15 from '../Screens/Screen15'; // Descomentado se necessário
import Screen16 from '../Screens/Screen16'; // Descomentado se necessário
import Screen17 from '../Screens/Screen17'; // Descomentado se necessário

const Main = () => {
    const [currentScreen, setCurrentScreen] = useState('main'); // Estado que controla a tela atual

    const cards = [
        { id: 1, image: require('../assets/ods1/ods1.png'), title: 'ODS 1', description: 'Jogo da memória temático: ODS 1', screen: 'Screen1' },
        { id: 2, image: require('../assets/ods2/ods2.jpg'), title: 'ODS 2', description: 'Jogo da memória temático: ODS 2', screen: 'Screen2' },
        { id: 3, image: require('../assets/ods3/ods3.jfif'), title: 'ODS 3', description: 'Jogo da memória temático: ODS 3', screen: 'Screen3' },
        { id: 4, image: require('../assets/ods4/ods4.png'), title: 'ODS 4', description: 'Jogo da memória temático: ODS 4', screen: 'Screen4' },
        { id: 5, image: require('../assets/ods5/ods5.jfif'), title: 'ODS 5', description: 'Jogo da memória temático: ODS 5', screen: 'Screen5' },
        { id: 6, image: require('../assets/ods6/ods6.jfif'), title: 'ODS 6', description: 'Jogo da memória temático: ODS 6', screen: 'Screen6' },
        { id: 7, image: require('../assets/ods7/ods7.png'), title: 'ODS 7', description: 'Jogo da memória temático: ODS 7', screen: 'Screen7' },
        { id: 8, image: require('../assets/ods8/ods8.jfif'), title: 'ODS 8', description: 'Jogo da memória temático: ODS 8', screen: 'Screen8' },
        { id: 9, image: require('../assets/ods9/ods9.png'), title: 'ODS 9', description: 'Jogo da memória temático: ODS 9', screen: 'Screen9' },
        { id: 10, image: require('../assets/ods10/ods10.png'), title: 'ODS 10', description: 'Jogo da memória temático: ODS 10', screen: 'Screen10' },
        { id: 11, image: require('../assets/ods11/ods11.png'), title: 'ODS 11', description: 'Jogo da memória temático: ODS 11', screen: 'Screen11' },
        { id: 12, image: require('../assets/ods12/ods12.png'), title: 'ODS 12', description: 'Jogo da memória temático: ODS 12', screen: 'Screen12' },
        { id: 13, image: require('../assets/ods13/ODS13.jpeg'), title: 'ODS 13', description: 'Jogo da memória temático: ODS 13', screen: 'Screen13' },
        { id: 14, image: require('../assets/ods14/ODS14.jpeg'), title: 'ODS 14', description: 'Jogo da memória temático: ODS 14', screen: 'Screen14' },
        { id: 15, image: require('../assets/ods15/ODS15.jpeg'), title: 'ODS 15', description: 'Jogo da memória temático: ODS 15', screen: 'Screen15' },
        { id: 16, image: require('../assets/ods16/ODS16.jpeg'), title: 'ODS 16', description: 'Jogo da memória temático: ODS 16', screen: 'Screen16' },
        { id: 17, image: require('../assets/ods17/ODS17.webp'), title: 'ODS 17', description: 'Jogo da memória temático: ODS 17', screen: 'Screen17' },
        // Adicione mais cards conforme necessário
    ];

    const openScreen = (screen) => {
        setCurrentScreen(screen); // Atualiza a tela atual com a tela definida no card
    };

    const renderScreen = () => {
        switch (currentScreen) {
            case 'main':
                return (
                    <ScrollView>
                        {cards.map((card) => (
                            <TouchableOpacity key={card.id} onPress={() => openScreen(card.screen)}>
                                <Card style={styles.card}>
                                    <View style={styles.cardContent}>
                                        <Card.Cover source={card.image} style={styles.cardImage} />
                                        <View style={styles.cardText}>
                                            <Text style={styles.title}>{card.title}</Text>
                                            <Text style= {styles.cardText}>{card.description}</Text>
                                        </View>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                );
            case 'Screen1':
                return <Screen1 />;
            case 'Screen2':
                return <Screen2 />;
            case 'Screen3':
                return <Screen3 />;
            case 'Screen4':
                return <Screen4 />;
            case 'Screen5':
                return <Screen5 />;
            case 'Screen6':
                return <Screen6 />;
            case 'Screen7':
                return <Screen7 />;
            case 'Screen8':
                return <Screen8 />;
            case 'Screen9':
                return <Screen9 />;
            case 'Screen10':
                return <Screen10 />;
            case 'Screen11':
                return <Screen11 />;
            case 'Screen12':
                return <Screen12 />;
            case 'Screen13':
                return <Screen13 />;
            case 'Screen14':
                return <Screen14 />;
            case 'Screen15':
                return <Screen15 />;
            case 'Screen16':
                return <Screen16 />;
            case 'Screen17':
                return <Screen17 />;
            // Adicione mais casos conforme necessário
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {renderScreen()}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10, 
        alignItems: 'center',
        margin: 10,
        
    },
    card: {
        borderColor: '#ddd',
        borderWidth: 3,
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        minWidth: '100%',
        backgroundColor: 'white',
        
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
      
    },
    cardImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    cardText: {
        flex: 1,
        marginLeft: 10,
        fontFamily: 'Poppins_400Regular'
    },
    
    title: {
        fontSize: 18,
        fontFamily: 'Poppins_700Bold'
    },
});

export default Main;


 
