import { Text, TouchableOpacity, View } from 'react-native';
import { AdsInfo } from '../AdsInfo';

import { GameController } from 'phosphor-react-native';
import { styles } from './styles';
import { THEME } from '../../theme';

export interface AdsCardProps {
    hourEnd: string;
    hourStart: string;
    id: string;
    name: string;
    useVoiceChannel: boolean;
    weekDays: string[];
    yearsPlaying: number;
}

interface Props {
    data: AdsCardProps;
    onConnect: () => void;
}

export function AdsCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
        <AdsInfo 
            label='Nome'
            value={data.name}
        />
        <AdsInfo 
            label='Tempo Jogando'
            value={`${data.yearsPlaying} ano(s)`}
        />
        <AdsInfo 
            label='Disponibilidade'
            value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
        />
        <AdsInfo 
            label='Chamada de Áudio?'
            value={data.useVoiceChannel ? 'Sim' : "Não"}
            colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
        />

        <TouchableOpacity
            style={styles.button}
            onPress={onConnect}
        >
            <GameController 
                color={THEME.COLORS.TEXT}
                size={20}
            />
            <Text style={styles.buttonTitle}>
                Conectar
            </Text>
        </TouchableOpacity>

    </View>
  );
}