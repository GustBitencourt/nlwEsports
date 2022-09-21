import { View, Modal, ModalProps, Text, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'
import { CheckCircle } from 'phosphor-react-native';

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface Props extends ModalProps {
    discord: string;
    onClose: () => void;
}

export function ModalCreateAd({ discord, onClose, ...rest }:Props) {
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

                <TouchableOpacity style={styles.discordButton}>
                    <Text style={styles.discord}>
                        {discord}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
  );
}