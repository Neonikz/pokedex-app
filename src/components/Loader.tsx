import React from 'react'
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

export const Loader = () => {
  return (
    <View style={styles.activityIndicatorContainer}>
    <ActivityIndicator
        size={50}
        color="grey"
    />
    <Text style={{color:'grey'}}>Loading...</Text>
</View>
  )
}

const styles = StyleSheet.create({
    activityIndicatorContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
});
