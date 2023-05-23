import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Dimensions, Image } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import ImageColors from 'react-native-image-colors';

const windowWidth = Dimensions.get('window').width;

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {

    const [bgColor, setBgColor] = useState('grey');

    useEffect(() => {
        ImageColors.getColors(pokemon.picture, { fallback: 'grey', key: pokemon.picture })
            .then(colors => {
                (colors.platform === 'android')
                    && setBgColor(colors.dominant || 'grey')
                // : setBgColor(colors.background || 'grey')
            })
    }, []);


    return (
        <TouchableOpacity
            activeOpacity={0.9}
        >
            <View
                style={{
                    ...styles.cardContainer,
                    width: windowWidth * 0.4,
                    backgroundColor: bgColor,
                }}
            >
                <View>
                    <Text style={styles.pokemonName}>
                        {/* Name capitalized */}
                        {`${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>

                <View style={styles.pokeballContainer}>
                    <Image
                        source={require('../assets/pokeball-white.png')}
                        style={styles.pokeball}
                    />
                </View>

                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    pokemonName: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10,
        overflow: 'hidden',
    },
    pokeballContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        opacity: 0.5,
    },
    pokeball: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -25,
        bottom: -25,
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -5,
    }
});
