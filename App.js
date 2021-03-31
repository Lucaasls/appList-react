//primeiro import "import React from 'react';"
//Demais imports (componentes);
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';


//Componente de função
export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.Body}>
          <Text>Hello Word!</Text>
        </View>

        <View style={styles.Form}>
          <TextInput style={styles.Input}
          placeholderTextColor="#999"
          autoCorrect={true}
          placeholder="Adicionar Tarefa"
          maxLength={30}
          />
          <TouchableOpacity style={styles.Button}>
          <FontAwesome name={'plus'} size={15} color="#fff"/>
          </TouchableOpacity>
        </View>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20
  },
  Body: {
    flex: 1,
  },
  Form: {
    padding: 0,
    height: 60,
    justifyContent: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: 13,
    borderTopWidth: 1,
    borderColor: "#eee"
  },
  Input:{
    flex:1,
    height:40,
    backgroundColor:"#eee",
    borderRadius:4,
    paddingVertical:5,
    paddingHorizontal:10,
    borderWidth:1,
    borderColor:"#eee"
  },
  Button:{
    height:40,
    width:40,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#1c6cce",
    borderRadius:4,
    marginLeft:10
  }
});

//Componente de classe
/**
 export default class App1 extends Component{
   render(){
     return(
       <View>
       <Text>Hello</Text>
       </View>
       );
    }
  }
*/