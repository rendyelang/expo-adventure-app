import { Stack } from "expo-router";

export default function TicketLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" options={{ title: 'Ticket Page' }} />
        </Stack>
    )
}