import * as ReactNative from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const GeneroCreateScreen = ({ navigation }) => {
  const handleCrearGenero = () => {
    // Función para crear el género musical
    console.log('Crear género musical');
  };

  const handleCancelar = () => {
    console.log('Cancelar');
  };

  return (
    <ReactNative.ScrollView style={styles.container}>
      <ReactNative.View style={styles.header}>
        <ReactNative.TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={34} color="red" />
        </ReactNative.TouchableOpacity>
        <ReactNative.Text style={styles.headerText}>Crear Género Musical</ReactNative.Text>
        <ReactNative.View />
      </ReactNative.View>
      <ReactNative.View style={styles.form}>
        <ReactNative.Text style={styles.label}>Nombre del género:</ReactNative.Text>
        <ReactNative.TextInput
          style={styles.input}
          placeholder="Nombre del género"
          placeholderTextColor="gray"
        />
        <ReactNative.View style={styles.buttonsContainer}>
          <ReactNative.TouchableOpacity
            style={styles.button}
            onPress={handleCrearGenero}
          >
            <ReactNative.Text style={styles.buttonText}>Crear</ReactNative.Text>
          </ReactNative.TouchableOpacity>
          <ReactNative.TouchableOpacity
            style={styles.button}
            onPress={handleCancelar}
          >
            <ReactNative.Text style={styles.buttonText}>Cancelar</ReactNative.Text>
          </ReactNative.TouchableOpacity>
        </ReactNative.View>
      </ReactNative.View>
    </ReactNative.ScrollView>
  );
};

const styles = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 44,
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'red',
  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: 25,
    marginBottom: 20,
  },
  input: {
    height: 60,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 21,
    marginBottom: 25
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: 'red',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'white',
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default GeneroCreateScreen;
