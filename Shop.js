import React from "react";
import { ActivityIndicator, StyleSheet, FlatList, View } from "react-native";
import { PlayerContext } from "./PlayerContext";
import Cart from "./Cart";
import Player from "./Player";

export default function Shop() {
    return (
        <PlayerContext.Consumer>
            {(context) => (
                <View style={styles.container}>
                    {context.isLoading ? (
                        <ActivityIndicator />
                    ) : (
                        <FlatList
                            ListHeaderComponent={
                                <Cart
                                    cart={context.cart}
                                    total={context.total}
                                />
                            }
                            ListHeaderComponentStyle={styles.header}
                            stickyHeaderIndices={[0]}
                            data={context.data}
                            extraData={context.total}
                            keyExtractor={(item) => item.player_id}
                            renderItem={({ item, index }) => (
                                <Player
                                    toBuy={context.buy}
                                    toSell={context.sell}
                                    cart={context.cart}
                                    player={item}
                                    index={index}
                                    total={context.total}
                                    ceiling={context.whopperCeiling}
                                ></Player>
                            )}
                        />
                    )}
                </View>
            )}
        </PlayerContext.Consumer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        height: 200,
        paddingBottom: 6,
    },
});
