// CrearCuentaScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import MusicForYou from "../../svg/MusicForYou"; // Asegúrate de que la ruta es correcta

const CrearCuentaScreen = () => {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleCreateAccount = () => {
    // Aquí se manejaría la creación de la cuenta con la API
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <MusicForYou width={200} height={90} />
        <Text style={styles.title}>Crea una cuenta</Text>
        <Text style={styles.subtitle}>
          Completa los siguientes campos para crear tu cuenta
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellidos"
          value={apellidos}
          onChangeText={setApellidos}
        />
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
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.iconContainer}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="grey"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.createAccountText}>
          ¿Ya tienes cuenta?{" "}
          <Text
            onPress={() => navigation.navigate("Login")}
            style={styles.linkText}
          >
            Iniciar sesión
          </Text>
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
          <Text style={styles.buttonText}>Crear Cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "85%",
    padding: 20,
    borderRadius: 25,
    backgroundColor: "white",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 15,
    color: "black",
  },
  subtitle: {
    fontSize: 16,
    color: "grey",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 18,
    marginBottom: 25,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 18,
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
    backgroundColor: "red",
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
    width: "70%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  createAccountText: {
    marginTop: 10,
    fontSize: 14,
    color: "grey",
    textAlign: "center",
    marginBottom: 10,
  },
  linkText: {
    color: "blue",
  },
});
export default CrearCuentaScreen;
