import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  chooseIcon: {
    width: 25,
    height: 25,
  },
  primaryColor: {
    borderWidth: 1,
    borderColor: "#ff671b",
    backgroundColor: "red",
  },
  checkbox: {
    alignSelf: "center",
    width: 20,
    height: 20,
  },
  resetThemeContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reset: {
    marginTop: 10,
    textTransform: "uppercase",
    fontSize: 16,
  },
  resetTheme: {
    backgroundColor: "#ff671b",
    borderRadius: 4,
    width: 100,
    alignItems: "center",
    height: 40,
    paddingTop: 0,
    marginLeft: 10,
    marginTop: 4,
  },
});

export default styles;
