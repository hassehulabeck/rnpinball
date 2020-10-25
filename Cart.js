import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Cart = (props) => {
    return (
        <View style={styles.top}>
            <Text>Varukorg</Text>
            <Text>Totalt: {Number(props.total).toFixed(2)} </Text>
        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    top: {
        flex: 3,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
});
