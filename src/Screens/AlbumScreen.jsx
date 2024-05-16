import * as React from 'react';
import * as ReactNative from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const songs = [
  { id: 1, title: 'Hey Brother', artist: 'Avicii', image: 'https://raw.githubusercontent.com/Nefta11/AppMovil-MFY/main/src/public/1200x1200bb.jpg' },
  { id: 2, title: 'Wake Me Up', artist: 'Avicii', image: 'https://raw.githubusercontent.com/Nefta11/AppMovil-MFY/main/src/public/1200x1200bb.jpg' },
  { id: 3, title: 'You Make up', artist: 'Avicii', image: 'https://raw.githubusercontent.com/Nefta11/AppMovil-MFY/main/src/public/1200x1200bb.jpg' },
  { id: 4, title: 'Addicted To You', artist: 'Avicii', image: 'https://raw.githubusercontent.com/Nefta11/AppMovil-MFY/main/src/public/1200x1200bb.jpg' },
  { id: 5, title: 'Dear Boy', artist: 'Avicii', image: 'https://raw.githubusercontent.com/Nefta11/AppMovil-MFY/main/src/public/1200x1200bb.jpg' },
  { id: 6, title: 'Liar Liar', artist: 'Avicii', image: 'https://raw.githubusercontent.com/Nefta11/AppMovil-MFY/main/src/public/1200x1200bb.jpg' },
  { id: 7, title: 'Shame On Me', artist: 'Avicii', image: 'https://raw.githubusercontent.com/Nefta11/AppMovil-MFY/main/src/public/1200x1200bb.jpg' },

];

const AlbumScreen = () => {
  const navigation = useNavigation();
  const [selectedSongId, setSelectedSongId] = React.useState(null);

  const handleSongPress = (id) => {
    setSelectedSongId(id);
  };

  return (
    <ReactNative.ScrollView style={styles.container}>
      <ReactNative.View style={styles.header}>
        <ReactNative.TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={34} color="red" />
        </ReactNative.TouchableOpacity>
        <ReactNative.Text style={styles.headerText}>Album</ReactNative.Text>
        <ReactNative.View />
      </ReactNative.View>

      <ReactNative.View style={styles.albumInfoContainer}>
        <ReactNative.Image
          style={styles.albumImage}
          source={{ uri: 'https://raw.githubusercontent.com/Nefta11/AppMovil-MFY/main/src/public/1200x1200bb.jpg' }}
        />
        <ReactNative.View style={styles.albumDetails}>
          <ReactNative.Text style={styles.albumTitle}>True</ReactNative.Text>
          <ReactNative.Text style={styles.albumArtist}>Avicii</ReactNative.Text>
          <ReactNative.Text style={styles.albumInfo}>2013   Electronica   15 canciones</ReactNative.Text>
        </ReactNative.View>
      </ReactNative.View>

      <ReactNative.View style={styles.songList}>
        {songs.map((song) => (
          <ReactNative.TouchableOpacity
            key={song.id}
            style={[
              styles.songCard,
              selectedSongId === song.id && styles.songCardSelected
            ]}
            onPress={() => handleSongPress(song.id)}
          >
            <ReactNative.Text style={styles.songNumber}>{song.id}</ReactNative.Text>
            <ReactNative.Image
              style={styles.songImage}
              source={{ uri: song.image }}
            />
            <ReactNative.View style={styles.songDetails}>
              <ReactNative.Text style={styles.songTitle}>{song.title}</ReactNative.Text>
              <ReactNative.Text style={styles.songArtist}>{song.artist}</ReactNative.Text>
            </ReactNative.View>
            <ReactNative.TouchableOpacity style={selectedSongId === song.id ? styles.viewLyricsButtonSelected : styles.viewLyricsButton}>
              <ReactNative.Text style={selectedSongId === song.id ? styles.viewLyricsTextSelected : styles.viewLyricsText}>Ver Letra</ReactNative.Text>
            </ReactNative.TouchableOpacity>
          </ReactNative.TouchableOpacity>
        ))}
      </ReactNative.View>
    </ReactNative.ScrollView>
  );
};

const styles = ReactNative.StyleSheet.create({
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
