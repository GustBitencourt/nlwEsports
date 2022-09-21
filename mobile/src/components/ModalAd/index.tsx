import { useState } from 'react';
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { MaterialIcons } from '@expo/vector-icons'
import { CheckCircle } from 'phosphor-react-native';

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface Props extends ModalProps {
    discord: string;
    onClose: () => void;
}

export function ModalAd({ discord, onClose, ...rest }:Props) {
    const [isCopping, setIsCopping] = useState(false)

    async function handleCopyDiscordUserClipBoard() {
        setIsCopping(true);
        await Clipboard.setStringAsync(discord)
        
        Alert.alert('Discord copiado!', 'Discord copiado para área de transferencia')
        setIsCopping(false);
        
    }
  return (
    <Modal
        animationType='fade'
        transparent
        statusBarTranslucent
        {...rest}
    >
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity
                    onPress={onClose}
                    style={styles.closeIcon}
                >
                    <MaterialIcons 
                        name="close"
                        size={20}
                        color={THEME.COLORS.CAPTION_500}
                    />
                </TouchableOpacity>

                <CheckCircle 
                    size={64} 
                    color={THEME.COLORS.SUCCESS} 
                    weight="bold"
                />

                <Heading 
                    title="Let's Play!"
                    subtitle='Escola seu duo'
                    style={{ alignItems: 'center' }}
                />

                <Text style={styles.label}>
                    Adicione seu discord
                </Text>

                <TouchableOpacity 
                    style={styles.discordButton}
                    onPress={handleCopyDiscordUserClipBoard}
                    disabled={isCopping}
                >
                    <Text style={styles.discord}>
                        {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
  );
}