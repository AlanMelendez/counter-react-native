import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import Fab from './components/Fab';

export default function App() {

  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.textSyle}>{count}</Text>



      <Fab label='+1' onPress={()=> setCount(count+1)} onLongPress={()=> setCount(0)} />

      <Fab label='-1' onPress={()=> setCount(count == 0 ? 0 : count-1)} onLongPress={()=> setCount(0)} position='left' />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  textSyle: {
    color: '#fff',
    fontSize: 120,
    fontWeight: 'bold',
  },
});
