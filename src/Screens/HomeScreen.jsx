import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput, ActivityIndicator, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import MusicForYou from '../../svg/MusicForYou';
import { getAllAlbums, getAllArtist } from '../../api';

const images = [
  require('../public/banner siuu.png'),
  require('../public/banner_radar.jpg'),
  require('../public/the strokes.jpeg'),
];

const HomeScreen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAllAlbums, setShowAllAlbums] = useState(false);
  const [showAllArtists, setShowAllArtists] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const [filteredArtists, setFilteredArtists] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetchAlbums();
    fetchArtists();
  }, []);

  const fetchAlbums = async () => {
    try {
      const response = await getAllAlbums();
      if (response && response.result) {
        setAlbums(response.result);
        setFilteredAlbums(response.result);
      } else {
        console.error('Error fetching albums: No result in response');
      }
    } catch (error) {
      console.error('Error fetching albums:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchArtists = async () => {
    try {
      const response = await getAllArtist();
      if (response && response.result) {
        setArtists(response.result);
        setFilteredArtists(response.result);
      } else {
        console.error('Error fetching artists: No result in response');
      }
    } catch (error) {
      console.error('Error fetching artists:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAlbumPress = (album) => {
    navigation.navigate('Album', { album });
  };

  const handleArtistPress = (artist) => {
    setSelectedArtist(artist);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedArtist(null);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query === '') {
      setFilteredAlbums(albums);
      setFilteredArtists(artists);
    } else {
      const filteredAlbumResults = albums.filter((album) =>
        album.nombre_album.toLowerCase().includes(query.toLowerCase()) ||
        album.nombre_artista.toLowerCase().includes(query.toLowerCase())
      );
      const filteredArtistResults = artists.filter((artist) =>
        artist.nombre_artista.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredAlbums(filteredAlbumResults);
      setFilteredArtists(filteredArtistResults);
    }
  };

  const displayedAlbums = showAllAlbums ? filteredAlbums : filteredAlbums.slice(0, 6);
  const displayedArtists = showAllArtists ? filteredArtists : filteredArtists.slice(0, 6);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <MusicForYou width={200} height={90} />
      </View>

      <View style={styles.searchBar}>
        <TextInput
          style={[styles.searchInput, { fontSize: 20 }]}
          placeholder="Buscar..."
          placeholderTextColor="red"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <Ionicons name="search-outline" size={20} color="red" />
      </View>

      <Image
        style={styles.banner}
        source={images[currentImageIndex]}
      />

      <Text style={styles.sectionTitle}>Álbums</Text>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="red" />
          <Text style={styles.loadingText}>Cargando...</Text>
        </View>
      ) : (
        <>
          {displayedAlbums.length > 0 ? (
            <View style={styles.albumRow}>
              {displayedAlbums.map((album) => (
                <TouchableOpacity
                  key={album.id}
                  style={styles.albumCardSquare}
                  onPress={() => handleAlbumPress(album)}
                >
                  <View style={styles.albumImageContainer}>
                    <Image
                      style={styles.albumImageSquare}
                      source={{ uri: album.url_imagen }}
                    />
                  </View>
                  <Text style={styles.albumText}>{album.nombre_album}</Text>
                  <Text style={styles.albumText}>{album.nombre_artista}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <Text style={styles.noResultsText}>No encontrado</Text>
          )}
          <TouchableOpacity style={styles.toggleButton} onPress={() => setShowAllAlbums(!showAllAlbums)}>
            <Text style={styles.toggleButtonText}>{showAllAlbums ? 'Ver Menos' : 'Ver Más'}</Text>
          </TouchableOpacity>
        </>
      )}

      <Text style={styles.sectionTitle}>Artistas</Text>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="red" />
          <Text style={styles.loadingText}>Cargando...</Text>
        </View>
      ) : (
        <>
          {displayedArtists.length > 0 ? (
            <View style={styles.ArtistaRow}>
              {displayedArtists.map((artist) => (
                <TouchableOpacity key={artist.id} style={styles.ArtistaCardRound} onPress={() => handleArtistPress(artist)}>
                  <View style={styles.ArtistaImageContainer}>
                    <Image
                      style={styles.ArtistaImageRound}
                      source={{ uri: artist.url_imagen }}
                    />
                  </View>
                  <Text style={styles.ArtistaText}>{artist.nombre_artista}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <Text style={styles.noResultsText}>No encontrado</Text>
          )}
          <TouchableOpacity style={styles.toggleButtonArtis} onPress={() => setShowAllArtists(!showAllArtists)}>
            <Text style={styles.toggleButtonText}>{showAllArtists ? 'Ver Menos' : 'Ver Más'}</Text>
          </TouchableOpacity>
        </>
      )}

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              style={styles.modalImage}
              source={{ uri: selectedArtist?.url_imagen }}
            />
            <Text style={styles.modalTitle}>{selectedArtist?.nombre_artista}</Text>
            <Text style={styles.modalDebut}>Debut: {selectedArtist?.debut}</Text>
            <Text style={styles.modalDescription}>{selectedArtist?.descripcion}</Text>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: 1,
    backgroundColor: 'white',
  },
  searchBar: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  banner: {
    width: '100%',
    height: 120,
    marginBottom: 25,
    borderRadius: 25,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: 'red',
  },
  albumRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  albumCardSquare: {
    width: 110,
    height: 110,
    alignItems: 'center',
    marginBottom: 50,
  },
  albumImageContainer: {
    width: 105,
    height: 105,
    borderRadius: 44,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  albumImageSquare: {
    width: 90,
    height: 90,
    borderRadius: 5,
  },
  albumText: {
    textAlign: 'center',
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
  ArtistaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  ArtistaCardRound: {
    width: 110,
    alignItems: 'center',
    marginBottom: 25,
  },
  ArtistaImageContainer: {
    width: 110,
    height: 110,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  ArtistaImageRound: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  ArtistaText: {
    textAlign: 'center',
  },
  toggleButton: {
    alignSelf: 'center',
    backgroundColor: 'red',
    borderRadius: 15,
    padding: 10,
    marginTop: -10,
    marginBottom: 35,
  },
  toggleButtonArtis:{
    alignSelf: 'center',
    backgroundColor: 'red',
    borderRadius: 15,
    padding: 10,
    marginTop: -10,
    marginBottom: 40,
  },
  toggleButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noResultsText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'red',
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'rgba(255, 0, 0, 0.8)',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  modalDebut: {
    fontSize: 18,
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

export default HomeScreen;
