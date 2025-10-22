import Entypo from "@expo/vector-icons/Entypo";
import { Pressable, View } from "react-native";
import { Text } from "../Text";

export default function Ticket() {
    return (
        <Pressable className="flex justify-center items-center mb-4">
            <View className="w-full max-w-md bg-white rounded-[41px] shadow-lg overflow-hidden flex-row">
                <View className="bg-secondary w-24 py-14">
                    <View className="flex-row items-center gap-x-4 -rotate-90 w-full mt-[65px]">
                        <View className='bg-black rounded-full p-3 self-start rotate-[125deg]'>
                            <Entypo name="aircraft" size={20} color="white" />
                        </View>
                        <Text className="text-white font-semibold tracking-wider text-lg">AIRLINES</Text>
                    </View>
                </View>

                {/* Konten utama */}
                <View className="flex-1 py-8 px-6">
                {/* Baris 1: Airport Codes - 3 kolom */}
                <View className="flex-row justify-between items-start mb-6">
                    <View className="flex-1">
                        <Text className="text-4xl font-bold">NL</Text>
                        <Text className="text-light text-sm">Rotterdam</Text>
                    </View>
                    <View className="flex-1 items-center pt-2">
                        <Entypo name="aircraft" size={30} color="#1f2937" />
                    </View>
                    <View className="flex-1 items-end">
                        <Text className="text-4xl font-bold">IDN</Text>
                        <Text className="text-light text-sm">Jakarta</Text>
                    </View>
                </View>

                {/* Baris 2: Times - 2 kolom */}
                <View className="flex-row justify-between mb-6">
                    <View>
                        <Text className="text-xl font-bold">5:30pm</Text>
                        <Text className="text-light text-sm">Mon, 23 Jun</Text>
                    </View>
                    <View className="items-end">
                        <Text className="text-xl font-bold">3:30am</Text>
                        <Text className="text-light text-sm">Tue, 24 Jun</Text>
                    </View>
                </View>

                {/* Baris 3: Price */}
                <View>
                    <Text className="text-2xl font-bold">$1.700</Text>
                </View>
            </View>
            </View>
        </Pressable>
    )
}