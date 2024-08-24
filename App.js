import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import StartScreen from './components/Init/init';
import Home from './components/Home/home';  
import Main from './components/Main/main';  
import About from './components/About/about';
import Footer from './components/Footer/Footer';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

const App = () => {
    const [isStarted, setIsStarted] = useState(false);
    const [currentPage, setCurrentPage] = useState('Home');

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
    });

    const startApp = () => {
        setIsStarted(true);
    };

    const renderPage = () => {
        if (!fontsLoaded) {
            return null; // Retorna nulo enquanto as fontes estão carregando
        }

        if (!isStarted) {
            return <StartScreen onStart={startApp} />;
        }

        let PageComponent;

        switch (currentPage) {
            case 'Home':
                PageComponent = <Home />;
                break;
            case 'Main':
                PageComponent = <Main />;
                break;
            case 'About':
                PageComponent = <About />;
                break;
            default:
                PageComponent = <Home />;
        }

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.navBar}>
                    <TouchableOpacity onPress={() => setCurrentPage('Home')}>
                        <Text style={styles.navButton}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCurrentPage('Main')}>
                        <Text style={styles.navButton}>Jogar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCurrentPage('About')}>
                        <Text style={styles.navButton}>Sobre</Text>
                    </TouchableOpacity>
                </View>
                {PageComponent}
                <Footer />
            </SafeAreaView>
        );
    };

    return renderPage();
};

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    },  
    navBar: {  
        flexDirection: 'row',  
        justifyContent: 'space-around',  
        backgroundColor: '#009688',  
        paddingTop: 60,  
        paddingBottom: 20,
    },
    navButton: {
        color: '#ffffff',
        fontSize: 18,
        fontFamily: 'Poppins_700Bold', // Usando a fonte Poppins Bold
    },
}); 

export default App;
