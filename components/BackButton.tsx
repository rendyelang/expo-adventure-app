import Ionicons from '@expo/vector-icons/Ionicons';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from "react-native";

export default function BackButton() {
    const router = useRouter()
    return (
        <TouchableOpacity className="rounded-full overflow-hidden border border-white blur self-start" onPress={() => router.back()}>
            <BlurView tint='dark' intensity={100} className='p-3'>
                <Ionicons name="arrow-back" size={24} color="white" />
            </BlurView>
        </TouchableOpacity>
    )
}