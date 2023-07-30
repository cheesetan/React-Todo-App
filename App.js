import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, ScrollView } from "react-native";

import TodoItem from "./components/TodoItem";
import InputContainer from "./components/InputContainer";
import BlankItem from "./components/BlankItem";

export default function App() {
  const [todoItemsArray, updateTodoItemsArray] = useState([]);

  function addTodoItem(todoInputText) {
    if (todoInputText != "") {
      updateTodoItemsArray((currentTodoItemsArray) => [
        ...todoItemsArray,
        { id: Math.random().toString(), text: todoInputText },
      ]);
    }
  }

  return (
    <View style={styles.container}>
      <InputContainer onButtonPress={addTodoItem} />

      <View style={styles.todoContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={todoItemsArray}
            renderItem={(todoItem) => {
              return <TodoItem text={todoItem.item.text}></TodoItem>;
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            style={{ paddingTop: 15, paddingBottom: 0 }}
            showsVerticalScrollIndicator={false}
          />
          <BlankItem />
        </ScrollView>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 15,
  },

  todoContainer: {
    flex: 14,
  },
});
