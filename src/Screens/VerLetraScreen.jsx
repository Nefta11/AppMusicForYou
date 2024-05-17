import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { getPerson } from './api';
import YoutubePlayer from 'react-native-youtube-iframe';

const VerLetraScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { nombreCancion } = route.params;
  const [songData, setSongData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSongData(nombreCancion);
  }, [nombreCancion]);

  const fetchSongData = async (nombre) => {
    try {
      const response = await getPerson({ nombre });
      if (response && response.result && response.result.length > 0) {
        setSongData(response.result[0]);
      } else {
        console.error('Error fetching song data: No result in response');
      }
    } catch (error) {
      console.error('Error fetching song data:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={34} color="red" />
        </TouchableOpacity>
        {songData && <Text style={styles.headerText}>{songData.nombre_cancion}</Text>}
        <View />
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="red" />
          <Text style={styles.loadingText}>Cargando...</Text>
        </View>
      ) : songData ? (
        <>
          <View style={styles.videoContainer}>
            <YoutubePlayer
              height={300}
              play={false}
              videoId={songData.url_video.split('v=')[1]}
            />
          </View>
          <View style={styles.lyricsCard}>
            <Text style={styles.lyricsText}>{songData.letra_cancion}</Text>
          </View>
        </>
      ) : (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>No se encontró la canción</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 17,
    marginTop: 35,
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
    flex: 1,
    textAlign: 'center',
  },
  videoContainer: {
    alignItems: 'center',
    marginBottom: -31,
  },
  lyricsCard: {
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 29
  },
  lyricsText: {
    fontSize: 16,
    textAlign: 'center',
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
  noDataContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  noDataText: {
    fontSize: 18,
    color: 'gray',
  },
});

export default VerLetraScreen;