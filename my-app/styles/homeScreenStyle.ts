import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      backgroundColor: "#E3F2FD", // Light blue background
    },
    card: {
      width: "90%",
      backgroundColor: "#fff",
      padding: 25,
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 7, // Android shadow
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#BBDEFB",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#1E88E5",
      marginBottom: 15,
    },
    info: {
      fontSize: 18,
      color: "#444",
        marginBottom: 20,
        padding: 25,
        justifyContent: "center",
      alignItems: "center",
    },
    label: {
      fontWeight: "bold",
        color: "#0D47A1",
        padding: 200
    },
    button: {
      backgroundColor: "#1E88E5",
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 10,
      marginTop: 15,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 5,
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
      },
      logoutButton: {
          marginRight: 15,
          paddingVertical: 5,
          paddingHorizontal: 10,
          backgroundColor: "#f4511e",
          borderRadius: 5,
        }, 
      
        logoutText: {
          color: "#fff",
          fontSize: 16,
          fontWeight: "bold",
        },
  });