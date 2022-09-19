import { SafeAreaView} from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native'

import { Background } from '../../components/Background';

import { GameParams } from '../../@types/navigation';

import { styles } from './styles';

export function GameAds() {
    const route = useRoute();
    const game = route.params as GameParams;


  return (
    <SafeAreaView style={styles.container}>
        <Background>

        </Background>
    </SafeAreaView>
  );
}