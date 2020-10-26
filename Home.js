import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Home Screen</Text>
            <Button
                style={styles.button}
                title="Shoppa loss"
                onPress={() => navigation.navigate("Shop")}
            />
            <Button
                style={styles.button}
                title="Varukorg"
                onPress={() => navigation.navigate("Cart")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 12,
    },
});

export default Home;
