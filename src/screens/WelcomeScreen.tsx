import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export default function WelcomeScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bienvenido a la Tienda de Figuras de Coleccion</Text>
      <Button title="Iniciar Sesión" onPress={() => navigation.navigate('Login')} />
      <Button title="Registrarse" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}

