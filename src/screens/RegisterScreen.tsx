import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { styles } from "../style/Styles";
import { supabase } from "../supabase"; // Ajusta la ruta si es necesario

export default function RegisterScreen({ navigation }: any) {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  async function registrar() {
    if (!correo || !contrasena) {
      Alert.alert("Error", "Por favor ingresa correo y contraseña.");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: correo,
      password: contrasena,
    });

    if (error) {
      Alert.alert("Error al registrar", error.message);
    } else if (data.user) {
      Alert.alert(
        "Registro exitoso",
        "Se ha enviado un correo de confirmación."
      );
      navigation.navigate("Login"); // Después del registro lleva a login
    } else {
      Alert.alert(
        "Atención",
        "Usuario creado pero falta confirmación por correo."
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar usuario</Text>

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

      <Button title="Registrar" onPress={registrar} />

      <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
        <Text style={styles.linkText}>
          ← Regresar a la pantalla de bienvenida
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.linkText}>
          Ir al Login si ya tienes cuenta
        </Text>
      </TouchableOpacity>
    </View>
  );
}
