import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { Image, Text, View } from "react-native";
import labuba2 from "../assets/images/luxury-boat.png";

export default function RecommendCard() {
    return (
        <View className="flex-row gap-x-3 bg-recom-card p-4 rounded-3xl">
            <Image className="w-[45%] rounded-xl aspect-square" source={labuba2} resizeMode="cover" />
            <View>
                <Text className="text-white text-lg font-bold mb-3">Phinisi Luxury</Text>
                <View className='flex-col gap-y-3'>
                    <View className='flex-row gap-x-1 items-center'>
                        <Entypo name="location-pin" size={24} color="white" />
                        <Text className="text-white truncate text-sm font-semibold">Lorem ipsum dolor sit</Text>
                    </View>
                    <View className='flex-row gap-x-1 items-center'>
                        <AntDesign name="star" size={20} color="white" />
                        <Text className="text-white font-semibold">4.8</Text>
                    </View>
                    <Text className='text-white font-semibold'>
                        $3.000 / Night
                    </Text>
                </View>
            </View>
        </View>
    )
}