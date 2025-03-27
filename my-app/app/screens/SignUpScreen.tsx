import React, { useState } from 'react';
import { View, TextInput,TouchableOpacity,Text} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import {styles} from "../../styles/commonStyle"

type SignupScreenProps = StackScreenProps<RootStackParamList, 'Signup'>;

const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [place, setPlace] = useState('');
  const [gender, setGender] = useState('');

  const handleSignup = () => {
    navigation.navigate('Home', { name, email, phone, place, gender });
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Name" style={styles.input} onChangeText={setName} />
      <TextInput placeholder="Email" style={styles.input} onChangeText={setEmail} />
      <TextInput placeholder="Phone Number" style={styles.input} onChangeText={setPhone} />
      <TextInput placeholder="Place" style={styles.input} onChangeText={setPlace} />
      <TextInput placeholder="Gender" style={styles.input} onChangeText={setGender} />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
      <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;