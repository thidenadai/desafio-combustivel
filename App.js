import React, { useState } from "react";
import { Text, View, TextInput, Image, TouchableOpacity, StyleSheet, Modal, Button } from "react-native";
import { styles } from "./src/styles/StyleSheet";

export default function App() {

  const [alcool, setAlcool] = useState("");
  const [gasolina, setGasolina] = useState("");
  const resultado = alcool/gasolina;

  const [visible, setVisible] = useState(false);

  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };

  

  calcular = () => {
    console.log(resultado);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img1}
      source={require("./src/images/logo.png")}/>
      <Text style={styles.Texto}>Qual melhor opção?</Text>
      <Text style={styles.label}>Preço do Álcool por Litro:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setAlcool(text)}
        value={alcool}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Preço da Gasolina por Litro:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setGasolina(text)}
        value={gasolina}
        keyboardType="numeric"
      />
      

   
     
      <TouchableOpacity style={styles.button} onPress={() => visModal(true)}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      {/* true or false*/}
      <Modal transparent={true} animationType="fade" visible={visible}>
      <View style={styles.container}>
     
      
      <View style={styles.modalalg}>
          <View style={styles.modal1}>
          <Image style={styles.img2} source={require("./src/images/gas.png")}/>
          <Text style={styles.textvalor}>Com o valor de:</Text>
          {resultado < 0.7 ? <Text style={styles.resultado}>Compensa usar Álcool</Text> : <Text style={styles.resultado}>Compensa usar Gasolina</Text> }
          <Text style={styles.textgasolina}>Gasolina: R$ {gasolina}</Text>
          <Text style={styles.textalcool}>Álcool: R$ {alcool}</Text>
          <TouchableOpacity style={styles.button} onPress={() => visModal(false)}>
        <Text style={styles.buttonText}>voltar</Text>
      </TouchableOpacity>
          
          </View>
        </View>
        </View>
      </Modal>
      
    </View>
  );
}


