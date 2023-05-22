import React from 'react';
import { Image, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    usePokemonPaginated()

    return (
        <>
            <Image
                source={require('../assets/pokeball.png')}
                style={styles.pokeballBG}
            />
            <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20,
            }}>Pokedex</Text>
        </>
    );
};