import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
  }

  const handlePressMinus = () => {
    //validate count is not negative
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textSyle}>{count}</Text>


      <Pressable onPress={() => handlePress()} onLongPress={() => setCount(0)}> 
        <Text style={styles.floatingButton} >+1</Text>
      </Pressable>

      {/* <TouchableOpacity onPress={() => handlePressMinus()}>
        <Text style={styles.floatingButton}>-1</Text>
      </TouchableOpacity> */}


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
  floatingButton: {
    position: 'absolute',
    top: 10,
    right: 20,
    backgroundColor: '#65558f',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    elevation: 3,
  }
});
