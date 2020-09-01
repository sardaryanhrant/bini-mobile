import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  choosePhoto: {
    display: "flex",
    justifyContent: 'space-between',
  },
  selectAvatarImage: {
    width: 100,
    height: 100,
    maxWidth: "100%",
    borderRadius: 100,
    marginTop: 10,
  },
  chooseImg: {
    backgroundColor: "#ff671b",
    marginTop: 10,
    borderRadius: 4,
    width: 130,
    alignItems: "center",
    height: 40,
    paddingTop: 0,
    marginLeft: 10
  },
  orange: {
    color: '#ff671b',
    fontSize: 18,
    fontWeight: '500'
  },
  signinWithContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chooseIcon: {
    width: 30,
    height: 30,
  },
  choose: {
    marginTop: 10,
    textTransform: "uppercase",
    fontSize: 16,
  },
  delete: {
    marginTop: 10,
    textTransform: "uppercase",
    fontSize: 16,
  },
  dialogActions: {
    flexDirection: "column",
  },
  deleteProfile: {
    backgroundColor: "#ff671b",
    borderRadius: 4,
    width: 100,
    alignItems: "center",
    height: 40,
    paddingTop: 0,
    marginLeft: 10,
    marginTop: 4
  }
});

export default styles;
