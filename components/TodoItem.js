import { StyleSheet, View, Text, Pressable } from "react-native";

function TodoItem(props) {
  return (
    <View style={styles.todoListItem}>
      <Pressable android_ripple={"#ddd"} onPress={props.onDelete.bind(this, props.id)}>
        <Text style={styles.todoItemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  todoListItem: {
    marginVertical: 5,
    borderRadius: 6,
    borderColor: "gray",
    borderWidth: 1.5,
    backgroundColor: "#696968",
  },

  todoItemText: {
    color: "white",
    fontWeight: "bold",
    padding: 12,
  },
});
