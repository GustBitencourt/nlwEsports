import { useState, useEffect } from 'react';
import { View, Image, FlatList } from 'react-native';

import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';

import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';

import { GAMES } from '../../utils/games';


export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch('http://192.168.15.23:3333/games')
    .then(response => response.json())
    .then(data => setGames(data))
  }, [])
  return (
    <View style={styles.container}>
      <Image 
        source={logoImg} 
        style={styles.logo}     
      />

      <Heading 
        title="Encontre o seu duo"
        subtitle="Selecione o jogo que quer jogar..." 
      />

      <FlatList
        contentContainerStyle={styles.contentList}
        data={games}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard 
            data={item}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
      />

    </View>
  );
}