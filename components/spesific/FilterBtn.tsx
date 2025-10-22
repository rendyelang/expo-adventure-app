import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from "react-native";

export default function FilterBtn() {
    return (
        <TouchableOpacity>
            <Ionicons name="filter-circle-sharp" size={54} color="black" />
        </TouchableOpacity>
    )
}