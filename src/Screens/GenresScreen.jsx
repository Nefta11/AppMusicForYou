import * as ReactNative from 'react-native';

const GenresScreen = () => {
  // Lista de géneros musicales
  const genres = [
    'Pop', 'Rock', 'K-Pop','Jazz', 'Hip Hop',
    'Country', 'Disco', 'Funk', 'Reggaetón',
    'Cumbia', 'Latino', 'Punk', 'Salsa', 'Merengue'
  ];

  return (
    <ReactNative.View style={styles.container}>
      <ReactNative.Text style={styles.headerText}>Géneros Musicales</ReactNative.Text>
      <ReactNative.View style={styles.grid}>
        {genres.map((genre, index) => (
          <ReactNative.TouchableOpacity key={index} style={styles.genreButton}>
            <ReactNative.Text style={styles.genreText}>{genre}</ReactNative.Text>
          </ReactNative.TouchableOpacity>
        ))}
      </ReactNative.View>
    </ReactNative.View>
  );
};

const styles = ReactNative.StyleSheet.create({
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
    marginBottom: 40
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
