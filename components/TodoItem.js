import { StyleSheet, View, Text } from "react-native";

function TodoItem(props) {
  return (
    <View style={styles.todoListItem}>
      <Text style={styles.todoItemText}>{props.text}</Text>
    </View>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  todoListItem: {
    marginVertical: 5,
    padding: 12,
    borderRadius: 6,
    borderColor: "gray",
    borderWidth: 1.5,
    backgroundColor: "#696968",
  },

  todoItemText: {
    color: "white",
    fontWeight: "bold",
  },
});
