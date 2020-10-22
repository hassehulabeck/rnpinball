import React, { useState } from "react";
import { Text, Pressable, StyleSheet } from "react-native";

const Player = (props) => {
    const [pressed, togglePressed] = useState(false);

    const touch = () => {
        let press = !pressed;
        togglePressed(press);
        props.touchad(props.index);
    };

    if (!pressed) {
        return (
            <Pressable onPress={touch}>
                <Text style={styles.item} id={props.index}>
                    {props.index + 1}: {props.player.first_name}{" "}
                    {props.player.last_name} ({props.player.wppr_points})
                </Text>
            </Pressable>
        );
    } else {
        return (
            <Text style={styles.item} id={props.index}>
                {props.index + 1}: {props.player.first_name}{" "}
                {props.player.last_name} ({props.player.wppr_points})
            </Text>
        );
    }
};

export default Player;

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
