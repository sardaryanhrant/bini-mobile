import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    display: 'flex',
    height: 300,
  },
  signUpBlock: {
    width: "100%",
    height: 300,
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 17,
    padding: 10,
    marginTop: 7
  },
  signupInput: {
    backgroundColor: 'transparent'
  },
  nextToCard: {
    alignItems: 'flex-end'
  },
  nextBtn: {
    backgroundColor: '#b5b5b5',
    marginTop: 10,
    borderRadius: 4,
    padding: 7,
  },
  next: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#444'
  },
  step1: {}
});

export default styles;
