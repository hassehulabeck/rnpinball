import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    StyleSheet,
    FlatList,
    View,
    TouchableHighlightComponent,
} from "react-native";
import Cart from "./Cart";
import Player from "./Player";

export default function App() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [whopperCeiling, setWhopperCeiling] = useState(1500);

    useEffect(() => {
        fetch("https://www.hulabeck.se/html/temp/swedishIFPAranking.json")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const buy = (index) => {
        setCart((cart) => [...cart, data[index]]);
    };

    const sell = (id) => {
        console.log(id);
        setCart((cart) => cart.filter((player) => player.player_id !== id));
    };

    return (
        <View style={styles.container}>
            <Cart cart={cart} />
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.player_id}
                    renderItem={({ item, index }) => (
                        <Player
                            toBuy={buy}
                            toSell={sell}
                            player={item}
                            index={index}
                            ceiling={whopperCeiling}
                        ></Player>
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
});
