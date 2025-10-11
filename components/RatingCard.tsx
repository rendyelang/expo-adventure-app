import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, Text, View } from "react-native";

export default function RatingCard() {
    return (
        <View className="self-start flex-row py-2 px-4 rounded-full gap-x-2 bg-slate-600 opacity-80 items-center">
            <AntDesign name="star" size={24} color="white" />
            <Text className="text-white text-2xl font-bold">5.0</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ratingStyle: {
        borderRadius: 9999, // rounded full
        backgroundColor: "rgba(55, 65, 81, 0.8)", // semi-transparent slate-700
    }
})