import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  Image,
} from "react-native";
import { TextInput, List } from "react-native-paper";
import styles from "./styles";

export function BasketItem(props: any): any {
  const item = {...props.item};
  console.log(item)
  return (
    <View style={styles.itemWrapper}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.itemImage}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.itemTitle}>{item.number}X {item.name}</Text>
        <View style={styles.details2}>
          <Text style={styles.itemCount}>Price: ${item.price}</Text>
        <Text style={styles.itemPrice}>Total ${(item.number * item.price).toPrecision(3)}</Text>
        </View>
      </View>
    </View>
  );
}
