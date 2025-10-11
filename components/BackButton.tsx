import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from "react-native";

export default function BackButton() {
    const router = useRouter()
    return (
        <TouchableOpacity className="rounded-full p-3 border border-white blur self-start" onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
    )
}