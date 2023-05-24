
import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface Props {
  icon:string;
  navigateTo:string;
}

export const FloatingButton = ({icon,navigateTo}:Props) => {

    const navigator = useNavigation();

  return (
    <TouchableOpacity
        onPress={() => navigator.navigate(navigateTo)}
        style={styles.button}
    >
        <Icon name={icon} size={30} color="#000"/>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    button:{
            position: "absolute",
            bottom: 20,
            right:20,
            backgroundColor:'#ccc',
            borderRadius:100,
            padding:13,
            opacity:0.8,
    },
});