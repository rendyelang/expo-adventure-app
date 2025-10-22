import BackButton from "@/components/BackButton";
import DateSelector from "@/components/spesific/DateSelector";
import Services from "@/components/spesific/Services";
import Ticket from "@/components/spesific/Ticket";
import { Text } from "@/components/Text";
import Entypo from '@expo/vector-icons/Entypo';
import { ScrollView, TouchableOpacity, View } from "react-native";


const Tickets = () => {
    const services = [
        {
            name: "Hotel"
        },
        {
            name: "Aircraft"
        },
        {
            name: "Villa"
        },
        {
            name: "Attraction Ticket"
        },
        {
            name: "Local Transportaion"
        },
    ]

    const weeks = [
        {
            day: "S",
            date: '22'
        },
        {
            day: "M",
            date: '23'
        },
        {
            day: "T",
            date: '24'
        },
        {
            day: "W",
            date: '25'
        },
        {
            day: "T",
            date: '26'
        },
        {
            day: "F",
            date: '27'
        },
        {
            day: "S",
            date: '28'
        },
    ]

    return (
        <View className="bg-bg-base flex-1">
            <View className="px-7 py-12">
                <View className="flex-row items-center justify-between mb-4">
                    <BackButton />
                    <Text className="font-bold text-xl">Tickets</Text>
                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View className="mb-9">
                    <Text className="text-sm font-light mb-1">Current Locations</Text>
                    <View className="flex-row items-center gap-x-2 mb-6">
                        <Text className="font-bold text-2xl">Netherlands</Text>
                        <TouchableOpacity>
                            <Entypo name="chevron-thin-down" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <ScrollView contentContainerStyle={{ gap: 10 }} horizontal={true}>
                        {services.map((item, index) => (
                            <Services key={index} item={item}  />
                        ))}
                    </ScrollView>
                </View>
                <View className="mb-9">
                    <View className="flex-row items-center gap-x-2 mb-6">
                        <Text className="font-bold text-2xl">June, 2025</Text>
                        <TouchableOpacity>
                            <Entypo name="chevron-thin-down" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <ScrollView contentContainerStyle={{ gap: 10 }} horizontal={true}>
                        {weeks.map((item, index) => (
                            <DateSelector key={index} week={item}  />
                        ))}
                    </ScrollView>
                </View>
                <View>
                    <Text className="font-bold text-2xl mb-6">4 Tickets Found</Text>
                    <ScrollView 
                        contentContainerStyle={{ paddingBottom: 780 }} // tambahkan paddingBottom yang besar
                        showsVerticalScrollIndicator={false}>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <Ticket key={index} />
                        ))}
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default Tickets