import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    height: '100%'
  },
  logoOrange: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 30,
  },
  orangeLogo: {
    maxWidth: "100%",
    height: 170,
    width: 200,
  },
  bini: {
    fontSize: 22,
    marginTop: 10,
    letterSpacing: 1
  },
  text: {
    fontSize: 16
  },
  signInUp: {
    justifyContent: "space-between",
    marginBottom: 30
  },
  signBtn: {
    marginBottom: 10,
  },
  sign: {
    backgroundColor: "#ff671b",
    color: "#fff",
    textTransform: "uppercase",
    width: 200,
    textAlign: "center",
    borderRadius: 6,
    padding: 10,
    borderColor: "#000",
    fontSize: 14,
    borderWidth: 1,
    letterSpacing: 1
  },
});

export default styles;
