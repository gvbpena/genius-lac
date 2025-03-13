import React, { useEffect, useState } from "react";
import { View, Alert, StyleSheet } from "react-native";
import * as Updates from "expo-updates";
import { WebView } from "react-native-webview";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";

export default function App() {
    const [permissionsGranted, setPermissionsGranted] = useState(false);

    const checkForUpdates = async () => {
        try {
            const update = await Updates.checkForUpdateAsync();
            if (update.isAvailable) {
                Alert.alert("Update Available", "A new update is available. Please update to the latest version.", [
                    { text: "Cancel", style: "cancel" },
                    { text: "Update Now", onPress: applyUpdate },
                ]);
            }
        } catch (e) {
            console.error("Update check failed:", e);
        }
    };

    const applyUpdate = async () => {
        try {
            await Updates.fetchUpdateAsync();
            await Updates.reloadAsync();
        } catch (e) {
            console.error("Update fetch failed:", e);
        }
    };

    const requestPermissions = async () => {
        try {
            const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
            const { status: mediaLibraryStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            const { status: locationStatus } = await Location.requestForegroundPermissionsAsync();

            if (cameraStatus === "granted" && mediaLibraryStatus === "granted" && locationStatus === "granted") {
                setPermissionsGranted(true);
            } else {
                Alert.alert("Permissions Required", "Camera, Media Library, and Location permissions are needed for full functionality.");
            }
        } catch (error) {
            console.error("Permission request error:", error);
        }
    };

    useEffect(() => {
        (async () => {
            await checkForUpdates();
            await requestPermissions();
        })();
    }, []);

    if (!permissionsGranted) {
        Alert.alert("Permissions Required", "Please grant necessary permissions in settings.");
    }

    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: "https://genius.aboitizpower.com/mygenius2/login.php" }}
                mediaPlaybackRequiresUserAction={false}
                allowsInlineMediaPlayback
                geolocationEnabled={true}
                javaScriptEnabled={true}
                domStorageEnabled={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
