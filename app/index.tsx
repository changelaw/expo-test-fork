import { Text, View, StyleSheet } from "react-native";
import * as Icons from "react-native-heroicons/micro"
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Home
        <Icons.SparklesIcon color='blue' />
        screen from CC
      </Text>
      <Icons.ArchiveBoxIcon color='red' />
      <Link href="/about" style={styles.button}>
        Goto About
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'yellow',
  },
  button: {
    fontSize: 20,
    // textDecorationLine: 'underline',
    color: 'white',
  }
})
