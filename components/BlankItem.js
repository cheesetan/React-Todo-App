import { StyleSheet, View } from "react-native";

function BlankItem() {
  return <View style={styles.blankListItem} />;
}

export default BlankItem;

const styles = StyleSheet.create({
  blankListItem: {
    marginVertical: 5,
    padding: 12,
    borderRadius: 6,
  },
});
