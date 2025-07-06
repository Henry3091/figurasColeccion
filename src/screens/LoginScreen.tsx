
import React, { useState } from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import { supabase } from "../supabase";  // Ajusta la ruta si es necesario
import { styles } from "../style/Styles";

export default function LoginScreen({ navigation }: any) {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  async function Login() {
    if (!correo || !contrasena) {
      Alert.alert("Error", "Por favor, ingresa tu correo y contraseña.");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: correo,
        password: contrasena,
      });

      if (error) {
        Alert.alert("Error de Inicio de Sesión", error.message);
      } else if (data && data.user) {
        Alert.alert("Éxito", "¡Inicio de sesión exitoso!");
        navigation.navigate("List"); // Redirige a la pantalla de lista
      } else {
        Alert.alert(
          "Error",
          "Credenciales inválidas o problema de autenticación."
        );
      }
    } catch (err: any) {
      Alert.alert("Error Inesperado", "Ocurrió un error.");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresar correo"
        keyboardType="email-address"
        autoCapitalize="none"
        value={correo}
        onChangeText={setCorreo}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingresar contraseña"
        secureTextEntry
        value={contrasena}
        onChangeText={setContrasena}
      />

      <Button title="Iniciar Sesión" onPress={Login} />

      <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
        <Text style={styles.linkText}>
          ← Regresar a la pantalla de bienvenida
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.linkText}>
          ¿No tienes cuenta? Crea una cuenta
        </Text>
      </TouchableOpacity>
    </View>
  );
}
