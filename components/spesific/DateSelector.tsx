import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../Text";

export default function DateSelector({week}) {
    const [selected, setSelected] = useState(false)

    return (
        <TouchableOpacity onPress={() => setSelected(!selected)} className={`px-4 py-3 rounded-full ${selected ? 'bg-secondary' : 'bg-tertier'}`}>
            <Text className={`mb-4 text-center ${selected ? 'text-white' : 'text-black'}`}>{week.day}</Text>
            <Text className={selected ? 'text-white' : 'text-black'}>{week.date}</Text>
        </TouchableOpacity>
    )
}