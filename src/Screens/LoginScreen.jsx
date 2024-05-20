// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import MusicForYou from '../../svg/MusicForYou'; // Asegúrate de que la ruta es correcta

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    // Aquí se manejaría la autenticación con la API, por ahora solo navegamos a MainTabs
    navigation.navigate('MainTabs');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <MusicForYou width={200} height={90} />
        <Text style={styles.title}>Iniciar Sesión</Text>
        <Text style={styles.subtitle}>Por favor ingresa tu correo y contraseña para acceder</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.iconContainer}>
            <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="grey" />
          </TouchableOpacity>
        </View>
        <Text style={styles.createAccountText}>
          ¿No tienes cuenta?{' '}
          <Text onPress={() => navigation.navigate('CrearCuenta')} style={styles.linkText}>
            Crea una
          </Text>
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Acceder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '85%',
    padding: 20,
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 25,
    marginBottom: 25,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 25,
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  iconContainer: {
    padding: 5,
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  createAccountText: {
    marginTop: 10,
    fontSize: 14,
    color: 'grey',
    textAlign: 'center',
    marginBottom: 10,
  },
  linkText: {
    color: 'blue',
  },
});

export default LoginScreen;
