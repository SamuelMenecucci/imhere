import { Home } from "@/screens/Home";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function App() {
  return (
    <>
      {/* Referente a barra de status do celular do usuário, aonde aparecem as informações de wifi, bateria, hora e etc. recomendado passarmos uma estilização diferente para ela para que o usuário não precise sair do nosso app para buscar alguma informação que aparece lá. */}
      <StatusBar style="inverted" />
      <Home />
    </>
  );
}
