import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, Modal } from 'react-native';
import { getAllGenders } from './api'; // Importar la función de la API

const GenresScreen = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);

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
      setLoading(false); // Cambia el estado de carga a falso en caso de error también
    }
  };

  const handleGenrePress = (genre) => {
    setSelectedGenre(genre);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedGenre(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Géneros Musicales</Text>
      </View>
      {loading ? ( 
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="red" />
          <Text style={styles.loadingText}>Cargando...</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.grid}>
          {genres.map((genre, index) => (
            <TouchableOpacity key={index} style={styles.genreButton} onPress={() => handleGenrePress(genre)}>
              <Text style={styles.genreText}>{genre.nombre_genero}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedGenre?.nombre_genero}</Text>
            <Text style={styles.modalDescription}>{selectedGenre?.descripcion}</Text>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    fontSize: 18,
    color: 'red',
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo medio transparente
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'rgba(255, 0, 0, 0.6)', // Fondo rojo transparente
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default GenresScreen;
