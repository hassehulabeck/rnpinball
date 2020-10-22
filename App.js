import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    StyleSheet,
    FlatList,
    Text,
    View,
    Pressable,
} from "react-native";
import Cart from "./Cart";

export default function App() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("https://www.hulabeck.se/html/temp/swedishIFPAranking.json")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const onPressButton = (index) => {
        setCart((cart) => [...cart, data[index]]);
    };

    return (
        <View style={styles.container}>
            <Cart cart={cart} />
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => item.player_id}
                    renderItem={({ item, index }) => (
                        <Pressable
                            onPress={() => onPressButton(index)}
                            underlayColor="red"
                        >
                            <Text style={styles.item} id={index}>
                                {index + 1}: {item.first_name} {item.last_name}{" "}
                                ({item.wppr_points})
                            </Text>
                        </Pressable>
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
