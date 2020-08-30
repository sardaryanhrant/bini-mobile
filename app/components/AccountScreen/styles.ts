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
  signinWithContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chooseIcon: {
    width: 20,
    height: 20,
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
    marginLeft: 10
  }
});

export default styles;
