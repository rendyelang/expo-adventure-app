import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  width?: string;
  onPress?: () => void;
}

export default function CustomButton({ 
  title, 
  backgroundColor = 'bg-teal-500', 
  textColor = 'text-black',
  width = 'w-[45%]',
  onPress,
  className,
  ...props 
}: CustomButtonProps) {
  return (
    <TouchableOpacity 
      className={`${backgroundColor} rounded-full items-center py-3 ${width} ${className || ''}`}
      onPress={onPress}
      {...props}
    >
      <Text className={`font-bold ${textColor}`}>{title}</Text>
    </TouchableOpacity>
  );
}