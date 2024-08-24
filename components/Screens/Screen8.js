import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MemoryCard from './MemoryCard';

const imgs = [
  { id: 1, img: require('../assets/ods8/DIREITOS.png') },
  { id: 2, img: require('../assets/ods8/JUSTA.jpg') },
  { id: 3, img: require('../assets/ods8/PRODUTIVIDADE.jpeg') },
  { id: 4, img: require('../assets/ods8/REMUNERACAO.jpeg') },
  { id: 5, img: require('../assets/ods8/I8.jfif') },
  { id: 6, img: require('../assets/ods8/CORINGA.jpeg') }
  
];

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [lockCards, setLockCards] = useState(false);

  useEffect(() => {
    const duplicatedCards = [...imgs, ...imgs].sort(() => 0.5 - Math.random());
    setCards(duplicatedCards.map(card => ({ ...card, isFlipped: false, isMatched: false })));
  }, []);

  const handleCardPress = (cardIndex) => {
    if (lockCards) return;

    const newCards = [...cards];
    newCards[cardIndex].isFlipped = true;
    setCards(newCards);

    if (!firstCard) {
      setFirstCard({ card: newCards[cardIndex], index: cardIndex });
      return;
    }

    setSecondCard({ card: newCards[cardIndex], index: cardIndex });
    checkForMatch(newCards, cardIndex);
  };

  const checkForMatch = (newCards, cardIndex) => {
    const isMatch = firstCard.card.id === newCards[cardIndex].id;

    if (isMatch) {
      newCards[firstCard.index].isMatched = true;
      newCards[cardIndex].isMatched = true;
      resetCards();
    } else {
      setLockCards(true);
      setTimeout(() => {
        newCards[firstCard.index].isFlipped = false;
        newCards[cardIndex].isFlipped = false;
        setCards(newCards);
        resetCards();
      }, 1000);
    }
  };

  const resetCards = () => {
    setFirstCard(null);
    setSecondCard(null);
    setLockCards(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Memória ODS</Text>
      <View style={styles.board}>
        {cards.map((card, index) => (
          <MemoryCard
            key={index}
            card={card}
            onPress={() => handleCardPress(index)}
            isFlipped={card.isFlipped}
            isMatched={card.isMatched}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#722f37'
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 400,
  },
});

export default MemoryGame;
