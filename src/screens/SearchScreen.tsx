import React,{useState,useEffect} from 'react';
import { View, Text, FlatList, Dimensions, Platform, Image, StyleSheet } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {Loader} from '../components/Loader';
import {styles} from '../theme/appTheme';
import {PokemonCard} from '../components/PokemonCard';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FloatingButton } from '../components/FloatingButton';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();

  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

  const [term, setTerm] = useState('')

  useEffect(() => {
    if(term.length === 0) return setPokemonFiltered([]);

    if(isNaN(Number(term))){
      let newPokemonArray = simplePokemonList.filter(
        (pokemon) => pokemon.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
      );
      setPokemonFiltered(newPokemonArray);
    }else{
      const pokemonById = simplePokemonList.find((pokemon) => pokemon.id === term);
      setPokemonFiltered(
        (pokemonById) ? [pokemonById] : []
      )
    }

  }, [term])
  

  if (isFetching) return <Loader />;

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20,
      }}>
      <SearchInput
        onDebounce={(value) => setTerm(value)}
        style={{
            position: 'absolute',
            zIndex:999,
            width:screenWidth - 40,
            top: Platform.OS === 'ios' ? top : top + 30,
        }}
      />

      <FlatList
        data={pokemonFiltered}
        keyExtractor={pokemon => pokemon.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        //Header
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              ...styles.globalMargin,
              paddingBottom: 10,
              marginTop: Platform.OS === 'ios' ? top + 60: top + 80,
            }}>
            {term}
          </Text>
        }
        renderItem={({item}) => <PokemonCard pokemon={item} />}
      />

      {
        pokemonFiltered.length === 0 &&
        <View style={{
          ...messageStyles.messageContainer,
          width:screenWidth - 40,
        }}>
          <Text style={messageStyles.message}>Let's find Pokemons!</Text>
          <Image 
            source={require('../assets/pokeball.png')}
            style={{width:30,height:30,}}
          />
        </View> 
      }
        <FloatingButton icon="list-outline" navigateTo='HomeScreen' style={{right:0}}/>
    </View>
  );
};

const messageStyles = StyleSheet.create({
    messageContainer:{
      position:'absolute',
      height:150,
      justifyContent:'flex-end',
      alignItems:'center',
    },
    message:{
      color:'grey',
      fontSize:25,
    },
});
