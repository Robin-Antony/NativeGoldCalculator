import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function IntroScreen() {
  return (
    <View>
      <View style={styles.container}>
        <Text>Loading..</Text>
      </View>
    </View>
  )
}

export default IntroScreen

const styles = StyleSheet.create({
    container:{
        width:100,
        height:100,
    }
}) 