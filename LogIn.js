import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function LogIn() {
  
  return (
    <SafeAreaView style={styles.background}>
      <Image 
        source={require('./assets/d4m.png')}
        style={styles.logo}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,    // Fill the screen
    justifyContent: 'center',   // Center vertically
    alignItems: 'center',   // Center horizontally
    backgroundColor: 'black',    
  },
  
  logo: {
    resizeMode: 'contain',    //Resizing, not cropping
    width: '60%',
    position: 'absolute',
    transform: [{ translateY: -30 }],
  },

  button: {
    backgroundColor: '#0078D7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    transform: [{ translateY: 30 }],
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },

});


