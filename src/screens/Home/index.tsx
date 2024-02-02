import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Participant } from "./components/Participant";

export function Home() {
  const handleParticipantAdd = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          style={styles.input}
          keyboardType="default" //https://reactnative.dev/docs/textinput#keyboardtype
        />

        {/* https://reactnative.dev/docs/touchableopacity */}
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant />
    </View>
  );
}
