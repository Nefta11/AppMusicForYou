import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { getPerson } from '../../api';
import YoutubePlayer from 'react-native-youtube-iframe';

const VerLetraScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { nombreCancion } = route.params;
  const [songData, setSongData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);

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

  const extractVideoId = (url) => {
    const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|v\/|watch\?v=)|youtu\.be\/)([^&?/]+)/);
    return videoIdMatch ? videoIdMatch[1] : null;
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
            {videoLoading ? (
              <View style={styles.videoLoadingContainer}>
                <ActivityIndicator size="large" color="red" />
                <Text style={styles.videoLoadingText}>Cargando video...</Text>
              </View>
            ) : videoError ? (
              <Text style={styles.loadingText}>Error al cargar el video</Text>
            ) : (
              <YoutubePlayer
                height={300}
                play={false}
                videoId={extractVideoId(songData.url_video)}
                onReady={() => setVideoLoading(false)}
                onError={() => setVideoError(true)}
              />
            )}
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
    flex: 1,
    textAlign: 'center',
  },
  videoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  lyricsCard: {
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 35,
    alignItems: 'center',
    marginBottom: 60
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
  videoLoadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoLoadingText: {
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
