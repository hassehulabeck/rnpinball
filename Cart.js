import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { PlayerContext } from "./PlayerContext";

const Cart = () => {
    return (
        <PlayerContext.Consumer>
            {(context) => (
                <View style={styles.top}>
                    <Text>Varukorg</Text>
                    <Text>Totalt: {Number(context.total).toFixed(2)} </Text>
                </View>
            )}
        </PlayerContext.Consumer>
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
