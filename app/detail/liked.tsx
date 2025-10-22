import BackButton from "@/components/BackButton";
import DestinationCard from "@/components/spesific/DestinationCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView, View } from "react-native";
import { useLiked } from "../../app/context/LikedContext";
import { Text } from "../../components/Text";

export default function LikedPage() {
    const { likedDestinations } = useLiked();

    return (
        <View className="bg-bg-base flex-1">
            <View className="px-7 py-12">
                {/* Header */}
                <View className="flex-row items-center mb-6">
                    <BackButton />
                    <Text className="text-2xl font-bold text-black ml-4">
                        My Wishlist
                    </Text>
                </View>

                {/* Count */}
                <View className="mb-4">
                    <Text className="text-gray-400">
                        {likedDestinations.length} {likedDestinations.length === 1 ? 'destination' : 'destinations'} saved
                    </Text>
                </View>

                {/* List */}
                {likedDestinations.length > 0 ? (
                    <ScrollView
                        contentContainerStyle={{ paddingBottom: 100 }}
                        showsVerticalScrollIndicator={false}
                    >
                        {likedDestinations.map((item, index) => (
                            <DestinationCard key={index} item={item} />
                        ))}
                    </ScrollView>
                ) : (
                    <View className="flex-1 justify-center items-center py-20">
                        <Ionicons name="heart-outline" size={80} color="#666" />
                        <Text className="text-gray-400 text-lg mt-4 text-center">
                            No saved destinations yet
                        </Text>
                        <Text className="text-gray-500 text-sm mt-2 text-center px-10">
                            Start exploring and save your favorite destinations!
                        </Text>
                    </View>
                )}
            </View>
        </View>
    );
}