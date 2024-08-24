import React from 'react';  
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';  
import backgroundImage from '../assets/init.jpg'; // Substitua pelo caminho correto da sua imagem  

const StartScreen = ({ onStart }) => {  
    return (  
        <ImageBackground  
            source={backgroundImage} // Use a imagem importada  
            style={styles.background}  
            resizeMode="cover"  
        >  
            <View style={styles.container}>  
                <TouchableOpacity onPress={onStart} style={styles.button}>  
                    <Text style={styles.buttonText}> Memorize ODS</Text>  
                </TouchableOpacity>  
            </View>  
        </ImageBackground>  
    );  
};  

const styles = StyleSheet.create({  
    background: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',  
    },  
    container: {  
        // Adicione aqui outras estilizações se necessário  
        alignItems: 'center',  
    },  
    button: {  
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fundo semitransparente para o botão  
        padding: 5,  
        borderRadius: 10,  
    },  
    buttonText: {  
        color: '#009688 ',  
        fontSize: 20,  
        fontFamily: 'Poppins_700Bold',  
    },  
});  

export default StartScreen;