import React from "react";
import { Pressable } from "react-native";

const Player = (props) => {
    let pressed = false;

    if (pressed) {
        return (
            <Pressable onPress={() => props.touchad()}>
                <Text style={props.styles.item} id={index}>
                    {index + 1}: {props.item.first_name} {props.item.last_name}{" "}
                    ({props.item.wppr_points})
                </Text>
            </Pressable>
        );
    } else {
        return (
            <Text style={props.styles.item} id={index}>
                {index + 1}: {props.item.first_name} {props.item.last_name} (
                {props.item.wppr_points})
            </Text>
        );
    }
};

export default Player;
