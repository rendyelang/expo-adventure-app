import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "../../components/Text";

const PlanCard = () => {
    const router = useRouter()

    return (
        <TouchableOpacity onPress={() => router.push("/tickets")} className="bg-secondary flex-row items-center justify-between py-5 px-4 rounded-3xl my-4 h-40">
            <Text className="text-5xl text-white">Plan Your {'\n'}Summer!</Text>
            <View style={[styles.corns]} className='bg-white/40 rounded-xl flex items-center justify-center h-full px-3 overflow-hidden'>
                <AntDesign name="arrow-right" size={24} color="white" />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    corns: {
        borderRadius: 12
    }
})

export default PlanCard