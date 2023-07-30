import { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

function InputContainer(props) {
  const [todoInputText, updateTodoInputText] = useState("");

  function todoTextInputChanged(todoInputText) {
    updateTodoInputText(todoInputText);
  }

  function addTodoItem() {
    props.onButtonPress(todoInputText);
    updateTodoInputText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter a todo item"
        style={styles.textInput}
        onChangeText={todoTextInputChanged}
        clearButtonMode="always"
        value={todoInputText}
      />

      <Button title="Add item" onPress={addTodoItem} />
    </View>
  );
}

export default InputContainer;

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderWidth: 1.2,
    borderColor: "#ccc",
    height: 40,
    width: "80%",
    marginRight: 8,
    borderRadius: 10,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
});
