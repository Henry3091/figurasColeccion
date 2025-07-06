import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: "#eaf4f4",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#a0a0a0",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    marginBottom: 20,
    fontSize: 16,
    color: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
//estilos de iniico

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#222',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 40,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#4CAF50',
  },
  secondaryButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#4CAF50',
  },

  primaryButtonText: {
    color: '#fff',
  },
  secondaryButtonText: {
    color: '#4CAF50',
  },
  linkText: {
  marginTop: 20,
  color: "#007AFF",
  fontSize: 16,
  textAlign: "center",
},
// stilos de lista
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
    nombre: {
    fontSize: 18,
  },
    categoria: {
    fontSize: 14,
    color: 'gray',
  },


});
