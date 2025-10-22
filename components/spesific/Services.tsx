import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../Text";

export default function Services({item}) {
    const [selected, setSelected] = useState(false)

    return (
        <TouchableOpacity onPress={() => setSelected(!selected)} className={`px-6 py-3 rounded-full ${selected ? 'bg-secondary' : 'bg-tertier'}`}>
            <Text className={selected ? 'text-white' : 'text-black'}>{item.name}</Text>
        </TouchableOpacity>
    )
}