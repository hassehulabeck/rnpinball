import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PlayerContext } from "./PlayerContext";
import Shop from "./Shop";
import Home from "./Home";
import Cart from "./Cart";

const Stack = createStackNavigator();

export default function App() {
    const [whopperCeiling, setWhopperCeiling] = useState(1500);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const buy = (index) => {
        setCart((cart) => [...cart, data[index]]);
    };

    const sell = (id) => {
        console.log(id);
        setCart((cart) => cart.filter((player) => player.player_id !== id));
    };

    useEffect(() => {
        fetch("https://www.hulabeck.se/html/temp/swedishIFPAranking.json")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        let total = cart.reduce(
            (prevValue, currentValue) =>
                prevValue + Number(currentValue.wppr_points),
            0
        );
        setTotal(total);
    }, [cart]);

    return (
        <PlayerContext.Provider
            value={{
                data: data,
                cart: cart,
                total: total,
                whopperCeiling: whopperCeiling,
                buy: buy,
                sell: sell,
                isLoading: isLoading,
            }}
        >
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Shop" component={Shop} />
                    <Stack.Screen name="Cart" component={Cart} />
                </Stack.Navigator>
            </NavigationContainer>
        </PlayerContext.Provider>
    );
}
