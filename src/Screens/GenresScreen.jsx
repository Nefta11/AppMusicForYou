import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getAllGenders } from './api';
import * as ReactNative from 'react-native';


const GenresScreen = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    try {
      const response = await getAllGenders();
      setGenres(response.result);
      setLoading(false); // Cambia el estado de carga a falso cuando los datos se cargan con éxito
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  return (
    <ReactNative.ScrollView style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.headerText}>Géneros Musicales</Text>
      {loading ? ( // Muestra "Cargando..." mientras los datos se están recuperando
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Cargando...</Text>
        </View>
      ) : (
        <View style={styles.grid}>
          {genres.map((genre, index) => (
            <TouchableOpacity key={index} style={styles.genreButton}>
              <Text style={styles.genreText}>{genre.nombre_genero}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
        </ReactNative.ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 20,
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'red',
    marginBottom: 40,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  genreButton: {
    width: '48%',
    height: 80,
    backgroundColor: 'red',
    borderRadius: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  genreText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  loadingText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default GenresScreen;
