import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import MusicForYou from '../../svg/MusicForYou';
import { getAllAlbums, getAllArtist } from './api';

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
        <View style={styles.albumRow}>
          {albums.map((album) => (
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
      )}

      <Text style={styles.sectionTitle}>Artistas</Text>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="red" />
          <Text style={styles.loadingText}>Cargando...</Text>
        </View>
      ) : (
        <View style={styles.ArtistaRow}>
          {artists.map((artist) => (
            <View key={artist.id} style={styles.ArtistaCardRound}>
              <View style={styles.ArtistaImageContainer}>
                <Image
                  style={styles.ArtistaImageRound}
                  source={{ uri: artist.url_imagen }}
                />
              </View>
              <Text style={styles.ArtistaText}>{artist.nombre_artista}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: 1,
    backgroundColor: 'white'
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
});

export default HomeScreen;
