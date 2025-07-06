import React from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';

type Figura = {
  id: string;
  nombre: string;
  precio: string;
  imagen: string;
};

const figuras: Figura[] = [
  {
    id: '1',
    nombre: 'Goku Super Saiyan',
    precio: '$25',
    imagen: 'https://i.imgur.com/1.png',
  },
  {
    id: '2',
    nombre: 'Naruto Sage Mode',
    precio: '$30',
    imagen: 'https://i.imgur.com/2.png',
  },
  {
    id: '3',
    nombre: 'Luffy Gear 5',
    precio: '$35',
    imagen: 'https://i.imgur.com/3.png',
  },
];

export default function ListScreen() {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={figuras}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagen }} style={styles.image} />
            <Text style={styles.name}>{item.nombre}</Text>
            <Text style={styles.price}>{item.precio}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 15, backgroundColor: '#fff', padding: 10, borderRadius: 8, alignItems: 'center' },
  image: { width: 100, height: 100 },
  name: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
  price: { color: 'green' }
});

