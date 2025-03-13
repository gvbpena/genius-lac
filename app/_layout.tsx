import { router, Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: "Select Orientaion",
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="page6_location"
                options={{
                    title: "Select Orientaion",
                    headerShown: true,
                }}
            />
        </Stack>
    );
}
