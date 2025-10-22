import BackButton from "@/components/BackButton";
import CustomButton from "@/components/CustomButton";
import RatingCard from "@/components/RatingCard";
import RecommendCard from "@/components/RecommendCard";
import TestiCard from "@/components/TestiCard";
import { Text } from "@/components/Text";
import destinations from "@/data/destinations";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import CountryFlag from 'react-native-country-flag';

const DetailPage = () => {
    const { id } = useLocalSearchParams();
    
    // Cari destinasi berdasarkan ID
    const destination = destinations.find(item => item.id === parseInt(id));
    
    // Jika tidak ditemukan, tampilkan pesan error
    if (!destination) {
        return (
            <View className="bg-bg-base flex-1 justify-center items-center">
                <Text className="text-white text-xl">Destination not found</Text>
            </View>
        );
    }

    const [qty, setQty] = useState(1)
    const basePrice = 10000
    const totalAmount = qty * basePrice

     const handleBookNow = () => {
        alert(`Booking ${qty} items with total cost $${totalAmount}`);
    };

    const testimonials = [
        {
            name: "Rendy",
            testi: "The place was so good"
        },
        {
            name: "Eagle",
            testi: "So affordable!"
        }
    ]

    // Mapping country code dari location
    const getCountryCode = (location) => {
        const countryMap = {
            'Indonesia': 'ID',
            'Italy': 'IT',
            'Netherlands': 'NL'
        };
        return countryMap[location] || 'id';
    };

    return (
        <View className="bg-bg-base">
            <ScrollView>
                <ImageBackground className="px-7 py-10" source={destination.image} resizeMode="cover">
                    <View className="flex-row justify-between">
                        <BackButton />
                        <View style={[styles.weatherContainer]}>
                            <Ionicons className="self-start" name="sunny-outline" size={24} color="white" />
                            <Text className="text-xl text-white font-bold self-start">
                                {destination.derajat}° C
                            </Text>
                        </View>
                    </View>
                    <View className="pt-32 flex-col gap-y-4">
                        <RatingCard rating={destination.rating} />
                        <Text className="text-4xl font-semibold text-white">{destination.name}</Text>
                        <Text className="text-gray-100">{destination.description}</Text>
                    </View>
                </ImageBackground>
                <View className="px-7 pt-10 pb-44 relative">
                    <View className="flex-row gap-x-3 items-center">
                        <View style={styles.flagWrapper}>
                            <CountryFlag isoCode={getCountryCode(destination.location)} size={36} />
                        </View>
                        <Text className="text-base text-gray-500">{destination.location}</Text>
                    </View>
                    <Text className="text-xl font-semibold mt-2 mb-6">Discover the Beauty of {destination.location}</Text>
                    {testimonials.map((item, index) => (
                        <TestiCard key={index} name={item.name} review={item.testi} />
                    ))}
                    <RecommendCard />
                </View>
            </ScrollView>
                    <BlurView intensity={100} tint="dark" style={styles.bottomContainer}>
                        <View className="flex-row justify-between items-center mb-5">
                            <View className="flex-row items-center gap-x-6">
                            {/* Tombol Kurangi (-) */}
                            <TouchableOpacity 
                                        className={`w-8 h-8 rounded-full items-center justify-center 
                                                    ${qty === 1 ? 'bg-gray-600' : 'bg-[#FF7043]'}`}
                                        onPress={() => setQty(prev => Math.max(1, prev - 1))}
                                        disabled={qty === 1}
                                    >
                                <Ionicons name="remove-outline" size={24} color="white" />
                            </TouchableOpacity>
                            <Text className="text-white text-2xl font-semibold">{qty}</Text>

                            {/* Tombol Tambah (+) */}
                            <TouchableOpacity 
                                className="w-8 h-8 rounded-full items-center justify-center bg-white"
                                onPress={() => setQty(prev => prev + 1)}
                                >
                                <Ionicons name="add-outline" size={24} color="#FF7043" />
                            </TouchableOpacity>
                            </View>
                            <View>
                                <Text className="text-white font-semibold">Total Amount</Text>
                                <Text className="text-white font-bold text-2xl">${totalAmount}</Text>
                            </View>
                        </View>
                        <CustomButton 
                                title="Book Now"
                                backgroundColor="bg-[#FF7043]"
                                textColor="text-white"
                                width="w-[100%]"
                                onPress={() => handleBookNow()}
                        />
                    </BlurView>
        </View>
    )
}

const styles = StyleSheet.create({
  weatherContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "rgba(55, 65, 81, 0.8)",
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  flagWrapper: {
    width: 34,           // Lebih besar dari size bendera (30+2+2) untuk menampung border
    height: 34,
    borderRadius: 17,    // Setengah dari width/height
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#333',
    // Perlu menyejajarkan CountryFlag di tengah jika ukuran wrapper > ukuran flag
    justifyContent: 'center', 
    alignItems: 'center',
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 20,
    paddingHorizontal: 28,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: "hidden",
    // efek visual tambahan
    backgroundColor: "rgba(30, 41, 59, 0.5)", // semi transparan
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 6,
    elevation: 12,
  },
})

export default DetailPage