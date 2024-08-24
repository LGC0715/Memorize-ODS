import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';

const MemoryCard = ({ card, onPress, isFlipped, isMatched }) => {
  return (
    <TouchableOpacity 
      style={[styles.card, isFlipped || isMatched ? styles.flipped : null]} 
      onPress={onPress} 
      disabled={isFlipped || isMatched}
    >
      <View>
        <Image
          style={styles.face}
          source={isFlipped || isMatched ? card.img : require('../assets/ods.jpg')}
          // Substitua './path-to-backside-image.png' pelo caminho correto para a imagem de fundo do cartão
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 100,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
    borderRadius: 8,
  },
  flipped: {
    backgroundColor: '#fff',
  },
  face: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
});

export default MemoryCard;
