import { StatusBar } from 'expo-status-bar';
import { Button, Animated, StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/components/Login/LoginScreen';
import CadastroScreen from './src/components/Cadastro/CadastroScreen';
import SuporteScreen from './src/components/Suporte/SuporteScreen';
import SobreScreen from './src/components/Sobre nosso app/SobreScreen';
const Stack = createStackNavigator();

function App() {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 90 }));
  const [opacity] = useState(new Animated.Value(0));


  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 2,
        speed: 2,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 2,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  function HomeScreen({ navigation }) {
    return (
      <ScrollView style={styles.container}>
        <Animated.View
          style={[
            styles.animation,
            {
              opacity: opacity,
              transform: [{ translateY: offset.y }],
            },
          ]}
        >
          <StatusBar style="auto" />
        
          <View style={styles.view1}>
            <MaterialIcons name="local-florist" size={80} color="brown" />
            <Text style={styles.texto1}> BEM VINDA </Text>
            <MaterialIcons name="local-florist" size={80} color="brown" />
          </View>

       
            <View style={styles.mensagem1}>
              <Text style={styles.textomsg}>
                Olá! Seja bem-vinda ao novo sistema para entender melhor o seu "período menstrual". Se você estiver precisando de ajuda na sua situação, conecte-se a uma conta ou preencha suas informações. Abaixo temos opções para você que deseja aproveitar o melhor do nosso app.
              </Text>
            </View>
      
        


            <View style={styles.custombutton1}> 
            <Button color="brown" title="Login" onPress={() => navigation.navigate('Login')} />
            </View>
            <View style={styles.custombutton2}>
            <Button color="brown" title="Cadastro" onPress={() => navigation.navigate('Cadastro')} />
            </View>
            <View style={styles.custombutton4}> 
            <Button color="brown" title="Sobre nosso app" onPress={() => navigation.navigate('Sobre nosso app')} />
            </View>
            <View style={styles.custombutton3}> 
            <Button color="brown" title="Suporte" onPress={() => navigation.navigate('Suporte')} />
            </View>
        

           
            
          
        </Animated.View>
      </ScrollView>


    );
  }



  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen style={styles.title} name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Sobre nosso app" component={SobreScreen} />
        <Stack.Screen name="Suporte" component={SuporteScreen} />

      </Stack.Navigator>
    </NavigationContainer>

    
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },

  title:{
    




  },
  animation: {
    alignItems: 'center',
  },
  mensagem1: {
    backgroundColor: '#eee',
    width: '95%',
    height: 140,
    borderRadius: 25,
    marginTop: 1,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 5,
    marginBottom: 40,
  },

  textomsg: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: -8,
    marginRight: 10,
    marginStart: 10,
  },
  
  view1: {
    alignItems: 'center',
    marginTop: 30,
    flexDirection: 'row',
    marginBottom: 50,
  },
  texto1: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  itens: {
    marginTop: 80,
    marginBottom: -19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffe4e1',
    width: 350,
    padding: 10,
    borderWidth: 5,
    borderRadius: 30,
  },
  texto2: {
    fontWeight: 'bold',
    fontSize: 18,
  },
 
  custombutton1:{
    marginTop: 25,
    marginBottom: 40,
    width: '50%',
    padding: 10,


  },
  custombutton2:{
    marginTop: 5,
    marginBottom: 40,
    width: '50%',
    padding: 10,


  },

  custombutton4:{
    marginTop: 5,
    marginBottom: 1,
    width: '50%',
padding: 10,

  },

  custombutton3:{
    marginTop: 40,
    marginBottom: 1,
    width: '50%',
padding: 10,

  },


  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
