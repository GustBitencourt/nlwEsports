import { useState, useEffect } from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as AuthSession from 'expo-auth-session';

import { Heading } from '../../components/Heading';
import { Background } from '../../components/Background';

import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';
import { GameController } from 'phosphor-react-native';
import { THEME } from '../../theme';


export function SignIn() {

  async function handleSignIn() {
    const response = await AuthSession.startAsync({
      authUrl: "https://discord.com/api/oauth2/authorize?client_id=1022908685019791400&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40gustbitencourt%2Fmobile&response_type=token&scope=identify",
    })

    fetch('https://discord.com/api/users/@me', {
      headers: {
        'authorization': `Bearer ${response.params.access_token}` 
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))

  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={logoImg}
          style={styles.logo}
        />

        <Heading
          title="Encontre o seu duo"
          subtitle="Selecione o jogo que quer jogar..."
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSignIn}
        >
          <GameController 
            color={THEME.COLORS.TEXT}
            size={20}
          />

          <Text style={styles.buttonTitle}>
            Entrar com Discord
          </Text>

        </TouchableOpacity>
      </SafeAreaView>
    </Background>
  );
}