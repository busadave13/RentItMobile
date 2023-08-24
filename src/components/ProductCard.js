import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { products } from "../../products";
import { AntDesign } from "@expo/vector-icons";

export default function ProductCard({
    image,
    category,
    title,
    price,
    description
}) {
    const [count, setCount] = React.useState(1);
    return (
        <View className="w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5">
            <View>
                <Image source={{ uri: image }} className="w-full h-72" style={{ resizeMode: "contain" }}/>
            </View>
            <View className="mt-5">
                <Text className="text-sm text-black/60">{category}</Text>
                <Text className="text-lg font-semibold">{title}</Text>
                <View className="flex-row justify-between my-3">
                    <View className="flex-row gap-3 items-center">
                        <AntDesign name="minuscircleo" size={24} /> 
                        <Text className="text-lg font-semibold">{count}</Text>
                        <AntDesign name="pluscircleo" size={24} />
                    </View>      
                    <Text className="text-2xl font-extrabold">${price}</Text>
                </View>     
                <Text numberOfLines={2} className="text-sm text-black/60">{description}</Text>
                <TouchableOpacity className="flex-row bg-black justify-center w-10/12 self-center p-3 rounded-full m-5">
                    <Text className="text-white font-bold">Add to Cart</Text>
                </TouchableOpacity>
            </View>            
        </View>
    );
}