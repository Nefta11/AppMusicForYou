import * as ReactNative from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const AlbumCreateScreen = ({ navigation }) => { 
  const [titulo, setTitulo] = useState('');
  const [artista, setArtista] = useState('');
  const [anoLanzamiento, setAnoLanzamiento] = useState('');
  const [imagenUrl, setImagenUrl] = useState(''); 

  const handleCrearAlbum = () => {
    console.log('Crear álbum:', { titulo, artista, anoLanzamiento, imagenUrl });
  };

  const handleCancelar = () => {
    console.log('Cancelar');
  };

  const handleSeleccionarImagen = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permiso denegado para acceder a la galería de imágenes');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImagenUrl(result.uri);
    }
  };

  return (
    <ReactNative.ScrollView style={styles.container}>
      <ReactNative.View style={styles.header}>
        <ReactNative.TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={34} color="red" />
        </ReactNative.TouchableOpacity>
        <ReactNative.Text style={styles.headerText}>Crear Álbum</ReactNative.Text>
        <ReactNative.View />
      </ReactNative.View>
      <ReactNative.View style={styles.container}>
        <ReactNative.View style={styles.form}>
          <ReactNative.TouchableOpacity style={styles.imagePickerContainer} onPress={handleSeleccionarImagen}>
            {imagenUrl ? (
              <ReactNative.Image source={{ uri: imagenUrl }} style={styles.imagePreview} />
            ) : (
              <Ionicons name="camera" size={40} color="gray" />
            )}
          </ReactNative.TouchableOpacity>
          <ReactNative.Text style={styles.labelImg}>Agregar una imagen</ReactNative.Text>
          <ReactNative.Text style={styles.label}>Título del álbum:</ReactNative.Text>
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
            placeholder="Artista"
            placeholderTextColor="gray"
          />
          <ReactNative.Text style={styles.label}>Año de lanzamiento:</ReactNative.Text>
          <ReactNative.TextInput
            style={styles.input}
            value={anoLanzamiento}
            onChangeText={setAnoLanzamiento}
            placeholder="Año"
            placeholderTextColor="gray"
            keyboardType="numeric"
          />
          <ReactNative.View style={styles.buttonsContainer}>
            <ReactNative.TouchableOpacity
              style={styles.button}
              onPress={handleCrearAlbum}
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
    padding: 15,
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
  labelImg: {
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'center',
    padding: 10
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
  imagePickerContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    alignSelf: 'center', 
  },
  imagePreview: {
    width: 120,
    height: 120,
    borderRadius: 60,
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

export default AlbumCreateScreen;
