import React from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Stack } from "expo-router";

const MapScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerTitle: "View Map",
                }}
            />
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 7.0107, // Default to Davao coordinates
                    longitude: 125.5754,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});

export default MapScreen;
