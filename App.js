import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import MainScreen from './views/MainScreen';
import IntroScreen from './views/IntroScreen';

export default function App() {

  const [isLoaded, setIsLoaded] = useState(false)

  setTimeout(()=>{
      setIsLoaded(true)
  }, 2000);
  return (
    <View style={styles.container}>
       {isLoaded ? <MainScreen></MainScreen> : <IntroScreen></IntroScreen> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
