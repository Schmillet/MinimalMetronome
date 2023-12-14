import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Pressable} from 'react-native';
import React from 'react'


const App = () =>{
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Metronome</Text>
        <View style={styles.bodyWrap}>
          <Text style={styles.pressText}>Hello</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
  },
  wrapper:{
    backgroundColor: '#7fffd4',
    flex:1
  },
  titleStyle:{
    color: 'black',
    fontSize: 30
  },
  pressText:{
    fontSize: 20,
  },
  bodyWrap:{
    
  }
});

export default App
