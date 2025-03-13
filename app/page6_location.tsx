import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

const MapScreen: React.FC = () => {
    const params = useLocalSearchParams();
    const router = useRouter();
    const latitude = params.latitude ? parseFloat(params.latitude as string) : 7.0107;
    const longitude = params.longitude ? parseFloat(params.longitude as string) : 125.5754;
    const handleMarkerPress = () => {
        // Alert.alert("Location Selected", `Latitude: ${latitude}\nLongitude: ${longitude}`);
        router.back();
        // router.replace("/")
        router.push({
            pathname: "/",
            params: { latitude, longitude },
        });
    };
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
                    latitude,
                    longitude,
                    latitudeDelta: 0.009,
                    longitudeDelta: 0.009,
                }}
            >
                <Marker coordinate={{ latitude, longitude }} title="Selected Location" onPress={handleMarkerPress} />
            </MapView>
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
