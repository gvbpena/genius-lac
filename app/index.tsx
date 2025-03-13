import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useRef } from "react";
import { View, Button, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const MyWebView = () => {
    const webviewRef = useRef<WebView | null>(null);
    const router = useRouter();
    const params = useLocalSearchParams();

    const returned_latitude = params.latitude ? parseFloat(params.latitude as string) : 7.0107;
    const returned_longitude = params.longitude ? parseFloat(params.longitude as string) : 125.5754;
    const sendMessageToWebView = () => {
        const jsCode = `
    
            document.body.style.backgroundColor = 'red';
            alert('Message sent from React Native! ' + ${returned_latitude} + ' ' + ${returned_longitude});
        `;
        if (webviewRef.current) {
            webviewRef.current.injectJavaScript(jsCode);
        }
    };

    return (
        <View style={styles.container}>
            <WebView
                ref={webviewRef}
                source={{
                    html: `
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1">
                            <title>WebView Communication</title>
                            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
                        </head>
                        <body class="d-flex flex-column align-items-center justify-content-center vh-100">
                            <div class="container text-center">
                                <h1 class="mb-4">WebView Example</h1>
                                <button id="sendMessageButton" class="btn btn-primary">Send Message to React Native</button>
                            </div>
                            <script>
                                document.getElementById('sendMessageButton').onclick = function() {
                                    const data = JSON.stringify({ latitude: 14.82367039, longitude: 120.2839084 });
                                    window.ReactNativeWebView.postMessage(data);
                                };
                            </script>
                            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
                        </body>
                        </html>
                    `,
                }}
                onMessage={(event) => {
                    try {
                        const { latitude, longitude } = JSON.parse(event.nativeEvent.data);
                        router.push({
                            pathname: "/page6_location",
                            params: { latitude, longitude },
                        });
                    } catch (error) {
                        console.error("Error parsing message:", error);
                    }
                }}
            />
            <Button title="Send Message to WebView" onPress={sendMessageToWebView} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingTop: 50,
    },
});

export default MyWebView;
