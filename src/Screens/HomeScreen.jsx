import * as React from 'react';
import * as ReactNative from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MusicForYou from '../../svg/MusicForYou';

const images = [
  require('../public/banner siuu.png'),
  require('../public/banner_radar.jpg'),
  require('../public/the strokes.jpeg'),
];

const HomeScreen = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <ReactNative.ScrollView style={styles.container}>
      <ReactNative.View style={styles.logoContainer}>
        <MusicForYou width={200} height={90} />
      </ReactNative.View>

      <ReactNative.View style={styles.searchBar}>
  <ReactNative.TextInput
    style={[styles.searchInput, { fontSize: 20 }]} 
    placeholder="Buscar..."
    placeholderTextColor="red"
  />
  <Ionicons name="search-outline" size={20} color="red" />
</ReactNative.View>


      <ReactNative.Image
        style={styles.banner}
        source={images[currentImageIndex]}
      />

      <ReactNative.Text style={styles.sectionTitle}>Álbums</ReactNative.Text>
      <ReactNative.View style={styles.albumRow}>
        {Array.from({ length: 3 }).map((_, index) => (
          <ReactNative.View key={index} style={styles.albumCardSquare}>
            <ReactNative.View style={styles.albumImageContainer}>
              <ReactNative.Image
                style={styles.albumImageSquare}
                source={{ uri: 'https://raw.githubusercontent.com/Nefta11/AppMovil-MFY/main/src/public/Parachute.jpg' }}
              />
            </ReactNative.View>
            <ReactNative.Text style={styles.albumText}>Parachutes {index + 1}</ReactNative.Text>
            <ReactNative.Text style={styles.albumText}>Coldplay</ReactNative.Text>
          </ReactNative.View>
        ))}

  {Array.from({ length: 3 }).map((_, index) => (
          <ReactNative.View key={index} style={styles.albumCardSquare}>
            <ReactNative.View style={styles.albumImageContainer}>
              <ReactNative.Image
                style={styles.albumImageSquare}
                source={{ uri: 'https://raw.githubusercontent.com/Nefta11/AppMovil-MFY/main/src/public/1200x1200bb.jpg' }}
              />
            </ReactNative.View>
            <ReactNative.Text style={styles.albumText}>True {index + 1}</ReactNative.Text>
            <ReactNative.Text style={styles.albumText}>Avicii</ReactNative.Text>
          </ReactNative.View>
        ))}

      </ReactNative.View>

      <ReactNative.Text style={styles.sectionTitle}>Artistas</ReactNative.Text>
      <ReactNative.View style={styles.ArtistaRow}>
        {Array.from({ length: 3 }).map((_, index) => (
          <ReactNative.View key={index} style={styles.ArtistaCardRound}>
            <ReactNative.View style={styles.ArtistaImageContainer}>
              <ReactNative.Image
                style={styles.ArtistaImageRound}
                source={{ uri: 'https://raw.githubusercontent.com/Nefta11/AppMovil-MFY/main/src/public/coldplay.jpeg' }}
              />
            </ReactNative.View>
            <ReactNative.Text style={styles.ArtistaText}>Coldplay</ReactNative.Text>
          </ReactNative.View>
        ))}

{Array.from({ length: 3 }).map((_, index) => (
          <ReactNative.View key={index} style={styles.ArtistaCardRound}>
            <ReactNative.View style={styles.ArtistaImageContainer}>
              <ReactNative.Image
                style={styles.ArtistaImageRound}
                source={{ uri: 'https://raw.githubusercontent.com/Nefta11/AppMovil-MFY/main/src/public/tf.jpeg' }}
              />
            </ReactNative.View>
            <ReactNative.Text style={styles.ArtistaText}>Taylor Swift</ReactNative.Text>
          </ReactNative.View>
        ))}
      </ReactNative.View>
    </ReactNative.ScrollView>
  );
};

const styles = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: -29,
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
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
