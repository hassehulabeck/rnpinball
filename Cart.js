import React from "react";
import { Text, View } from "react-native";

const Cart = (props) => {
    return (
        <View>
            <Text>Varukorg</Text>
            <Text>Totalt: {Number(props.total).toFixed(2)} </Text>
        </View>
    );
};

export default Cart;
