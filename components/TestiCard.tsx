import { Image, StyleSheet, Text, View } from "react-native";
import avatar from "../assets/images/avatar.png";

export default function TestiCard({name, review}) {
    return (
        <View className="bg-white rounded-xl p-5 mb-5">
            <View className="flex-row gap-x-1 items-center mb-3">
                <Image style={styles.avatar} source={avatar} resizeMode="cover" />
                <Text className="font-medium">{name}</Text>
            </View>
            <Text>{review}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  avatar: {
    width: 36,        // Ukuran lebar
    height: 36,       // Ukuran tinggi
    borderRadius: 18, // Setengah dari width/height untuk bentuk lingkaran
    marginRight: 10,  // Jarak antara avatar dan teks
  },
})