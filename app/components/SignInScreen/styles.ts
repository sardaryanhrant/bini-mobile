import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    height: 300,
  },
  signInBlock: {
    width: "100%",
    height: 180,
    backgroundColor: "#ece7e7",
  },
  text: {
    fontSize: 17,
    padding: 10,
    marginTop: 7,
  },
  signupInput: {
    backgroundColor: "#fff",
  },
  nextToCard: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  reset: {
    backgroundColor: "#fff",
    marginTop: 0,
    padding: 8,
    alignItems: "center",
  },
  signin: {
    display: "flex",
    backgroundColor: "#ff671b",
    borderRadius: 4,
    padding: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    height: 42,
  },
  resetTitle: {
    fontSize: 15,
    color: "#000",
  },
  signTitle: {
    fontSize: 15,
    textTransform: "uppercase",
    color: "#fff",
  },
  signInWith: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 20,
  },
  signWith: {
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#000",
    padding: 8,
    marginRight: 10,
    width: 220,
    alignItems: "center",
  },
  facebook: {
    fontSize: 15,
    textTransform: "uppercase",
    color: "#3c5a99",
    marginLeft: 6,
    height: 42,
    display: "flex",
  },
  google: {
    fontSize: 15,
    textTransform: "uppercase",
    color: "#4285f4",
    marginLeft: 6,
    height: 42,
    display: "flex",
  },
  twitter: {
    fontSize: 15,
    textTransform: "uppercase",
    color: "#1da1f2",
    marginLeft: 6,
    height: 42,
    display: "flex",
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    alignSelf: "stretch",
    borderRadius: 10,
  },
  facIcon: {
    height: 5,
    width: 5,
  },
  googIcon: {
    height: 5,
    width: 5,
  },
  twIcon: {
    height: 5,
    width: 5,
  },
  step1: {}
});




export default styles;
