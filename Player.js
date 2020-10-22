import React, { useState } from "react";
import {
    Text,
    Pressable,
    StyleSheet,
    RecyclerViewBackedScrollViewComponent,
} from "react-native";

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

    if (!pressed) {
        return (
            <Pressable onPress={touch}>
                <Text style={styles.item} id={props.index}>
                    {props.index + 1}: {props.player.first_name}{" "}
                    {props.player.last_name} (
                    {Number(props.player.wppr_points).toFixed(2)})
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
        marginVertical: "0.2em",
        fontSize: 18,
        height: 44,
    },
    depressed: {
        backgroundColor: "#477",
        fontWeight: 700,
    },
});
