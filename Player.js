import React, { useState } from "react";
import { Text, Pressable, StyleSheet } from "react-native";

const Player = (props) => {
    const [pressed, togglePressed] = useState(false);

    const touch = () => {
        if (!pressed) {
            props.toBuy(props.index);
        } else {
            props.toSell(props.player.player_id);
        }
        let press = !pressed;
        togglePressed(press);
    };

    // Check if player is in cart, then set Player to pressed.
    if (props.cart.includes(props.player) && !pressed) {
        togglePressed(true);
    }

    if (!pressed) {
        let disableStyle = false;
        if (
            props.total + Number(props.player.wppr_points) >
            Number(props.ceiling)
        ) {
            disableStyle = true;
        }
        return (
            <Pressable onPress={touch}>
                <Text
                    style={[
                        styles.item,
                        disableStyle ? styles.tooPricy : styles.other,
                    ]}
                    id={props.index}
                >
                    {props.index + 1}: {props.player.first_name}{" "}
                    {props.player.last_name} (
                    {Number(props.player.wppr_points).toFixed(2)}){disableStyle}
                </Text>
            </Pressable>
        );
    } else {
        return (
            <Pressable onPress={touch}>
                <Text style={[styles.item, styles.depressed]} id={props.index}>
                    {props.index + 1}: {props.player.first_name}{" "}
                    {props.player.last_name} (
                    {Number(props.player.wppr_points).toFixed(2)})
                </Text>
            </Pressable>
        );
    }
};

export default Player;

const styles = StyleSheet.create({
    item: {
        padding: 10,
        backgroundColor: "#eed",
        marginVertical: 3,
        fontSize: 18,
        height: 44,
    },
    depressed: {
        backgroundColor: "lightgreen",
        fontWeight: "400",
    },
    tooPricy: {
        backgroundColor: "#888",
        color: "#ccc",
    },
    other: {
        color: "#111",
    },
});
