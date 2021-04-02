//primeiro import "import React from 'react';"
//Demais imports (componentes);
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
  Alert,
  AsyncStorage
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';


//Componente de função
export default function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  //logica - Adicionar
  async function addTask() {
    if (newTask == "") {
      return;
    }

    const search = task.filter(task => task == newTask);

    if (search.length !== 0) {
      Alert.alert("Atenção", "Já Existe uma tarefa com este 'Nome'!");
      return;
    }
    setTask([...task, newTask]);
    setNewTask('');

    Keyboard.dismiss();
  }

  async function removeTask(item) {
    Alert.alert("Deletar Task", "Tem certeza que deseja excluir esta tarefa?",
      [
        {
          text: "Cancel",
          onPress: () => {
            return;
          },
          style: 'cancel'
        },
        {
          text: "Ok",
          onPress: () => setTask(task.filter(tasks => tasks !== item))
        }
      ],
      { cancelable: false }
    );
  }

  useEffect(() => {
    async function dados() {
      AsyncStorage.setItem("task",JSON.stringify(task))
    }
    dados()
  }, [task])
  return (
    <>
      <View style={styles.container}>
        <View style={styles.Body}>
          <FlatList
            style={styles.FlatList}
            data={task}
            keyExtractor={item => item.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.ContainerView}>
                <Text style={styles.Texto}>{item}</Text>
                <TouchableOpacity onPress={() => removeTask(item)}>
                  <FontAwesome name={'trash'} size={15} color="#f64c75" />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>

        <View style={styles.Form}>
          <TextInput style={styles.Input}
            placeholderTextColor="#999"
            autoCorrect={true}
            placeholder="Adicionar Tarefa"
            maxLength={30}
            onChangeText={text => setNewTask(text)}
            value={newTask}
          />
          <TouchableOpacity style={styles.Button} onPress={() => addTask()}>
            <FontAwesome name={'plus'} size={15} color="#fff" />
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
  Input: {
    flex: 1,
    height: 40,
    backgroundColor: "#eee",
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#eee"
  },
  Button: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c6cce",
    borderRadius: 4,
    marginLeft: 10
  },
  FlatList: {
    flex: 1,
    marginTop: 5
  },
  ContainerView: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 4,
    backgroundColor: "#eee",

    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#eee"
  },
  Texto: {
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
    marginTop: 4,
    textAlign: "center"
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