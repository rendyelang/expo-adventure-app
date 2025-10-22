import { useLiked } from '@/app/context/LikedContext';
import SearchBar from '@/components/SearchBar';
import DestinationCard from '@/components/spesific/DestinationCard';
import FilterBtn from '@/components/spesific/FilterBtn';
import PlanCard from '@/components/spesific/PlanCard';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Text } from "../../../components/Text";
import destinations from "../../../data/destinations";


const Home = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const { likedCount } = useLiked();
    const router = useRouter();

    const filteredDestinations = destinations.filter(item => {
        const query = searchQuery.toLowerCase()
        return (
            item.name.toLowerCase().includes(query) ||
            item.location.toLowerCase().includes(query)
        )
    })

    return (
        <View className="bg-bg-base flex-1">
            <View className="px-7 py-12">
                <View className='justify-between flex-row items-center'>
                    <Text className="text-xl">Hi, {'\n'}
                        <Text className="font-bold">Rendy</Text>
                    </Text>
                    <TouchableOpacity onPress={() => router.push("/detail/liked")} className='relative'>
                        <AntDesign name="heart" size={34} color="#FF7043" />
                        {/* <Text className='absolute bg-black text-white rounded-full p-1 text-sm bottom-0 right-0'>8</Text> */}
                        {likedCount > 0 && (
                            <View className='absolute bg-black rounded-full px-2 py-1 bottom-0 right-0 items-center justify-center'>
                                <Text className='text-white text-xs font-bold'>{likedCount}</Text>
                            </View>
                        )}
                    </TouchableOpacity>
                </View>
                <PlanCard />
                <View className='flex-row justify-between'>
                    <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
                    <FilterBtn />
                </View>
                <View className='mt-3 mb-4 flex-row justify-between items-center'>
                    <Text className='font-semibold text-base'>
                        {searchQuery ? `Search Results (${filteredDestinations.length})` : 'Popular Destination'}
                    </Text>
                    <Text>View All</Text>
                </View>
                <ScrollView
                    contentContainerStyle={{ paddingBottom: 280 }} // tambahkan paddingBottom yang besar
                    showsVerticalScrollIndicator={false}
                >
                    {filteredDestinations.length > 0 ? (
                        filteredDestinations.map((item, index) => (
                            <DestinationCard key={index} item={item} />
                        ))
                    ) : (
                        <View className="py-10 items-center">
                            <Text className="text-gray-400 text-base">
                                No destinations found for "{searchQuery}"
                            </Text>
                        </View>
                    )}
                </ScrollView>
            </View>
        </View>
    )
}

export default Home