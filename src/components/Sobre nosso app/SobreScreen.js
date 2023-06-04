import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Animated, TouchableOpacity, KeyboardAvoidingView, onPress, StyleSheet, Text, TextInput, Button, View } from 'react-native';
import React, { useState,useEffect } from "react";
import { MaterialIcons } from '@expo/vector-icons';

function SobreScreen() {
  const [text, onChangeText] = React.useState('');
  const [offset] = useState(new Animated.ValueXY({x: 0, y:90}));
  const[opacity] =useState(new Animated.Value(0)) ;
 

  useEffect(()=>{
    Animated.parallel([ 
      Animated.spring(offset.y,{
      toValue: 0,
      speed: 2,
      
      useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue:2,
        duration: 300,
        useNativeDriver: true,
      })
    ]).start()
      
        },[]);

  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
<Animated.View style={[styles.animaçao, 
{
  opacity:opacity,
  transform: [
  {translateY:offset.y}
]
    
    
    }
    ]}> 

      <View style={styles.view1} >
        <MaterialIcons name="local-florist" size={80} color="brown" />
        <Text style={styles.texto1}> SOBRE O APP </Text>
        <MaterialIcons name="local-florist" size={80} color="brown" />
      </View>

      <View style={styles.mensagem1}>
              <Text style={styles.textomsg}>
                Olá! Esse é o nosso sistema de suporte, aqui voce pode pedir qualquer tipo de ajuda tanto do nosso app, como de todos seus problemas, nossa equipe estara aqui para oque voce precisar!
              </Text>
            </View>

      </Animated.View>
    </View>
      
  );
}

export default SobreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',

  },


  view1: {
    alignItems: 'center',
    marginTop: -150,
    marginBottom: 220,
    flexDirection: 'row'

  },

  texto1: {
    fontWeight: 'bold',
    fontSize: 45,

  },
  animaçao:{
    alignItems: 'center',
  },
    mensagem1: {
      backgroundColor: '#eee',
      width: '90%',
      height: 150,
      borderRadius: 25,
      marginTop: -120,
      alignItems: 'center',
      flexDirection: 'row',
      borderWidth: 5,
      marginBottom: 50,
    },

    textomsg: {
      fontWeight: 'bold',
      fontSize: 17,
      marginTop: -8,
      marginRight: 10,
      marginStart: 10,
    },

    view2: {
      marginTop: 30,
      marginBottom: 5,
      marginEnd: 100,
      width: '90%',
      
    },
  
  
  
   
});