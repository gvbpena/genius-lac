import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Page6Location: React.FC = () => {
    const params = useLocalSearchParams();

    // Convert latitude and longitude to numbers (since params are strings)
    const latitude = params.latitude ? parseFloat(params.latitude as string) : 7.0107;
    const longitude = params.longitude ? parseFloat(params.longitude as string) : 125.5754;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Latitude: {latitude}</Text>
            <Text style={styles.text}>Longitude: {longitude}</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    map: {
        width: "100%",
        height: "80%",
    },
});

export default Page6Location;
