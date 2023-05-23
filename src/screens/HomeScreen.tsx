import React from 'react';
import { ActivityIndicator, FlatList, Image, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isLoading, simplePokemonList, loadPokemons } = usePokemonPaginated();

    return (
        <>
            <Image
                source={require('../assets/pokeball.png')}
                style={styles.pokeballBG}
            />

            <FlatList
                data={simplePokemonList}
                keyExtractor={(pokemon) => pokemon.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: item.picture }}
                        style={{
                            width: 100,
                            height: 100
                        }}
                    />
                )}

                //Infinite Scroll
                onEndReached={loadPokemons}
                onEndReachedThreshold={0.4}
                ListFooterComponent={(
                    <ActivityIndicator
                        style={{ height: 100 }}
                        size={20}
                        color="#ccc"
                    />
                )}
            />

            {/* <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20,
            }}>Pokedex</Text> */}
        </>
    );
};