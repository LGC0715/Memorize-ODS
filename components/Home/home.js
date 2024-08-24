import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';

// Importe suas imagens locais
import slide1 from '../assets/slide/slide1.png'; // Ajuste o caminho conforme necessário
import slide2 from '../assets/slide/slide2.png'; // Ajuste o caminho conforme necessário
import slide3 from '../assets/slide/slide3.png'; // Ajuste o caminho conforme necessário

const Home = ({ onNavigate }) => {
    // Array de imagens do carrossel
    const carouselItems = [
        { id: '1', image: slide1 },
        { id: '2', image: slide2 },
        { id: '3', image: slide3 },
    ];

    return (
        <ScrollView style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {carouselItems.map(item => (
                    <View key={item.id} style={styles.imageContainer}>
                        <Image source={item.image} style={styles.image} />
                    </View>
                ))}
            </ScrollView>

            {/* Seção 1: Descrição Inicial */}
            <View style={styles.section}>
                <Text style={styles.description}>
                    Prepare-se para uma emocionante jornada de aprendizado e diversão! Neste aplicativo,
                    você encontrará 17 jogos da memória inspirados nos Objetivos de Desenvolvimento Sustentável da ONU,
                    cada um projetado para ajudá-lo a entender melhor as questões importantes que moldam nosso mundo.
                </Text>
            </View>

            {/* Seção 2: Temas a Explorar */}
            <View style={styles.section}>
                <Text style={styles.subTitle}>Explore temas como:</Text>
                <Text style={styles.bulletPoint}>- Erradicação da Pobreza</Text>
                <Text style={styles.bulletPoint}>- Educação de Qualidade</Text>
                <Text style={styles.bulletPoint}>- Igualdade de Gênero</Text>
                <Text style={styles.bulletPoint}>- Água Potável e Saneamento</Text>
                <Text style={styles.bulletPoint}>- Ação Contra a Mudança Global do Clima</Text>
                <Text style={styles.description}>E muito mais!</Text>
            </View>

            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20, // Espaçamento para o final do conteúdo
    },
    imageContainer: {
        width: Dimensions.get('window').width, // Ajuste a largura conforme necessário
        height: 200, // Defina a altura do seu carrossel como quiser
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // Ajuste o modo de redimensionamento conforme necessário
    },
    section: {
        marginVertical: 10, // Adicionando espaçamento entre as seções
        paddingHorizontal: 0, // Adicionando padding lateral para a seção
    },
    description: {
        fontSize: 16,
        textAlign: 'justify',
        margin: 5,
        fontFamily: 'Poppins_400Regular',
    },
    subTitle: {
        fontSize: 18,
        marginBottom: 10,
        fontFamily: 'Poppins_700Bold',
    },
    bulletPoint: {
        fontSize: 16,
        textAlign: 'left',
        marginLeft: 10,
        marginBottom: 5, // Adicionando espaçamento entre os itens da lista
        fontFamily: 'Poppins_400Regular',
    },

});

export default Home;
