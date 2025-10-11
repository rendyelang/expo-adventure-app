import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, Text, View } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(150000);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setPrice(count * 150000);
    }, [count]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="blue" style={{ flex: 1 }} />;
    }

    return (
        <View className='px-5 py-16'>
            <Text className='text-2xl font-bold mb-4 text-center'>Counter App</Text>
            <Text className='text-black'>Count:{count}</Text>
            <Button title="Increment" onPress={() => setCount(count + 1)} />
            <Button title="Decrement" onPress={() => setCount(count - 1)} />

            <View>
                <Text className='text-black mt-4'>Price: {price}</Text>
            </View>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ padding: 10, borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 18 }}>{item.name}</Text>
                        <Text>{item.email}</Text>
                    </View>
                )}
            />
            {/* <Text>Testtt</Text> */}
        </View>
    )
}

export default Counter;