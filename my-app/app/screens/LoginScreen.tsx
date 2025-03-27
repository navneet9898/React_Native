import React, { useState } from "react";
import { View, TextInput,TouchableOpacity, Button,Text, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/types"; // Ensure the correct import
import {styles} from "../../styles/commonStyle"

type LoginScreenProps = StackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("");
  const [gender, setGender] = useState("");

  const handleLogin = () => {
    navigation.navigate("Home", { name, email, phone, place, gender });
  };

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Name" 
        style={styles.input} 
        onChangeText={setName} 
        placeholderTextColor="#888"
      />
      <TextInput 
        placeholder="Email" 
        style={styles.input} 
        onChangeText={setEmail} 
        keyboardType="email-address" 
        placeholderTextColor="#888"
      />
      <TextInput 
        placeholder="Phone Number" 
        style={styles.input} 
        onChangeText={setPhone} 
        keyboardType="phone-pad" 
        placeholderTextColor="#888"
      />
      <TextInput 
        placeholder="Place" 
        style={styles.input} 
        onChangeText={setPlace} 
        placeholderTextColor="#888"
      />
      <TextInput 
        placeholder="Gender" 
        style={styles.input} 
        onChangeText={setGender} 
        placeholderTextColor="#888"
      />
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;