import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Home() {
  
  return (
    <SafeAreaView style={styles.background}>
      <Image 
        source={require('./assets/d4m.png')}
        style={styles.logo}
      />
      <TouchableOpacity style={styles.button}>
        <View style={styles.bag}>
          <Ionicons name = "bag" size = {24} color = "black" />
        </View>
        <Text style={styles.buttonText}>  Place Takeaway</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  background: {
    flex: 1,    // Fill the screen
    justifyContent: 'center',   // Center vertically
    alignItems: 'center',   // Center horizontally
    backgroundColor: 'black',    
  },
  
  logo: {
    resizeMode: 'contain',    //Resizing, not cropping
    width: '100%',
    position: 'absolute',
    top: '5%',
  },

  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    position: 'absolute',
    top: '40%',
    flexDirection: 'row',
  },

  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  bag: {
    justifyContent: 'center',
  },
  
});


