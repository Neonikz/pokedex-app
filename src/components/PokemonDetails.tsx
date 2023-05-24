import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { hexadecimalToRGBA } from '../helpers/hexadecimalToRGBA';
import { capitalizeName } from '../helpers/capitalizeName';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull;
    color: string;
}

export const PokemonDetails = ({ pokemon, color }: Props) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: hexadecimalToRGBA(color, 0.2),

            }}
        >
            <View style={{
                ...styles.container,
                marginTop: 370,
            }}>
                <Text style={styles.title}>Types</Text>

                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.types.map(({ type }) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}
                                key={type.name}
                            >
                                {capitalizeName(type.name)}
                            </Text>
                        ))
                    }
                </View>

                <Text style={styles.title}>Weight</Text>
                <Text style={styles.regularText}>{pokemon.weight} kg</Text>
            </View>

            <View style={{
                ...styles.container,
            }}>
                <Text style={styles.title}>Sprites</Text>
            </View>

            <ScrollView
                // style=
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_default}
                    style={styles.basicSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.front_shiny}
                    style={styles.basicSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={styles.basicSprite}
                />
            </ScrollView>

            <View style={styles.container}>
                <Text style={styles.title}>Base Abilities</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.abilities.map(({ ability }) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}
                                key={ability.name}
                            >
                                {capitalizeName(ability.name)}
                            </Text>
                        ))
                    }
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Movements</Text>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                    {
                        pokemon.moves.map(({ move }) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}
                                key={move.name}
                            >
                                {capitalizeName(move.name)}
                            </Text>
                        ))
                    }
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Stats</Text>
                <View>
                    {
                        pokemon.stats.map((stat, index) => (
                            <View
                                key={stat.stat.name + index}
                                style={{ flexDirection: 'row' }}
                            >
                                <Text
                                    style={{
                                        ...styles.regularText,
                                        marginRight: 10,
                                        width: 150,
                                    }}
                                    key={stat.stat.name}
                                >
                                    {capitalizeName(stat.stat.name)}
                                </Text>
                                <Text
                                    style={{
                                        ...styles.regularText,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {capitalizeName(stat.base_stat.toString())}
                                </Text>
                            </View>
                        ))
                    }
                </View>
                <View style={{
                    marginBottom: 20,
                    alignItems: 'center'
                }}>
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprite}
                    />
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 22,
        marginTop: 20,
    },
    regularText: {
        fontSize: 19,
        color: '#000',
    },
    basicSprite: {
        width: 100,
        height: 100,
    },
});
