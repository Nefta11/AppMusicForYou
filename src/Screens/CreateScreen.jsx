import * as ReactNative from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AlbumCreateScreen from './AlbumCreateScreen'; 
import LetraCreateScreen from './LetraCreateScreen';
import ArtistaCreateScreen from './ArtistaCreateScreen';
import GeneroCreateScreen from './GeneroCreateScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const CreateScreen = ({ navigation }) => {
  return (
    <ReactNative.View style={styles.container}>
      
      <ReactNative.View style={styles.header}>
        <ReactNative.Text style={styles.headerText}>Crear</ReactNative.Text>
        <ReactNative.View />
      </ReactNative.View>

      <ReactNative.View style={styles.question}>
        <ReactNative.Text style={styles.questionText}>¿Qué deseas crear?</ReactNative.Text>
        <ReactNative.Text style={styles.smallText}>Por favor, selecciona lo que quieras crear.</ReactNative.Text>
      </ReactNative.View>

      <ReactNative.View style={styles.targets}>
        <ReactNative.TouchableOpacity
          style={[styles.target, { backgroundColor: 'red' }]}
          onPress={() => navigation.navigate('AlbumCreateScreen')}
        >
          <Ionicons name="musical-notes" size={60} color="white" />
          <ReactNative.Text style={styles.targetText}>Álbum</ReactNative.Text>
        </ReactNative.TouchableOpacity>

        <ReactNative.TouchableOpacity
          style={[styles.target, { backgroundColor: 'red' }]}
          onPress={() => navigation.navigate('LetraCreateScreen')}
        >
          <Ionicons name="mic-outline" size={60} color="white" />
          <ReactNative.Text style={styles.targetText}>Letra</ReactNative.Text>
        </ReactNative.TouchableOpacity>

        <ReactNative.TouchableOpacity
          style={[styles.target, { backgroundColor: 'red' }]}
          onPress={() => navigation.navigate('ArtistaCreateScreen')}
        >
          <Ionicons name="person" size={60} color="white" />
          <ReactNative.Text style={styles.targetText}>Artista</ReactNative.Text>
        </ReactNative.TouchableOpacity>

        <ReactNative.TouchableOpacity
          style={[styles.target, { backgroundColor: 'red' }]}
          onPress={() => navigation.navigate('GeneroCreateScreen')}
        >
          <Ionicons name="disc" size={60} color="white" />
          <ReactNative.Text style={styles.targetText}>Géneros</ReactNative.Text>
        </ReactNative.TouchableOpacity>
      </ReactNative.View>
    </ReactNative.View>
  );
};

const CreateScreenNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="CreateScreen">
      <Stack.Screen 
        name="CreateScreen" 
        component={CreateScreen} 
        options={{ 
          headerShown: false 
        }}
      />
      <Stack.Screen 
        name="AlbumCreateScreen" 
        component={AlbumCreateScreen} 
        options={{ 
          headerShown: false 
        }}
      />
      <Stack.Screen 
        name="LetraCreateScreen" 
        component={LetraCreateScreen} 
        options={{ 
          headerShown: false 
        }}
      />
      <Stack.Screen 
        name="ArtistaCreateScreen" 
        component={ArtistaCreateScreen} 
        options={{ 
          headerShown: false 
        }}
      />
      <Stack.Screen 
        name="GeneroCreateScreen" 
        component={GeneroCreateScreen} 
        options={{ 
          headerShown: false 
        }}
      />
    </Stack.Navigator>
  );
};

const styles = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop:10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'red',
  },
  question: {
    marginBottom: 20,
    alignItems: 'center',
  },
  questionText: {
    fontSize: 30, 
    fontWeight: 'bold',
    marginBottom: 25, 
    color: 'black', 
  },
  smallText: {
    fontSize: 21, 
    color: 'gray', 
  },
  targets: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    marginTop: 50, 
  },
  target: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '38%',
    height:'30%',
    aspectRatio: 1, 
    borderRadius: 10,
    marginBottom: 20, 
    backgroundColor: 'red',
  },
  targetText: {
    marginTop: 10,
    fontSize: 25, 
    color: 'white',
  },
});

export default CreateScreenNavigator;

//Este comando :  yarn upgrade react-native-gesture-handler @react-navigation/native  // fue el que me arreglo el error de :
//   ERROR  TypeError: _RNGestureHandlerModule.default.flushOperations is not a function (it is undefined), js engine: hermes
