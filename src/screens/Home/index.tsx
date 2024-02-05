import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "./components/Participant";

export function Home() {
  const participants = [
    "Samuel",
    "Juliana",
    "Zoe",
    "Joana",
    "Guilherme",
    "Thiago",
    "Matheus",
    "Thais",
    "Ursula",
  ];

  const handleParticipantAdd = () => {
    if (participants.includes("Samuel")) {
      return Alert.alert(
        "Participanete existe!",
        "Já existe um participant na lista com esse nome"
      );
    }
  };

  const handleParticipantRemove = (name: string) => {
    // https://reactnative.dev/docs/alert
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      { text: "Sim", onPress: () => Alert.alert("Deletado") },
      { text: "Não", style: "cancel" },
    ]);
  };

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

      {/* https://reactnative.dev/docs/scrollview */}
      {/* ScrollView renderiza todos os seus componentes filhos de reação de uma só vez, mas isso tem uma desvantagem de desempenho. */}
      {/*FlatList renderiza itens lentamente, quando eles estão prestes a aparecer, e remove itens que rolam para fora da tela para economizar memória e tempo de processamento. */}
      {/* https://reactnative.dev/docs/flatlist */}
      <FlatList
        //funciona como a key que utilizamos para algum componente que seja um array.
        keyExtractor={(item) => item}
        //o meu array
        data={participants}
        //o que eu irei renderizar para cada elemento do meu array
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        //para renderizar algum componente quando a lista estiver vazia
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
