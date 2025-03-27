import React, {useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/types";
import { styles } from "../../styles/homeScreenStyle"

type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<HomeScreenProps> = ({ route, navigation }) => {
    const { name, email, phone, place, gender } = route.params;
    
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => null,
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.logoutButton}>
                  <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
              ),
        });
      }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>User Details</Text>
        <Text style={styles.info}><Text style={styles.label}>Name:</Text> {name}</Text>
        <Text style={styles.info}><Text style={styles.label}>Email:</Text> {email}</Text>
        <Text style={styles.info}><Text style={styles.label}>Phone:</Text> {phone}</Text>
        <Text style={styles.info}><Text style={styles.label}>Place:</Text> {place}</Text>
        <Text style={styles.info}><Text style={styles.label}>Gender:</Text> {gender}</Text>

              <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

