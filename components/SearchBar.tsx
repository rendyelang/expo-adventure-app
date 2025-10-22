import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput, TouchableOpacity, View } from "react-native";

export default function SearchBar({value, onChangeText}) {
      // Fungsi untuk clear search`
        const clearSearch = () => {
            onChangeText("");
        };

    return (
        <View className="bg-tertier flex-row items-center px-4 py-2 rounded-full w-[80%] border border-gray-200">
            <Feather className='px-2' name="search" size={24} color="black" />
            <TextInput 
                className='flex-1'
                placeholder="Search destination.."
                placeholderTextColor="#75746A"
                keyboardAppearance="default"
                value={value}
                onChangeText={onChangeText}
            />
            {value && (
                <TouchableOpacity 
                    onPress={clearSearch}
                    className="text-gray-500 hover:text-gray-700 ml-2">
                    <Ionicons name="close-circle" size={28} color="#666" />
                </TouchableOpacity>
            )}
        </View>
    )
}