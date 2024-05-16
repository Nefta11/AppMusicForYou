import * as ReactNative from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';


const LetraCreateScreen = ({ navigation }) => {
  const [titulo, setTitulo] = useState('');
  const [artista, setArtista] = useState('');
  const [album, setAlbum] = useState('');
  const [genero, setGenero] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [letra, setLetra] = useState('');

  const handleCrearLetra = () => {
    console.log('Crear letra:', { titulo, artista, album, genero, videoUrl, letra });
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
        <ReactNative.Text style={styles.headerText}>Crear Letra</ReactNative.Text>
        <ReactNative.View />
      </ReactNative.View>
      <ReactNative.View style={styles.container}>
        <ReactNative.View style={styles.form}>
          <ReactNative.Text style={styles.label}>Título de la canción:</ReactNative.Text>
          <ReactNative.TextInput
            style={styles.input}
            value={titulo}
            onChangeText={setTitulo}
            placeholder="Título"
            placeholderTextColor="gray"
          />
          <ReactNative.Text style={styles.label}>Artista:</ReactNative.Text>
          <ReactNative.TextInput
            style={styles.input}
            value={artista}
            onChangeText={setArtista}
            placeholder="Selecciona un artista"
            placeholderTextColor="gray"
          />
          <ReactNative.Text style={styles.label}>Álbum:</ReactNative.Text>
          <ReactNative.TextInput
            style={styles.input}
            value={album}
            onChangeText={setAlbum}
            placeholder="Selecciona un álbum"
            placeholderTextColor="gray"
          />
          <ReactNative.Text style={styles.label}>Género Musical:</ReactNative.Text>
          <ReactNative.TextInput
            style={styles.input}
            value={genero}
            onChangeText={setGenero}
            placeholder="Selecciona un género musical"
            placeholderTextColor="gray"
          />
          <ReactNative.Text style={styles.label}>URL del Video:</ReactNative.Text>
          <ReactNative.TextInput
            style={styles.input}
            value={videoUrl}
            onChangeText={setVideoUrl}
            placeholder="Pegar el URL del video"
            placeholderTextColor="gray"
          />
 <ReactNative.Text style={styles.label}>Letra:</ReactNative.Text>
          <ReactNative.TextInput
            style={styles.inputDesc}
            value={letra}
            onChangeText={setLetra}
            placeholder="Escribe o pega la letra de la canción"
            placeholderTextColor="gray"
            multiline={true}
            numberOfLines={4}
          />
          <ReactNative.View style={styles.buttonsContainer}>
            <ReactNative.TouchableOpacity
              style={styles.button}
              onPress={handleCrearLetra}
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
      </ReactNative.View>
    </ReactNative.ScrollView>
  );
};

const styles = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    marginTop: 10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 28,
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
    marginBottom: 10,
  },
  inputDesc:{
    height: 160,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputMultiline: {
    height: 200,
    textAlignVertical: 'top',
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

export default LetraCreateScreen;
