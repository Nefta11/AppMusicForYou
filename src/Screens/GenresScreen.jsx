import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getAllGenders } from '../Screens/api'; // Asegúrate de importar correctamente las funciones API

const GenresScreen = () => {
  const [genres, setGenres] = useState([]); // Estado para almacenar los géneros musicales

  // Función para cargar los géneros musicales desde la base de datos
  const fetchGenres = async () => {
    try {
      const response = await getAllGenders(); // Llama a la función getAllGenders de tu API
      setGenres(response); // Actualiza el estado con los géneros obtenidos
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  // Cargar los géneros al cargar el componente
  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Géneros Musicales</Text>
      <View style={styles.grid}>
        {genres.map((genre, index) => (
          <TouchableOpacity key={index} style={styles.genreButton}>
            <Text style={styles.genreText}>{genre.nombre_genero}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 10,
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
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
});

export default GenresScreen;
