import { View, Image, FlatList } from 'react-native';

import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';

import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';

import { GAMES } from '../../utils/games';


export function Home() {
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
        data={GAMES}
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