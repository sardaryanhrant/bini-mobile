import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity, AsyncStorage } from "react-native";
import { TextInput, List } from "react-native-paper";
import io from "socket.io-client";
import styles from "./styles";
import { BasketItem } from "../../components/BasketItem/BasketItem";

export function BasketScreen(props: any): any {
  const items = [
    {
      number: 2,
      price: 1.29,
      name: "Snickers",
      image:
        "https://www.bigw.com.au/medias/sys_master/images/images/h45/h70/11729198874654.jpg",
    },
    {
      number: 3,
      price: 2.49,
      name: "Great Value Salted Butter",
      image:
        "https://i5.walmartimages.ca/images/Enlarge/650/701/6000200650701.jpg",
    },
  ];

  const [basket, setBasket] = useState(items);

  const socket = io("https://bini-backend.herokuapp.com", {
    transports: ["websocket", "polling", "flashsocket"],
  });

  const createData = (name, number, price) => {
    var price, image;

    if (name == "Snickers") {
      image =
        "https://www.bigw.com.au/medias/sys_master/images/images/h45/h70/11729198874654.jpg";
    } else if (name == "Tiktak") {
      image =
        "https://sc01.alicdn.com/kf/HTB1v8Y1KpXXXXXoXVXXq6xXFXXXH.jpg_350x350.jpg";
    } else if (name == "Lipton") {
      image =
        "https://www.ocado.com/productImages/283/283029011_0_640x640.jpg?identifier=47808fbb0596dc42ee400ac57c4cebcc";
    }
    return { name, number, price, total: price * number, image };
  };

  useEffect(() => {
    AsyncStorage.getItem("userData").then((userData: string) => {
      const user = JSON.parse(userData);
      console.log("uid", user.user.uid);
      socket.emit("login", {
        message: "I'm connected!",
        userId: user.user.uid,
      });

      socket.on("message", (msg: any) => {
        console.log("msg", msg);

        switch (msg["type"]) {
          case "updateBasket":
            const { basket } = msg["data"];

            const newBasket = basket.map(({ name, number, price }) =>
              createData(name, number, price)
            );

            console.log("newBasket", newBasket);
            setBasket(newBasket);
            break;

          case "checkoutOccurred":
            console.log("checkoutOccurred");
            // setHasCheckoutOccured(true);
            // openCheckout();
            break;

          default:
            break;
        }

        console.log("basket", basket);
      });
    });
  }, []);

  return (
    <ScrollView style={styles.basketWrapper}>
      {basket.map((item, index) => (
        <BasketItem key={index} item={item} />
      ))}
    </ScrollView>
  );
}
