import { useLiked } from '@/app/context/LikedContext';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import { ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "../Text";

// 1. Create a map for local assets
const localImageMap = {
    "labuan-bajo.png": require("../../assets/images/labuan-bajo.png"),
    "venezia.png": require("../../assets/images/venezia.png"),
    "amsterdam.png": require("../../assets/images/amsterdam.png"),
    "banda-neira2.jpg": require("../../assets/images/banda-neira2.jpg"),
    // Add all your image filenames here
};

export default function DestinationCard({item}) {
    const router = useRouter();
    const { toggleLike, isLiked } = useLiked();
    const liked = isLiked(item.id);

    const handleLike = () => {
        toggleLike(item);
    };

    const imageSource = localImageMap[item.image]

    // 3. Check if the image source exists before rendering
    if (!imageSource) {
        console.error(`Local image not found for filename: ${item.image}`);
        return <View style={{ height: 200, backgroundColor: '#ccc' }} />; // Render a fallback
    }

    return (
        <TouchableOpacity onPress={() => router.push({pathname: '/detail/[id]', params: {id: item.id}})} className="rounded-2xl overflow-hidden relative mb-4">
            <ImageBackground className="px-6 pt-36 pb-6 relative" resizeMode="cover" source={imageSource}>
                <TouchableOpacity onPress={handleLike} className='rounded-full overflow-hidden self-start absolute z-10 top-3 right-3'>
                    <BlurView intensity={100} tint='dark' className='p-2'>
                        {/* <EvilIcons name="heart" size={24} color="white" /> */}
                        <Ionicons
                            name={liked ? "heart" : "heart-outline"}
                            size={24}
                            color="white"
                        />
                    </BlurView>
                </TouchableOpacity>
                <View className="flex-row justify-between items-center">
                    <View>
                        <View className='flex-row gap-x-1 items-center'>
                            <Entypo name="location-pin" size={20} color="white" />
                            <Text className="text-white font-semibold">{item.location}</Text>
                        </View>
                        <Text className="text-white font-bold text-lg">{item.name}</Text>
                    </View>
                    <View className='flex-col items-end'>
                        <View className='flex-row gap-x-1 items-center'>
                            <EvilIcons name="star" size={24} color="white" />
                            <Text className="text-white font-semibold">{item.rating}</Text>
                        </View>
                        <Text className="text-white font-bold text-lg">${item.price}/pax</Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    like: {
        borderRadius: 999,
        overflow: 'hidden'
    }
})