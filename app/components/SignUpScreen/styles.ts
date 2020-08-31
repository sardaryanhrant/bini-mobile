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
  signUpBlock: {
    width: "100%",
    height: 300,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 17,
    padding: 10,
    marginTop: 7,
  },
  signupInput: {
    backgroundColor: "transparent",
  },
  nextToCard: {
    alignItems: "flex-end",
  },
  nextBtn: {
    backgroundColor: "#b5b5b5",
    marginTop: 10,
    borderRadius: 4,
    padding: 7,
    width: 60,
  },
  next: {
    fontSize: 16,
    textTransform: "uppercase",
    color: "#444",
  },
  step1: {},
  inputHalf: {
    display: "flex",
    width: "44%",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  choosePhoto: {
    display: "flex",
    alignItems: "center",
  },
  selectAvatarImage: {
    width: 120,
    height: 120,
    maxWidth: "100%",
    borderRadius: 100,
  },
  chooseImg: {
    backgroundColor: "#ff671b",
    marginTop: 10,
    borderRadius: 4,
    width: 150,
    alignItems: "center",
    height: 40,
    paddingTop: 0,
  },
  signinWithContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chooseIcon: {
    width: 25,
    height: 25,
  },
  choose: {
    marginTop: 10,
    textTransform: "uppercase",
    fontSize: 17
  },
  dialogActions: {
    flexDirection: 'column',
  },
});

export default styles;
