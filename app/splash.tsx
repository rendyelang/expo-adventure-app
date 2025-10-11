import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, Text, View } from "react-native";
import splashLogo from '../assets/images/react-logo.png';

export default function SplashScreen() {
    const router = useRouter()

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace('/home')
        }, 5000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <View className="flex flex-1 justify-center items-center bg-white">
            <Image source={splashLogo} style={{ width: 150, height: 150 }} />
            <Text className="text-2xl ">My App</Text>
        </View>
    )
}