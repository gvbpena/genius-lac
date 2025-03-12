// import React, { useEffect, useState } from "react";
// import { View, StyleSheet, Alert } from "react-native";
// import { WebView } from "react-native-webview";
// import * as ImagePicker from "expo-image-picker";
// import * as Location from "expo-location";

// export default function WebViewScreen() {
//     const [permissionsGranted, setPermissionsGranted] = useState(false);

//     useEffect(() => {
//         const requestPermissions = async () => {
//             try {
//                 const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
//                 const locationPermission = await Location.requestForegroundPermissionsAsync();
//                 if (cameraPermission.status === "granted" && locationPermission.status === "granted") {
//                     setPermissionsGranted(true);
//                 } else {
//                     Alert.alert("Permissions Required", "Camera and Location permissions are needed for full functionality.");
//                 }
//             } catch (error) {
//                 console.error("Permission request error:", error);
//             }
//         };

//         requestPermissions();
//     }, []);

//     return (
//         <View style={styles.container}>
//             <WebView
//                 source={{ uri: "https://genius-dev.aboitizpower.com/mygenius2/offlineLAC.php" }}
//                 mediaPlaybackRequiresUserAction={false}
//                 allowsInlineMediaPlayback
//                 geolocationEnabled={true} // Enable location
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
// });
