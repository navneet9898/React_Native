
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 21,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d4edda", // Light Green Background
    padding: 60,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    gap: 45, // Provides even spacing between inputs (React Native 0.71+)
  },
  input: {
    width: "85%",
    height: 120,
    padding: 25,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20, // Increased spacing between inputs
  },
  button: {
    width: "85%",
    height: 80,
    backgroundColor: "#28a745",
    padding: 20,
    borderRadius: 8,
      alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});