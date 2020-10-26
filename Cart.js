import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { PlayerContext } from "./PlayerContext";

const Cart = () => {
    return (
        <PlayerContext.Consumer>
            {(context) => (
                <View style={styles.top}>
                    <Text>Varukorg</Text>
                    <FlatList
                        data={context.cart}
                        renderItem={({ item, index }) => (
                            <Text style={styles.player}>
                                {item.first_name} {item.last_name}
                            </Text>
                        )}
                    ></FlatList>
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
        alignItems: "stretch",
    },
    player: {
        flex: 1,
        backgroundColor: "orange",
        color: "white",
        marginBottom: 4,
        paddingVertical: 6,
        paddingHorizontal: 12,
        justifyContent: "space-around",
    },
});
