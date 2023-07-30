import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter a todo item' style={styles.textInput} />
        <Button title="Add item" />
      </View>

      <View style={styles.listContainer}>
        <Text>List goes here...</Text>
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

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 15,
    marginBottom: 15,
  },

  textInput: {
    padding: 10,
    borderWidth: 1.2,
    borderColor: "#ccc",
    height: 40,
    width: "80%",
    marginRight: 8,
    borderRadius: 10,
  },

  listContainer: {
    flex: 14
  },
});
