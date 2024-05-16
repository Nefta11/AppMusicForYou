import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { getAllGenders } from './api';

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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Géneros Musicales</Text>
      </View>
      {loading ? ( // Muestra "Cargando..." mientras los datos se están recuperando
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Cargando...</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.grid}>
          {genres.map((genre, index) => (
            <TouchableOpacity key={index} style={styles.genreButton}>
              <Text style={styles.genreText}>{genre.nombre_genero}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 30,
  },
  header: {
    marginBottom: 12,
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
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
  },
  loadingText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default GenresScreen;
