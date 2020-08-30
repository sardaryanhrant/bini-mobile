import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemWrapper: {
    display: 'flex',
    padding: 10,
    borderRadius: 12,
    borderColor: "#ff671b",
    borderWidth: 1,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    height: 120
  },
  imageWrapper: {
    marginRight: 12
  },
  itemImage: {
    borderRadius: 12,
    width: 100,
    height: 100
  },
  details: {
    display: 'flex',
    alignItems: 'flex-start',
    height: '100%',
    flex:1,
    justifyContent:'space-between',
    flexDirection: 'column',
  },
  itemTitle: {
    fontSize: 20
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: 'flex-end',
    backgroundColor:"#ff671b",
    padding: 3,
    borderRadius: 10,
    color: "#fff"
  },
  itemCount: {
    fontSize: 16,
    alignSelf: 'flex-end',
  },
  details2: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-between"
  }
})

export default styles;
