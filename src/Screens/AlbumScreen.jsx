import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { getAlbumMusic } from './api';

const AlbumScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { album } = route.params;
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSongId, setSelectedSongId] = useState(null);

  useEffect(() => {
    fetchAlbumMusic(album.id);
  }, [album]);

  const fetchAlbumMusic = async (id) => {
    try {
      const response = await getAlbumMusic(id);
      if (response && response.result) {
        setSongs(response.result);
      } else {
        console.error('Error fetching album songs: No result in response');
      }
    } catch (error) {
      console.error('Error fetching album songs:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSongPress = (nombreCancion) => {
    navigation.navigate('VerLetra', { nombreCancion });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={34} color="red" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Álbum</Text>
        <View />
      </View>

      <View style={styles.albumInfoContainer}>
        <Image
          style={styles.albumImage}
          source={{ uri: album.url_imagen }}
        />
        <View style={styles.albumDetails}>
          <Text style={styles.albumTitle}>{album.nombre_album}</Text>
          <Text style={styles.albumArtist}>{album.nombre_artista}</Text>
          <Text style={styles.albumInfo}>{album.año_lanzamiento}  Genero   15 canciones</Text>
        </View>
      </View>

      <View style={styles.songList}>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="red" />
            <Text style={styles.loadingText}>Cargando...</Text>
          </View>
        ) : songs.length === 0 ? (
          <View style={styles.noSongsCard}>
            <Text style={styles.noSongsText}>Aún no tiene canciones</Text>
          </View>
        ) : (
          songs.map((song) => (
            <TouchableOpacity
              key={song.id}
              style={[
                styles.songCard,
                selectedSongId === song.id && styles.songCardSelected
              ]}
              onPress={() => handleSongPress(song.nombre_cancion)}
            >
              <Image
                style={styles.songImage}
                source={{ uri: song.url_imagen }}
              />
              <View style={styles.songDetails}>
                <Text style={styles.songTitle}>{song.nombre_cancion}</Text>
                <Text style={styles.songArtist}>{album.nombre_artista}</Text>
              </View>
              <TouchableOpacity style={selectedSongId === song.id ? styles.viewLyricsButtonSelected : styles.viewLyricsButton}>
                <Text style={selectedSongId === song.id ? styles.viewLyricsTextSelected : styles.viewLyricsText}>Ver Letra</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 30,
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
  albumInfoContainer: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  albumImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  albumDetails: {
    marginLeft: 20,
  },
  albumTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  albumArtist: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 7,
  },
  albumInfo: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 7,
  },
  songList: {
    padding: 1,
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  loadingText: {
    fontSize: 18,
    color: 'gray',
    marginTop: 10,
  },
  noSongsCard: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginBottom: 15,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  noSongsText: {
    fontSize: 18,
    color: 'white',
  },
  songCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  songCardSelected: {
    backgroundColor: 'red',
  },
  songNumber: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  songDetails: {
    flex: 1,
    marginLeft: 16,
  },
  songTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  songArtist: {
    fontSize: 16,
    color: 'gray',
  },
  viewLyricsButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
  viewLyricsButtonSelected: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  viewLyricsText: {
    color: 'white',
  },
  viewLyricsTextSelected: {
    color: 'red',
  },
});

export default AlbumScreen;
