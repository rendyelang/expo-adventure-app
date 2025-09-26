import { LinearGradient } from 'expo-linear-gradient';
import { Alert, ImageBackground, Text, View } from "react-native";
import forestImg from '../assets/images/forest.png';
import CustomButton from '../components/CustomButton';

export default function Index() {
  const handleButtonPress = () => {
    Alert.alert(
      "Under Maintenance",
      "This feature is currently under maintenance. Please try again later.",
      [{ text: "OK" }]
    );
  };

  return (
    <ImageBackground source={forestImg} className="flex-1 justify-end" resizeMode="cover">
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]}
        style={{ flex: 1, justifyContent: "flex-end" }}
      >
        <View className="p-5 mb-10 space-y-3">
          <Text className="text-white font-bold text-4xl">Your Next Adventure Starts Here</Text>
          <Text className="text-white opacity-80 my-5 text-[13px] leading-5">
            Life&apos;s too short to stay in one place. Find your next favorite city, 
            beach, or mountain and let&apos;s get moving!
          </Text>
          <CustomButton 
            title="Start Exploring"
            backgroundColor="bg-teal-500"
            textColor="text-black"
            width="w-[45%]"
            onPress={handleButtonPress}
          />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}
