import { useState, useEffect } from 'react';
import { FlatList, Image, TouchableOpacity, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';

import { Heading } from '../../components/Heading';
import { AdsCard, AdsCardProps } from '../../components/AdsCard';
import { ModalAd } from '../../components/ModalAd';

import { Entypo } from "@expo/vector-icons"
import { Background } from '../../components/Background';
import logoImg from '../../assets/logo-nlw-esports.png'

import { GameParams } from '../../@types/navigation';

import { styles } from './styles';
import { THEME } from '../../theme';

export function GameAdsScreen() {
    const [ads, setAds] = useState<AdsCardProps[]>([]);
    //usada pra pegar o discord e abrir o modal de informação do Ad
    const [getDiscord, setGetDiscord] = useState('');

    const navigation = useNavigation()
    const route = useRoute();
    const game = route.params as GameParams;

    function handleGoBack() {
        navigation.goBack();
    }

    async function getDiscordUser(adsId: string) {
        fetch(`http://192.168.15.23:3333/ads/${adsId}/discord`)
            .then(response => response.json())
            .then(data => setGetDiscord(data.discord))
        
    }

    useEffect(() => {
        fetch(`http://192.168.15.23:3333/games/${game.id}/ads`)
            .then(response => response.json())
            .then(data => setAds(data))
    }, [])

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo
                            name="chevron-thin-left"
                            color={THEME.COLORS.CAPTION_300}
                            size={20}
                        />
                    </TouchableOpacity>

                    <Image
                        source={logoImg}
                        style={styles.logo}
                    />

                    <View style={styles.right} />
                </View>

                <Image
                    source={{ uri: game.bannerUrl }}
                    style={styles.cover}
                    resizeMode="contain"
                />

                <Heading
                    title={game.title}
                    subtitle="Conecte-se e comece a jogar"
                />

                <FlatList
                    data={ads}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <AdsCard 
                            data={item} 
                            onConnect={() => getDiscordUser(item.id)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={[ads.length > 0 ? styles.contentList : styles.emptyListContent]}
                    style={styles.containerList}
                    ListEmptyComponent={() => (
                        <Text style={styles.emptyListText}>
                            Não há anúncios para esse jogo
                        </Text>
                    )}
                />

                <ModalAd 
                    visible={getDiscord.length > 0}
                    discord={getDiscord}
                    onClose={() => setGetDiscord('')}
                />
            </SafeAreaView>
        </Background>
    );
}