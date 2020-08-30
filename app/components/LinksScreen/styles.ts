import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  linksContent: {
    flexDirection: "column",
  },
  facIcon: {
    height: 25,
    width: 25,
  },
  googIcon: {
    height: 25,
    width: 25,
  },
  twIcon: {
    height: 25,
    width: 25,
  },
  facebook: {
    fontSize: 15,
    textTransform: "uppercase",
    color: "#3c5a99",
    display: "flex",
    marginTop: 10,
  },
  google: {
    fontSize: 15,
    textTransform: "uppercase",
    color: "#4285f4",
    display: "flex",
    marginTop: 10,
  },
  twitter: {
    fontSize: 15,
    textTransform: "uppercase",
    color: "#1da1f2",
    display: "flex",
    marginTop: 10,
  },
  linkIcon: {
    marginTop: 0
  },
});

export default styles;
